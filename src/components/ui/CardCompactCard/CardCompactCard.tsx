import type { CSSProperties } from "react";
import { PlayOverlay } from "../PlayOverlay";

export type CardCompactCardState = "default" | "hover";

export interface CardCompactCardProps {
  /** 썸네일 이미지 URL */
  src?: string;
  /** 카드 제목 */
  title?: string;
  /** 아티스트명 */
  artist?: string;
  /**
   * default: 전체 딤 오버레이 + 하단 재생 버튼
   * hover: 하단 슬림 바만 표시
   */
  state?: CardCompactCardState;
  onClick?: () => void;
  className?: string;
}

const CARD_SIZE = "156px";

export function CardCompactCard({
  src,
  title,
  artist = "Various Artists",
  state = "hover",
  onClick,
  className,
}: CardCompactCardProps) {
  const isDefault = state === "default";

  const containerStyle: CSSProperties = {
    position: "relative",
    width: CARD_SIZE,
    height: CARD_SIZE,
    overflow: isDefault ? "hidden" : undefined,
    flexShrink: 0,
    cursor: onClick ? "pointer" : undefined,
  };

  const thumbnailStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    border: "1px solid var(--color-black-10)",
  };

  const imgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    pointerEvents: "none",
  };

  const dimStyle: CSSProperties = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: CARD_SIZE,
    backdropFilter: "blur(2px)",
    backgroundColor: "var(--color-black-80)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ...(isDefault
      ? { height: CARD_SIZE, justifyContent: "center" }
      : {
          height: "30px" /* ⚠️ 누락된 토큰: 30px */,
          paddingTop: "var(--spacing-xs)",
          justifyContent: "flex-start",
        }),
  };

  const labelStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "var(--font-family-pretendard)",
    fontStyle: "normal",
    fontWeight: "var(--font-weight-regular)",
    fontSize: "var(--font-size-12)",
    lineHeight: "var(--line-height-18)",
    color: "var(--text-primary-white)",
    textAlign: "center",
    whiteSpace: "nowrap",
  };

  const playButtonWrapStyle: CSSProperties = {
    position: "absolute",
    right: "var(--spacing-sm)",
    bottom: "var(--spacing-sm)",
  };

  return (
    <div className={className} style={containerStyle} onClick={onClick}>
      {/* 썸네일 이미지 */}
      <div style={thumbnailStyle}>
        {src && <img src={src} alt={title ?? artist ?? ""} style={imgStyle} />}
      </div>

      {/* 딤 오버레이 */}
      <div style={dimStyle}>
        <div style={labelStyle}>
          {title && <span>{title}</span>}
          <span>{artist}</span>
        </div>

        {/* 재생 버튼: default state에만 표시 */}
        {isDefault && (
          <div style={playButtonWrapStyle}>
            <PlayOverlay state="default" onClick={onClick} ariaLabel="재생" />
          </div>
        )}
      </div>
    </div>
  );
}
