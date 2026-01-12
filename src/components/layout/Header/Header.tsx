import { ReactNode } from "react";
import s from "./Header.module.css";

export type HeaderProps = {
  children: ReactNode;
  sticky?: boolean;
  className?: string;
};

// Основной контейнер
const Header = ({ children, sticky = false, className = "" }: HeaderProps) => {
  return (
    <header className={`${s.header} ${sticky ? s.sticky : ""} ${className}`}>
      <div className={s.container}>
        {children}
      </div>
    </header>
  );
};

// Секция для логотипа или названия
export const HeaderLeft = ({ children }: { children: ReactNode }) => (
  <div className={s.left}>{children}</div>
);

// Секция для навигации
export const HeaderCenter = ({ children }: { children: ReactNode }) => (
  <nav className={s.center}>{children}</nav>
);

// Секция для кнопок, профиля, переключателей
export const HeaderRight = ({ children }: { children: ReactNode }) => (
  <div className={s.right}>{children}</div>
);

export default Header;
