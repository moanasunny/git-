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
    <g transform="translate(1.25, 4.25)">
      <path
        d="M11.75 0.75V2.75M11.75 12.75V14.75M11.75 6.75V8.75M0.75 4.75C1.54565 4.75 2.30871 5.06607 2.87132 5.62868C3.43393 6.19129 3.75 6.95435 3.75 7.75C3.75 8.54565 3.43393 9.30871 2.87132 9.87132C2.30871 10.4339 1.54565 10.75 0.75 10.75V12.75C0.75 13.2804 0.960714 13.7891 1.33579 14.1642C1.71086 14.5393 2.21957 14.75 2.75 14.75H18.75C19.2804 14.75 19.7891 14.5393 20.1642 14.1642C20.5393 13.7891 20.75 13.2804 20.75 12.75V10.75C19.9544 10.75 19.1913 10.4339 18.6287 9.87132C18.0661 9.30871 17.75 8.54565 17.75 7.75C17.75 6.95435 18.0661 6.19129 18.6287 5.62868C19.1913 5.06607 19.9544 4.75 20.75 4.75V2.75C20.75 2.21957 20.5393 1.71086 20.1642 1.33579C19.7891 0.960714 19.2804 0.75 18.75 0.75H2.75C2.21957 0.75 1.71086 0.960714 1.33579 1.33579C0.960714 1.71086 0.75 2.21957 0.75 2.75V4.75Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
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
