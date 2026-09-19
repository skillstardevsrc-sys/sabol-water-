import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';

const MAX_RIPPLES = 36;

const VERTEX_SHADER_SOURCE = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = (a_position + 1.0) * 0.5;
    v_uv.y = 1.0 - v_uv.y; // Flip Y for WebGL texture coordinates
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER_SOURCE = `
  precision highp float;
  varying vec2 v_uv;
  
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;
  uniform vec2 u_image_resolution;
  uniform float u_time;
  uniform vec3 u_ripples[${MAX_RIPPLES}]; // x, y, start_time
  uniform float u_ripple_intensity[${MAX_RIPPLES}];
  uniform int u_ripple_count;
  uniform float u_align_x; // 0.8 for right 20% center

  vec2 getCoverUV(vec2 uv, vec2 screenRes, vec2 imgRes, float alignX) {
    float screenRatio = screenRes.x / screenRes.y;
    float imgRatio = imgRes.x / imgRes.y;
    vec2 newUV = uv;
    
    if (screenRatio > imgRatio) {
      float scale = screenRatio / imgRatio;
      newUV.y = (uv.y - 0.5) / scale + 0.5;
    } else {
      float scale = imgRatio / screenRatio;
      newUV.x = (uv.x - alignX) / scale + alignX;
    }
    return newUV;
  }

  void main() {
    vec2 uv = v_uv;
    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
    vec2 uvAspect = uv * aspect;
    
    vec2 totalDistortion = vec2(0.0);
    float totalWaveHeight = 0.0;
    
    // 1. Ambient gentle realistic water breathing & subtle liquid flow
    float amb1 = sin(uvAspect.x * 5.0 + u_time * 1.3) * cos(uvAspect.y * 5.0 + u_time * 1.1);
    float amb2 = cos(uvAspect.x * 10.0 - u_time * 1.6) * sin(uvAspect.y * 9.0 + u_time * 1.4);
    vec2 ambientOffset = vec2(amb1, amb2) * 0.003;
    totalDistortion += ambientOffset;
    totalWaveHeight += (amb1 + amb2) * 0.5;

    // 2. Interactive Cursor Water Ripples & Shockwaves
    for (int i = 0; i < ${MAX_RIPPLES}; i++) {
      if (i >= u_ripple_count) break;
      
      vec2 ripplePos = u_ripples[i].xy;
      float startTime = u_ripples[i].z;
      float intensity = u_ripple_intensity[i];
      
      float elapsed = u_time - startTime;
      if (elapsed > 0.0 && elapsed < 2.8) {
        vec2 diffVec = uvAspect - ripplePos * aspect;
        float dist = length(diffVec);
        
        float waveSpeed = 0.52;
        float waveFront = elapsed * waveSpeed;
        float waveDist = dist - waveFront;
        
        // Multi-crest concentric wave ring envelope
        float ringThickness = 0.18;
        if (abs(waveDist) < ringThickness) {
          float waveDecay = exp(-elapsed * 2.0) * exp(-dist * 1.2);
          float waveShape = sin(waveDist * 46.0) * exp(-pow(waveDist / 0.065, 2.0));
          
          float waveAmp = waveShape * waveDecay * intensity * 0.042;
          
          vec2 dir = normalize(diffVec + 0.0001);
          totalDistortion += dir * waveAmp;
          totalWaveHeight += waveAmp * 35.0;
        }
      }
    }

    // Map cover UV with liquid refraction distortion
    vec2 coverUV = getCoverUV(uv + totalDistortion, u_resolution, u_image_resolution, u_align_x);
    coverUV = clamp(coverUV, 0.0, 1.0);

    // Realistic Chromatic Dispersion (Prismatic RGB split when water bends light)
    vec2 rUV = getCoverUV(uv + totalDistortion * 1.12, u_resolution, u_image_resolution, u_align_x);
    vec2 bUV = getCoverUV(uv + totalDistortion * 0.88, u_resolution, u_image_resolution, u_align_x);
    
    float r = texture2D(u_texture, clamp(rUV, 0.0, 1.0)).r;
    float g = texture2D(u_texture, coverUV).g;
    float b = texture2D(u_texture, clamp(bUV, 0.0, 1.0)).b;
    
    vec3 color = vec3(r, g, b);
    
    // Water surface specular sun/light glint & caustics
    vec3 lightDir = normalize(vec3(0.5, 0.8, 1.0));
    vec3 normal = normalize(vec3(totalDistortion * 110.0, 1.0));
    float specular = pow(max(0.0, dot(normal, lightDir)), 28.0) * 0.32;
    
    // Crystal water shine
    color += vec3(specular) * vec3(0.9, 0.96, 1.0);
    
    // Refreshing aqua tint on wave crests
    if (totalWaveHeight > 0.015) {
      color = mix(color, vec3(0.65, 0.9, 1.0), min(0.14, totalWaveHeight * 0.18));
    }

    gl_FragColor = vec4(color, 1.0);
  }
`;

