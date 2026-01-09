import React from "react";
import s from "./Modal.module.css";

export type ModalProps = {
  /** Управляет видимостью модального окна */
  isOpen: boolean;
  /** Закрытие модального окна */
  onClose: () => void;
  /** Вариант оформления */
  variant?: "primary" | "secondary" | "danger";
  /** Размер модального окна */
  size?: "small" | "medium" | "large";
  /** Дополнительные классы */
  className?: string;
  /** Контент модального окна */
  children: React.ReactNode;
};

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, variant = "primary", size = "mediun", className, children }, ref) => {
    if (!isOpen) return null;

    return (
      <div className={s.overlay} onClick={onClose}>
        <div
          ref={ref}
          className={`${s.modal} ${s[variant]} ${s[size]} ${className || ""}`}
          onClick={(e) => e.stopPropagation()} // чтобы клик внутри не закрывал
        >
          <button className={s.close} onClick={onClose}>
            ×
          </button>
          <div className={s.content}>{children}</div>
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
