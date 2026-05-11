import type { CSSProperties } from "react";

export type BannerOrientation = "vertical" | "horizontal";

export interface BannerProps {
  /** 배너 이미지 URL */
  src: string;
  /** 이미지 대체 텍스트 */
  alt?: string;
  /** 레이아웃 방향. vertical=236×315, horizontal=280×188 */
  orientation?: BannerOrientation;
  /** 이벤트 카테고리 레이블 (예: "Melon Event"). vertical 전용 */
  label?: string;
  /** 메인 제목 (예: "홍이삭"). vertical 전용 */
  title?: string;
  /** 서브타이틀 (예: "단독 콘서트 'Sway' 초대 이벤트"). vertical 전용 */
  subtitle?: string;
  /** 클릭 핸들러 */
  onClick?: () => void;
  className?: string;
}

const VERTICAL_SIZE: CSSProperties = {
  width: "236px",
  height: "315px",
};

const HORIZONTAL_SIZE: CSSProperties = {
  width: "280px",
  height: "188px",
};

const containerBase: CSSProperties = {
  position: "relative",
  overflow: "hidden",
  flexShrink: 0,
  cursor: "pointer",
};

const imgStyle: CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  pointerEvents: "none",
  display: "block",
};

const overlayStyle: CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "90px",
  display: "flex",
  flexDirection: "column",
  gap: "var(--spacing-xxs)",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingLeft: "var(--spacing-md)",
  paddingTop: "var(--spacing-xs)",
  paddingBottom: "var(--spacing-xs)",
  backdropFilter: "blur(2px)",
  backgroundColor: "var(--color-green-800)",
  boxSizing: "border-box",
};

const labelStyle: CSSProperties = {
  fontFamily: "var(--font-family-pretendard)",
  fontSize: "var(--font-size-12)",
  fontWeight: "var(--font-weight-bold)",
  lineHeight: "var(--line-height-16)",
  color: "var(--color-yellow-400)",
  letterSpacing: 0,
  whiteSpace: "nowrap",
};

const titleStyle: CSSProperties = {
  fontFamily: "var(--font-family-pretendard)",
  fontSize: "var(--font-size-17)",
  fontWeight: "var(--font-weight-bold)",
  lineHeight:
    "28px" /* ⚠️ 누락된 토큰: Figma lineHeight=28px, --line-height-* 에 없음 */,
  color: "var(--text-primary-white)",
  letterSpacing: 0,
  whiteSpace: "nowrap",
};

const subtitleStyle: CSSProperties = {
  fontFamily: "var(--font-family-pretendard)",
  fontSize: "var(--font-size-13)",
  fontWeight: "var(--font-weight-regular)",
  lineHeight: "var(--line-height-16)",
  color: "var(--color-white-60)",
  letterSpacing: 0,
  whiteSpace: "nowrap",
};

export function Banner({
  src,
  alt = "",
  orientation = "vertical",
  label,
  title,
  subtitle,
  onClick,
  className,
}: BannerProps) {
  const isVertical = orientation === "vertical";

  const containerStyle: CSSProperties = {
    ...containerBase,
    ...(isVertical ? VERTICAL_SIZE : HORIZONTAL_SIZE),
  };

  return (
    <div
      className={className}
      style={containerStyle}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick();
            }
          : undefined
      }
    >
      <img src={src} alt={alt} style={imgStyle} />

      {isVertical && (label || title || subtitle) && (
        <div style={overlayStyle}>
          {label && <span style={labelStyle}>{label}</span>}
          {title && <span style={titleStyle}>{title}</span>}
          {subtitle && <span style={subtitleStyle}>{subtitle}</span>}
        </div>
      )}
    </div>
  );
}