export const WaterRippleBackground = forwardRef(({
  imageSrc,
  alignX = 0.8,
  className = '',
}, ref) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);

  const ripplesRef = useRef([]);
  const lastMousePosRef = useRef({ x: -1, y: -1, time: 0 });
  const animationFrameRef = useRef(null);
  const glContextRef = useRef(null);
  const startTimeRef = useRef(performance.now());
  const imageSizeRef = useRef({ width: 1920, height: 1080 });

  const addRippleAtCoords = (clientX, clientY, speedMultiplier = 1) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;

    if (x < -0.1 || x > 1.1 || y < -0.1 || y > 1.1) return;

    const clampedX = Math.max(0, Math.min(1, x));
    const clampedY = Math.max(0, Math.min(1, y));

    const now = (performance.now() - startTimeRef.current) / 1000;
    const last = lastMousePosRef.current;
    
    const dx = clampedX - last.x;
    const dy = clampedY - last.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const dt = now - last.time;

    // Minimum movement or interval to create ripples
    if (dist > 0.012 || (dist > 0.003 && dt > 0.05) || speedMultiplier > 1.2) {
      const speed = Math.min(dist / Math.max(dt, 0.01), 6.0);
      const intensity = Math.min(0.7 + speed * 0.5 * speedMultiplier, 2.2);

      ripplesRef.current.push({
        x: clampedX,
        y: clampedY,
        startTime: now,
        intensity,
      });

      if (ripplesRef.current.length > MAX_RIPPLES) {
        ripplesRef.current.shift();
      }

      lastMousePosRef.current = { x: clampedX, y: clampedY, time: now };
    }
  };

  useImperativeHandle(ref, () => ({
    addRipple: (clientX, clientY, multiplier = 1) => {
      addRippleAtCoords(clientX, clientY, multiplier);
    },
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext('webgl', { alpha: false, antialias: true }) ||
      canvas.getContext('experimental-webgl');

    if (!gl) {
      setWebglSupported(false);
      return;
    }

    glContextRef.current = gl;

    const createShader = (gl, type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);

    if (!vertexShader || !fragmentShader) {
      setWebglSupported(false);
      return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('Program link error:', gl.getProgramInfoLog(program));
      setWebglSupported(false);
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const aPositionLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPositionLoc);
    gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 0, 0);

    const uResolutionLoc = gl.getUniformLocation(program, 'u_resolution');
    const uImageResolutionLoc = gl.getUniformLocation(program, 'u_image_resolution');
    const uTimeLoc = gl.getUniformLocation(program, 'u_time');
    const uAlignXLoc = gl.getUniformLocation(program, 'u_align_x');
    const uRipplesLoc = gl.getUniformLocation(program, 'u_ripples');
    const uRippleIntensityLoc = gl.getUniformLocation(program, 'u_ripple_intensity');
    const uRippleCountLoc = gl.getUniformLocation(program, 'u_ripple_count');
    const uTextureLoc = gl.getUniformLocation(program, 'u_texture');

    gl.uniform1i(uTextureLoc, 0);
    gl.uniform1f(uAlignXLoc, alignX);

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([189, 228, 249, 255])
    );

    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = imageSrc;
    image.onload = () => {
      imageSizeRef.current = {
        width: image.naturalWidth || 1920,
        height: image.naturalHeight || 1080,
      };

      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    };

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = Math.round(rect.width * dpr);
      const displayHeight = Math.round(rect.height * dpr);

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, displayWidth, displayHeight);
      }
    };

    handleResize();
    const resizeObserver = new ResizeObserver(() => handleResize());
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    window.addEventListener('resize', handleResize);

    // Natural occasional water droplets falling in the background
    const idleDropInterval = setInterval(() => {
      const now = (performance.now() - startTimeRef.current) / 1000;
      ripplesRef.current.push({
        x: 0.25 + Math.random() * 0.55,
        y: 0.25 + Math.random() * 0.55,
        startTime: now,
        intensity: 0.5 + Math.random() * 0.4,
      });
      if (ripplesRef.current.length > MAX_RIPPLES) {
        ripplesRef.current.shift();
      }
    }, 2800);

    const render = () => {
      const now = (performance.now() - startTimeRef.current) / 1000;

      ripplesRef.current = ripplesRef.current.filter(
        (r) => now - r.startTime < 2.8
      );

      gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
      gl.uniform2f(
        uImageResolutionLoc,
        imageSizeRef.current.width,
        imageSizeRef.current.height
      );
      gl.uniform1f(uTimeLoc, now);
      gl.uniform1f(uAlignXLoc, alignX);

      const activeCount = Math.min(ripplesRef.current.length, MAX_RIPPLES);
      gl.uniform1i(uRippleCountLoc, activeCount);

      if (activeCount > 0) {
        const rippleData = new Float32Array(MAX_RIPPLES * 3);
        const intensityData = new Float32Array(MAX_RIPPLES);

        for (let i = 0; i < activeCount; i++) {
          const r = ripplesRef.current[i];
          rippleData[i * 3 + 0] = r.x;
          rippleData[i * 3 + 1] = r.y;
          rippleData[i * 3 + 2] = r.startTime;
          intensityData[i] = r.intensity;
        }

        gl.uniform3fv(uRipplesLoc, rippleData);
        gl.uniform1fv(uRippleIntensityLoc, intensityData);
      }

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      clearInterval(idleDropInterval);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (gl) {
        gl.deleteProgram(program);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        gl.deleteTexture(texture);
        gl.deleteBuffer(positionBuffer);
      }
    };
  }, [imageSrc, alignX]);

  return (
    <div
      ref={containerRef}
      onPointerMove={(e) => addRippleAtCoords(e.clientX, e.clientY, 1.0)}
      onClick={(e) => addRippleAtCoords(e.clientX, e.clientY, 2.0)}
      onTouchMove={(e) => {
        if (e.touches && e.touches[0]) {
          addRippleAtCoords(e.touches[0].clientX, e.touches[0].clientY, 1.2);
        }
      }}
      className={`relative w-full h-full select-none overflow-hidden ${className}`}
    >
      {webglSupported ? (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover block pointer-events-none"
        />
      ) : (
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundPosition: 'right 20% center',
          }}
        />
      )}
    </div>
  );
});

export default WaterRippleBackground;
