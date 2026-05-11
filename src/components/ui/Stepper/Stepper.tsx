import React from "react";
import { Icon } from "../Icon";

export type StepperArrow = "left" | "right";
export type StepperState = "default" | "focus";

export interface StepperProps {
  /** 화살표 방향 */
  arrow?: StepperArrow;
  /** 버튼 상태 */
  state?: StepperState;
  /** 클릭 핸들러 */
  onClick?: () => void;
  /** 접근성 레이블 */
  "aria-label"?: string;
  /** 추가 className */
  className?: string;
  style?: React.CSSProperties;
}

export interface StepperTabProps {
  /** 전체 상태 */
  state?: StepperState;
  /** 왼쪽 버튼 클릭 */
  onLeftClick?: () => void;
  /** 오른쪽 버튼 클릭 */
  onRightClick?: () => void;
  /** 추가 className */
  className?: string;
}

export function Stepper({
  arrow = "left",
  state = "default",
  onClick,
  "aria-label": ariaLabel,
  className,
  style,
}: StepperProps) {
  const isFocus = state === "focus";
  const isLeft = arrow === "left";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel ?? (isLeft ? "이전" : "다음")}
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "18px",
        height: "16px",
        backgroundColor: "var(--surface-white)",
        border: `1px solid ${isFocus ? "var(--border-grey)" : "var(--border-default)"}`,
        borderRadius: isLeft
          ? "var(--radius-sm) 0 0 var(--radius-sm)"
          : "0 var(--radius-sm) var(--radius-sm) 0",
        overflow: "hidden",
        cursor: "pointer",
        padding: 0,
        flexShrink: 0,
        ...style,
      }}
    >
      <Icon
        name={isLeft ? "nav-arrow-left" : "nav-arrow-right"}
        size="sm"
        color={isFocus ? "var(--icon-black)" : "var(--icon-grey)"}
      />
    </button>
  );
}

export function StepperTab({
  state = "default",
  onLeftClick,
  onRightClick,
  className,
}: StepperTabProps) {
  return (
    <div
      className={className}
      style={{ display: "flex", alignItems: "center" }}
    >
      <Stepper
        arrow="left"
        state={state}
        onClick={onLeftClick}
        style={{ marginRight: "-1px", zIndex: 1 }}
      />
      <Stepper arrow="right" state={state} onClick={onRightClick} />
    </div>
  );
}
