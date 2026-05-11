import type { CSSProperties } from "react";

export type CardImageSize = "sm" | "md";

export interface CardImageProps {
  /** 이미지 URL */
  src: string;
  /** 이미지 대체 텍스트 */
  alt?: string;
  /** 이미지 크기. sm=156×156(정사각형), md=223×148(직사각형) */
  size?: CardImageSize;
  className?: string;
}

const SIZE_STYLES: Record<CardImageSize, CSSProperties> = {
  sm: { width: "156px", height: "156px" },
  md: { width: "223px", height: "148px" },
};

export function CardImage({
  src,
  alt = "",
  size = "sm",
  className,
}: CardImageProps) {
  const containerStyle: CSSProperties = {
    position: "relative",
    overflow: "hidden",
    flexShrink: 0,
    ...SIZE_STYLES[size],
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

  return (
    <div className={className} style={containerStyle}>
      <img src={src} alt={alt} style={imgStyle} />
    </div>
  );
}
