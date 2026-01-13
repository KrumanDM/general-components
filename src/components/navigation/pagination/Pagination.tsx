import Button from "../../ui/Button/Button";
import s from "./Pagination.module.css";

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number; // Сколько кнопок отображать по бокам от текущей
  className?: string;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className = "",
}: PaginationProps) => {
  
  // Логика формирования массива страниц с сокращениями (...)
  const getPaginationRange = () => {
    const range: (number | string)[] = [];
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    // Всегда показываем первую страницу
    range.push(1);

    if (shouldShowLeftDots) {
      range.push("...");
    } else if (totalPages > 1 && leftSiblingIndex > 1) {
      for (let i = 2; i < leftSiblingIndex; i++) range.push(i);
    }

    // Центральная часть (вокруг текущей страницы)
    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      if (i !== 1 && i !== totalPages) {
        range.push(i);
      }
    }

    if (shouldShowRightDots) {
      range.push("...");
    } else if (totalPages > 1 && rightSiblingIndex < totalPages) {
      for (let i = rightSiblingIndex + 1; i < totalPages; i++) range.push(i);
    }

    // Всегда показываем последнюю страницу
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };

  if (totalPages <= 1) return null;

  const paginationRange = getPaginationRange();

  return (
    <nav className={`${s.container} ${className}`} aria-label="Навигация по страницам">
      <Button
        variant="secondary"
        size="small"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lsaquo;
      </Button>

      <ul className={s.list}>
        {paginationRange.map((page, index) => {
          if (page === "...") {
            return <li key={`dots-${index}`} className={s.dots}>&#8230;</li>;
          }

          return (
            <li key={page}>
              <Button
                variant={currentPage === page ? "primary" : "secondary"}
                size="small"
                onClick={() => onPageChange(page as number)}
                className={currentPage === page ? s.active : ""}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </Button>
            </li>
          );
        })}
      </ul>

      <Button
        variant="secondary"
        size="small"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &rsaquo;
      </Button>
    </nav>
  );
};

export default Pagination;
