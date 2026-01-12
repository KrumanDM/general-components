import React from "react";
import s from "./Spinner.module.css";

export type SpinnerProps = {
  size?: "small" | "medium" | "large";
  variant?: "current" | "primary" | "secondary" | "inverted";
  className?: string;
};

const Spinner: React.FC<SpinnerProps> = ({ 
  size = "medium", 
  variant = "current", 
  className = "" 
}) => {
  return (
    <div 
      className={`${s.spinner} ${s[size]} ${s[variant]} ${className}`}
      role="status"
      aria-label="Загрузка"
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="www.w3.org">
        <circle 
          className={s.path} 
          cx="12" cy="12" r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};

export default Spinner;
