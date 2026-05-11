import type { CSSProperties } from "react";

export type CardTitleState = "default" | "focus";

export interface CardTitleProps {
  /** 카드 제목 텍스트 */
  children: React.ReactNode;
  /** 상태. focus일 때 하단 밑줄 표시 */
  state?: CardTitleState;
  className?: string;
}

const BASE_STYLE: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "var(--font-family-pretendard)",
  fontSize: "var(--font-size-12)",
  fontWeight: "var(--font-weight-bold)",
  lineHeight: "var(--line-height-16)",
  color: "var(--text-grey)",
  letterSpacing: 0,
  whiteSpace: "nowrap",
};

const FOCUS_STYLE: CSSProperties = {
  borderBottom: "1px solid var(--border-grey)",
  paddingBottom: "1px",
};

export function CardTitle({
  children,
  state = "default",
  className,
}: CardTitleProps) {
  const style: CSSProperties = {
    ...BASE_STYLE,
    ...(state === "focus" ? FOCUS_STYLE : {}),
  };

  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
}
