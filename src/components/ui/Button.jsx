import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs sm:text-sm gap-1.5",
    md: "px-6 py-3 text-sm sm:text-base gap-2",
    lg: "px-8 py-4 text-base sm:text-lg gap-2.5",
  };

  const variants = {
    primary: "bg-gradient-to-r from-sabol-blue to-sabol-aqua text-white shadow-water hover:shadow-water-lg hover:brightness-110 focus:ring-sabol-aqua hover:-translate-y-0.5",
    secondary: "bg-white text-sabol-navy-900 border border-slate-200 hover:border-sabol-aqua/60 shadow-sm hover:shadow-md hover:bg-sabol-ice-50 focus:ring-sabol-blue hover:-translate-y-0.5",
    outline: "border-2 border-sabol-blue text-sabol-blue hover:bg-sabol-blue hover:text-white focus:ring-sabol-blue hover:-translate-y-0.5",
    ghost: "text-slate-700 hover:text-sabol-blue hover:bg-sabol-ice-100/70 focus:ring-sabol-blue",
    whatsapp: "bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md hover:shadow-lg focus:ring-[#25D366] hover:-translate-y-0.5",
    white: "bg-white text-sabol-navy-900 hover:bg-sabol-ice-100 shadow-water hover:shadow-water-lg focus:ring-white hover:-translate-y-0.5 font-bold",
    navy: "bg-sabol-navy-900 text-white hover:bg-sabol-navy-800 shadow-md focus:ring-sabol-navy-900 hover:-translate-y-0.5"
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />}
    </button>
  );
};
export default Button;
