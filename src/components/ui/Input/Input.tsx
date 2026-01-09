import React from "react";
import s from "./Input.module.css";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
};


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "primary", size = "medium", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`${s.input} ${s[variant]} ${s[size]} ${className || ""}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
