import { type CSSProperties, type ReactNode, useState } from "react";
import { Icon } from "../Icon/Icon";

export type TabSize = "sm" | "md" | "lg";
export type TabState = "default" | "hover" | "focus" | "disabled";

export interface TabProps {
  /** 탭 크기. 기본값: lg */
  size?: TabSize;
  /** 강제 상태 (스토리북/테스트용). 미지정 시 isActive/disabled/hover로 계산 */
  state?: TabState;
  /** 탭 레이블 */
  label?: string;
  /** 왼쪽 아이콘 표시 여부 (sm 크기에서는 항상 미표시) */
  leftIcon?: boolean;
  /** 커스텀 아이콘 노드 */
  icon?: ReactNode;
  /** 활성(선택됨) 상태 - focus 스타일 */
  isActive?: boolean;
  /** 비활성화 */
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

function resolveTextColor(size: TabSize, state: TabState): string {
  if (size === "lg") {
    if (state === "hover" || state === "focus") return "var(--text-accent)";
    if (state === "disabled") return "var(--text-disabled)";
    return "var(--text-grey)";
  }
  if (size === "md") {
    if (state === "hover") return "var(--text-accent)";
    if (state === "focus")
      return "var(--color-primary-700)"; /* ⚠️ 누락된 토큰 */
    if (state === "disabled") return "var(--text-light-grey)";
    return "var(--text-secondary-dark-grey)";
  }
  // sm
  if (state === "hover" || state === "focus")
    return "var(--text-primary-black)";
  if (state === "disabled") return "var(--text-disabled)";
  return "var(--text-secondary-dark-grey)";
}

function resolveIconColor(state: TabState): string {
  if (state === "disabled") return "var(--icon-disabled)";
  if (state === "hover" || state === "focus") return "var(--icon-accent)";
  return "var(--icon-grey)";
}

function buildContainerStyle(size: TabSize, state: TabState): CSSProperties {
  const base: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    flexShrink: 0,
    cursor: state === "disabled" ? "not-allowed" : "pointer",
    boxSizing: "border-box",
  };

  if (size === "lg") {
    return {
      ...base,
      gap: "var(--spacing-xxs)",
      paddingLeft: "var(--spacing-xxs)",
      paddingRight: "var(--spacing-xxs)",
      paddingTop: "14px" /* ⚠️ 누락된 토큰: 14px */,
      paddingBottom: "14px",
      width: "85px" /* ⚠️ 누락된 토큰: 85px */,
      borderBottom:
        state === "focus"
          ? "1.5px solid var(--border-accent)"
          : "1.5px solid transparent",
    };
  }

  if (size === "md") {
    return {
      ...base,
      gap: "var(--spacing-xxs)",
      padding: "10px" /* ⚠️ 누락된 토큰: 10px */,
      height: "40px",
      width: "79px" /* ⚠️ 누락된 토큰: 79px */,
    };
  }

  // sm
  return {
    ...base,
    paddingLeft: "var(--spacing-xxs)",
    paddingRight: "var(--spacing-xxs)",
    height: "20px",
    borderBottom:
      state === "focus"
        ? "1px solid var(--border-grey)"
        : "1px solid transparent",
  };
}

export function Tab({
  size = "lg",
  state: stateProp,
  label = "Label",
  leftIcon = true,
  icon,
  isActive = false,
  disabled = false,
  onClick,
  className,
}: TabProps) {
  const [isHovered, setIsHovered] = useState(false);

  const state: TabState =
    stateProp ??
    (disabled
      ? "disabled"
      : isActive
        ? "focus"
        : isHovered
          ? "hover"
          : "default");

  const showIcon = leftIcon && size !== "sm";

  const containerStyle = buildContainerStyle(size, state);

  const textStyle: CSSProperties = {
    fontFamily: "var(--font-family-pretendard)",
    fontSize: size === "lg" ? "var(--font-size-17)" : "var(--font-size-13)",
    fontWeight: "var(--font-weight-bold)",
    lineHeight:
      size === "lg"
        ? "28px" /* ⚠️ 누락된 토큰: 28px */
        : "var(--line-height-16)",
    color: resolveTextColor(size, state),
    whiteSpace: "nowrap",
    letterSpacing: 0,
  };

  const iconColor = resolveIconColor(state);

  return (
    <div
      role="tab"
      aria-selected={state === "focus"}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => !stateProp && !disabled && setIsHovered(true)}
      onMouseLeave={() => !stateProp && setIsHovered(false)}
      className={className}
      style={containerStyle}
    >
      {showIcon && (icon ?? <Icon name="ticket" size="lg" color={iconColor} />)}
      <span style={textStyle}>{label}</span>
    </div>
  );
}
