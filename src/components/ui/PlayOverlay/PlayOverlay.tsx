import { type CSSProperties, useState } from "react";

export type PlayOverlayState = "default" | "hover";

export interface PlayOverlayProps {
  /** 재생 버튼 상태. 생략 시 내부 hover 상태로 자동 처리 */
  state?: PlayOverlayState;
  onClick?: () => void;
  /** 접근성 레이블 */
  ariaLabel?: string;
  className?: string;
}

const STATE_STYLES: Record<PlayOverlayState, CSSProperties> = {
  default: {
    borderColor: "var(--icon-white)",
    color: "var(--icon-white)",
  },
  hover: {
    borderColor: "var(--icon-secondary)",
    color: "var(--icon-secondary)",
  },
};

export function PlayOverlay({
  state,
  onClick,
  ariaLabel = "재생",
  className,
}: PlayOverlayProps) {
  const [internalHover, setInternalHover] = useState(false);

  const resolvedState: PlayOverlayState =
    state ?? (internalHover ? "hover" : "default");

  const style: CSSProperties = {
    position: "relative",
    width: "37px",
    height: "37px",
    borderRadius: "var(--radius-xl)",
    border: "1px solid",
    background: "transparent",
    cursor: "pointer",
    padding: 0,
    flexShrink: 0,
    overflow: "clip",
    transition: "border-color 0.15s ease, color 0.15s ease",
    ...STATE_STYLES[resolvedState],
  };

  return (
    <button
      type="button"
      className={className}
      style={style}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseEnter={() => setInternalHover(true)}
      onMouseLeave={() => setInternalHover(false)}
    >
      <span
        style={{
          position: "absolute",
          left: "12px",
          top: "9px",
          width: "15px",
          height: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="15"
          height="18"
          viewBox="0 0 15 18"
          fill="currentColor"
          aria-hidden="true"
        >
          <polygon points="0,0 15,9 0,18" />
        </svg>
      </span>
    </button>
  );
}
