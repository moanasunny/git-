import { type InputHTMLAttributes } from "react";
import { Icon } from "../Icon/Icon";
import "./SearchBar.css";

export interface SearchBarProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  /** 검색 실행 콜백 (아이콘 클릭 또는 Enter) */
  onSearch?: (value: string) => void;
  /** 추가 className */
  className?: string;
}

export function SearchBar({
  placeholder = "지금 듣고 싶은 음악이 검색해주세요",
  onSearch,
  className,
  onKeyDown,
  ...rest
}: SearchBarProps) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onSearch?.((e.currentTarget as HTMLInputElement).value);
    }
    onKeyDown?.(e);
  }

  function handleIconClick(e: React.MouseEvent<HTMLButtonElement>) {
    const input = (e.currentTarget.parentElement as HTMLElement).querySelector(
      "input",
    ) as HTMLInputElement | null;
    onSearch?.(input?.value ?? "");
  }

  return (
    <div className={["search-bar", className].filter(Boolean).join(" ")}>
      <input
        type="text"
        className="search-bar__input"
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        {...rest}
      />
      <button
        type="button"
        className="search-bar__icon-btn"
        aria-label="검색"
        onClick={handleIconClick}
      >
        <Icon name="search" size="lg" color="var(--icon-accent)" />
      </button>
    </div>
  );
}
