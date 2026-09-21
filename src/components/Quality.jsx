import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Droplets, Sparkles, ShieldCheck, Microscope, PackageCheck, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 40;

const stages = [
  {
    id: 1,
    range: [0, 9],
    step: '01',
    title: 'Natural Underground Aquifers',
    subtitle: 'Protected Pristine Source',
    desc: 'Procured from deeply protected underground natural aquifers with optimal initial purity.',
    icon: Droplets,
    badge: 'Stage 1: Source',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 2,
    range: [10, 19],
    step: '02',
    title: 'Multi-Stage Micro Filtration',
    subtitle: 'Sediment & Carbon Filtration',
    desc: 'Removes suspended particles, sediments, and organic compounds while preserving clean flow.',
    icon: ShieldCheck,
    badge: 'Stage 2: Filtration',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 3,
    range: [20, 29],
    step: '03',
    title: 'RO Membrane & UV Sterilization',
    subtitle: 'Molecular Purification',
    desc: 'High-pressure reverse osmosis and ultraviolet radiation destroy 99.99% of bacteria and microbes.',
    icon: Sparkles,
    badge: 'Stage 3: Sterilization',
    color: 'from-sky-400 to-cyan-600',
  },
  {
    id: 4,
    range: [30, 39],
    step: '04',
    title: 'Mineral Balance & Sterile Bottling',
    subtitle: 'Touchless Automated Packing',
    desc: 'Infused with vital natural minerals and sealed in touchless cleanrooms in food-grade bottles.',
    icon: PackageCheck,
    badge: 'Stage 4: Pure Finish',
    color: 'from-emerald-400 to-teal-600',
  },
];

export const Quality = ({ onOpenOrderModal }) => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');

    const playhead = { frame: 0 };
    const images = [];
    let loadedCount = 0;

    const renderFrame = (index) => {
      if (!canvas || !context) return;
      const frameImg = images[index] || images[0];
      if (!frameImg || !frameImg.complete || frameImg.naturalWidth === 0) return;

      const width = canvas.width;
      const height = canvas.height;

      context.clearRect(0, 0, width, height);

      // Complete 100% Fullscreen Edge-to-Edge - Zero Cut / Zero Cropping
      context.drawImage(frameImg, 0, 0, width, height);
    };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(playhead.frame);
    };

    // Preload all 40 frames
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNumber = String(i).padStart(3, '0');
      img.src = `/ezgif-frame-${frameNumber}.png`;
      img.onload = () => {
        loadedCount++;
        if (i === 1 || loadedCount === 1) {
          renderFrame(0);
        }
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
          renderFrame(playhead.frame);
        }
      };
      images.push(img);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    const isDesktop = window.innerWidth >= 768;

    const ctx = gsap.context(() => {
      if (isDesktop && sectionRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=250%',
          pin: true,
          scrub: 0.6,
          onUpdate: (self) => {
            const progress = self.progress;
            const frameIndex = Math.min(
              TOTAL_FRAMES - 1,
              Math.floor(progress * TOTAL_FRAMES)
            );
            
            playhead.frame = frameIndex;
            renderFrame(frameIndex);
            setProgressPercent(Math.round(progress * 100));

            // Determine active stage
            const activeStageIdx = stages.findIndex(
              (stg) => frameIndex >= stg.range[0] && frameIndex <= stg.range[1]
            );
            if (activeStageIdx !== -1) {
              setCurrentStageIndex(activeStageIdx);
            }
          },
        });
      }
    }, sectionRef);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. MOBILE VIEW: Formal, Clean & Standard Purification Process Section     */}
      {/* ========================================================================= */}
      <section
        id="quality"
        className="block md:hidden py-14 px-4 bg-gradient-to-b from-[#071b38] via-[#09254d] to-[#05142b] text-white relative overflow-hidden"
      >
        <div className="max-w-xl mx-auto space-y-6">
          
          {/* Formal Section Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 text-[11px] font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>PURIFICATION PROCESS</span>
            </div>
            
            <h2 className="text-2xl font-black text-white font-display tracking-tight">
              Pure at Every Stage
            </h2>
            
            <p className="text-xs text-slate-300 font-medium leading-relaxed">
              Advanced Multi-Stage Water Purification Process
            </p>
          </div>

          {/* Formal 4-Stage Cards List */}
          <div className="space-y-4 pt-2">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.id}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 shadow-lg relative overflow-hidden text-left"
                >
                  <div className="flex items-start gap-3.5">
                    {/* Stage Number & Icon */}
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stage.color} flex items-center justify-center text-white shadow-md flex-shrink-0 mt-0.5`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Stage Tag */}
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300">
                          {stage.badge}
                        </span>
                        <span className="text-xs font-black text-white/60 font-display">
                          {stage.step}
                        </span>
                      </div>

                      {/* Stage Title */}
                      <h3 className="text-base font-bold text-white font-display leading-snug mb-0.5">
                        {stage.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-xs font-semibold text-cyan-200/90 mb-2">
                        {stage.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {stage.desc}
                      </p>

                      {/* Quality Assurance Highlight */}
                      <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Certified Purity & Hygiene Validation</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Bottom Formal Action */}
          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={() => onOpenOrderModal ? onOpenOrderModal('quality') : null}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-sabol-navy-950 font-black text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              <span>Order Quality Assured Water</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DESKTOP VIEW: Cinematic GSAP Video Canvas Scroll Section               */}
      {/* ========================================================================= */}
      <section
        ref={sectionRef}
        className="hidden md:block relative w-full h-screen bg-black text-white overflow-hidden"
      >
        {/* 100% Full View Edge-to-Edge GSAP Video Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover block select-none pointer-events-none z-0"
        />

        {/* Cinematic Vignette Overlays for Depth and Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-black/25 pointer-events-none z-10" />

        {/* Top Floating Header */}
        <div className="absolute top-0 left-0 right-0 z-20 pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pointer-events-none">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
            {/* Header Title */}
            <div className="text-center md:text-left bg-black/40 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10 shadow-2xl inline-block pointer-events-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight drop-shadow-lg">
                Pure at Every Stage
              </h2>
              <p className="text-xs sm:text-sm text-cyan-200/90 mt-1 font-medium">
                Advanced Multi-Stage Water Purification Process
              </p>
            </div>
          </div>
        </div>

        {/* Floating Bottom-Right CTA Button */}
        <div className="absolute bottom-20 sm:bottom-16 right-4 sm:right-8 md:right-12 z-20 hidden md:block">
          <button
            type="button"
            onClick={() => onOpenOrderModal ? onOpenOrderModal('quality') : null}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-sabol-navy-950 font-extrabold text-sm shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:shadow-[0_0_35px_rgba(6,182,212,0.9)] transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5"
          >
            <span>Discover Our Quality</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Line Bar at Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 z-20">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all duration-150"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </section>
    </>
  );
};

export default Quality;
