import React from "react";
import s from "./Spinner.module.css";

// Расширяем стандартными атрибутами div (включая style и className)
export type SpinnerProps = React.HTMLAttributes<HTMLDivElement> & {
    size?: "small" | "medium" | "large";
    variant?: "current" | "primary" | "secondary" | "inverted";
  };
  
  const Spinner: React.FC<SpinnerProps> = ({ 
    size = "medium", 
    variant = "current", 
    className = "",
    style, // извлекаем style
    ...props // собираем остальные атрибуты (id, aria-label и т.д.)
  }) => {
    return (
      <div 
        className={`${s.spinner} ${s[size]} ${s[variant]} ${className}`}
        style={style} // передаем style в DOM-элемент
        role="status"
        {...props} // прокидываем остальные пропсы
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
