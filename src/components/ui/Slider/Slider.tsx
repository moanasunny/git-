import type { CSSProperties } from "react";

interface SlideAssetProps {
  state?: "default" | "focus" | "paused";
}

function SlideAsset({ state = "default" }: SlideAssetProps) {
  const isFocus = state === "focus";
  const isPaused = state === "paused";

  const dotStyle: CSSProperties = {
    width: "10px",
    height: "10px",
    borderRadius: "var(--radius-full)",
    border: `1.5px solid ${isFocus ? "var(--color-brand-primary)" : "var(--color-border-default)"}`,
    backgroundColor: isFocus ? "var(--color-brand-primary)" : "transparent",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  };

  return (
    <div style={dotStyle} aria-hidden="true">
      {isPaused && <PauseIcon />}
    </div>
  );
}

function PauseIcon() {
  return (
    <svg
      width="4"
      height="5"
      viewBox="0 0 4 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <rect
        width="1.5"
        height="5"
        rx="0.5"
        fill="var(--color-border-default)"
      />
      <rect
        x="2.5"
        width="1.5"
        height="5"
        rx="0.5"
        fill="var(--color-border-default)"
      />
    </svg>
  );
}

export interface SliderProps {
  /** 활성화된 슬라이드 인덱스 (1~4) */
  index?: 1 | 2 | 3 | 4;
  className?: string;
}

export function Slider({ index = 1, className }: SliderProps) {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "4px",
  };

  return (
    <div
      style={containerStyle}
      className={className}
      role="tablist"
      aria-label="슬라이드 인디케이터"
    >
      <SlideAsset state={index === 1 ? "focus" : "default"} />
      <SlideAsset state={index === 2 ? "focus" : "default"} />
      <SlideAsset state={index === 3 ? "focus" : "default"} />
      <SlideAsset state={index === 4 ? "focus" : "default"} />
      <SlideAsset state="paused" />
    </div>
  );
}
