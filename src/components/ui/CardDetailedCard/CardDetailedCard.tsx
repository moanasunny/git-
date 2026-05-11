import type { CSSProperties } from "react";
import { CardImage } from "../CardImage";
import { CardTitle } from "../CardTitle";

export type CardDetailedCardLayout = "vertical" | "horizontal";
export type CardDetailedCardState = "default" | "focus";

export interface CardDetailedCardProps {
  /** 썸네일 이미지 URL */
  src?: string;
  /** 콘텐츠 제목 */
  title?: string;
  /** 아티스트/작가명 */
  artist?: string;
  /** 플랫폼 레이블 (예: 멜론TV) */
  platformLabel?: string;
  /**
   * vertical: 이미지 위, 텍스트 아래 (223×148 이미지)
   * horizontal: 이미지 좌, 텍스트 우 (110×73 이미지)
   */
  layout?: CardDetailedCardLayout;
  /** focus일 때 제목에 하단 밑줄 표시 */
  state?: CardDetailedCardState;
  className?: string;
}

/* 아티스트명 텍스트 공통 스타일 */
const ARTIST_STYLE: CSSProperties = {
  fontFamily: "var(--font-family-pretendard)",
  fontStyle: "normal",
  fontWeight: "var(--font-weight-regular)",
  fontSize: "var(--font-size-12)",
  lineHeight: "var(--line-height-16)",
  color: "var(--text-light-grey)",
  whiteSpace: "nowrap",
};

/* 플랫폼 레이블 텍스트 공통 스타일 */
const PLATFORM_STYLE: CSSProperties = {
  fontFamily: "var(--font-family-pretendard)",
  fontStyle: "normal",
  fontWeight: "var(--font-weight-regular)",
  fontSize: "11px" /* ⚠️ 누락된 토큰: C1Caption(11px) */,
  lineHeight: "var(--line-height-18)",
  color: "var(--surface-secondary)",
  whiteSpace: "nowrap",
};

export function CardDetailedCard({
  src,
  title = "안녕",
  artist = "한로로",
  platformLabel = "멜론TV",
  layout = "vertical",
  state = "default",
  className,
}: CardDetailedCardProps) {
  const isFocus = state === "focus";

  if (layout === "vertical") {
    return (
      <div
        className={className}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px" /* ⚠️ 누락된 토큰: 6px */,
          alignItems: "flex-start",
          position: "relative",
        }}
      >
        <CardImage src={src ?? ""} alt={title} size="md" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px" /* ⚠️ 누락된 토큰: 2px */,
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <CardTitle state={isFocus ? "focus" : "default"}>{title}</CardTitle>
          <span style={ARTIST_STYLE}>{artist}</span>
          <span style={PLATFORM_STYLE}>{platformLabel}</span>
        </div>
      </div>
    );
  }

  /* horizontal layout */
  const horizontalImgStyle: CSSProperties = {
    position: "relative",
    width: "110px",
    height: "73px" /* ⚠️ 누락된 토큰: 73px */,
    overflow: "hidden",
    flexShrink: 0,
  };

  const horizontalImgInnerStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
  };

  const horizontalImgElStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "119.6%",
    objectFit: "cover",
    display: "block",
  };

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "var(--spacing-sm)",
        alignItems: "center",
        paddingLeft: "var(--spacing-md)",
        paddingRight: "var(--spacing-md)",
        width: "340px",
        position: "relative",
      }}
    >
      {/* 이미지 (110×73 커스텀 사이즈) */}
      <div style={horizontalImgStyle}>
        <div style={horizontalImgInnerStyle}>
          {src && <img src={src} alt={title} style={horizontalImgElStyle} />}
        </div>
      </div>

      {/* 레이블 영역 */}
      <div
        style={{
          display: "flex",
          flex: "1 0 0",
          gap: "var(--spacing-sm)",
          alignItems: "center",
          minWidth: 0,
        }}
      >
        {/* 텍스트 스택 */}
        <div
          style={{
            display: "flex",
            flex: "1 0 0",
            flexDirection: "column",
            gap: "2px" /* ⚠️ 누락된 토큰: 2px */,
            alignItems: "flex-start",
            minWidth: 0,
          }}
        >
          <CardTitle state={isFocus ? "focus" : "default"}>{title}</CardTitle>
          <span style={ARTIST_STYLE}>{artist}</span>
        </div>

        {/* 플랫폼 레이블 */}
        <span style={PLATFORM_STYLE}>{platformLabel}</span>
      </div>
    </div>
  );
}
