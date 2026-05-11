import melonLogoSrc from "./assets/melon-logo.png";

export interface LogoProps {
  /** 로고 이미지 URL. 기본값: 멜론 로고 */
  src?: string;
  /** 대체 텍스트 */
  alt?: string;
  /** 미리 정의된 사이즈 */
  size?: "sm" | "md" | "lg";
  /** 추가 className */
  className?: string;
}

const SIZE_MAP: Record<
  NonNullable<LogoProps["size"]>,
  { width: string; height: string }
> = {
  sm: { width: "84px", height: "23px" },
  md: { width: "130px", height: "36px" },
  lg: { width: "180px", height: "50px" },
};

export function Logo({
  src = melonLogoSrc,
  alt = "Melon",
  size = "md",
  className,
}: LogoProps) {
  const { width, height } = SIZE_MAP[size];

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ width, height, display: "block", objectFit: "contain" }}
      className={className}
    />
  );
}
