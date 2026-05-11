export type IconName =
  | "search"
  | "star"
  | "shuffle"
  | "ticket"
  | "nav-arrow-right"
  | "nav-arrow-left"
  | "arrow-up"
  | "arrow-left"
  | "arrow-right"
  | "up";

export type IconSize = "sm" | "lg";

export interface IconProps {
  /** 아이콘 종류 */
  name: IconName;
  /** 아이콘 크기. 'sm' = 16px, 'lg' = 24px */
  size?: IconSize;
  /** 아이콘 색상. CSS 변수 또는 색상 값 */
  color?: string;
  /** 접근성 레이블. 생략 시 aria-hidden 처리 */
  label?: string;
  /** 추가 className */
  className?: string;
}

const ICON_PATHS: Record<IconName, React.ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" strokeWidth="1.5" />
      <path d="M16 16L21 21" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  star: (
    <path
      d="M12 2l2.9 6.26L22 9.27l-5 5.14 1.18 7.09L12 18l-6.18 3.5L7 14.41 2 9.27l7.1-1.01L12 2z"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  ),
  shuffle: (
    <>
      <path
        d="M2 18h4l10-12h6M2 6h4l2.5 3M16 18h6v-6M17.5 15l4.5 3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  ticket: (
    <>
      <path
        d="M2 9A4 4 0 0 0 6 5h12A4 4 0 0 0 22 9a3 3 0 0 0 0 6A4 4 0 0 0 18 19H6A4 4 0 0 0 2 15a3 3 0 0 1 0-6z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <line
        x1="12"
        y1="5"
        x2="12"
        y2="19"
        strokeWidth="1.5"
        strokeDasharray="3 2"
        strokeLinecap="round"
      />
    </>
  ),
  "nav-arrow-right": (
    <path
      d="M9 6l6 6-6 6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "nav-arrow-left": (
    <path
      d="M15 6l-6 6 6 6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "arrow-up": (
    <path
      d="M12 19V5M5 12l7-7 7 7"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "arrow-left": (
    <path
      d="M19 12H5M12 19l-7-7 7-7"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "arrow-right": (
    <path
      d="M5 12h14M12 5l7 7-7 7"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  up: (
    <path
      d="M12 20V4M4 12l8-8 8 8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

const SIZE_MAP: Record<IconSize, number> = {
  sm: 16,
  lg: 24,
};

import React from "react";

export function Icon({
  name,
  size = "lg",
  color = "currentColor",
  label,
  className,
}: IconProps) {
  const px = SIZE_MAP[size];
  const paths = ICON_PATHS[name];

  const svgProps = label
    ? { role: "img" as const, "aria-label": label }
    : { "aria-hidden": true as const };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      className={className}
      style={{ flexShrink: 0, display: "inline-block" }}
      {...svgProps}
    >
      {paths}
    </svg>
  );
}
