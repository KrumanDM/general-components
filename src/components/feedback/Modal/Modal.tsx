import React from "react";
import Button from "../../ui/Button/Button";
import s from "./Modal.module.css";


export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  className?: string;
  children: React.ReactNode;
};

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, variant = "primary", size = "medium", className, children }, ref) => {
    if (!isOpen) return null;

    return (
      <div className={s.overlay} onClick={onClose}>
        <div
          ref={ref}
          className={`${s.modal} ${s[variant]} ${s[size]} ${className || ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Кнопка закрытия через твой Button */}
          <Button
            variant="secondary"
            className={s.close}
            onClick={onClose}
            aria-label="Закрыть модалку"
          >
            ×
          </Button>

          <div className={s.content}>{children}</div>
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
