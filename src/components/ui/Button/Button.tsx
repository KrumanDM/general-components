import React from "react";
import Spinner from "../../feedback/Spinner/Spinner";
import s from "./Button.module.css";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  isLoading?: boolean; // Добавляем проп
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = "primary", size = "medium", isLoading, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || disabled} // Блокируем при загрузке
        className={`${s.button} ${s[variant]} ${s[size]} ${className || ""} ${isLoading ? s.loading : ""}`}
        {...props}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em', justifyContent: 'center' }}>
          {isLoading && <Spinner size="small" />} 
          <span>{children}</span>
        </div>
      </button>
    );
  }
);
export default Button;
