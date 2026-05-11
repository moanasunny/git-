import type { ButtonHTMLAttributes, CSSProperties } from "react";
import "./Button.css";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "filled" | "outline";

export interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "style"
> {
  /** 버튼 크기. 기본값: md */
  size?: ButtonSize;
  /** 버튼 variant. 기본값: filled */
  variant?: ButtonVariant;
  /** 추가 className */
  className?: string;
}

const SIZE_STYLES: Record<ButtonSize, CSSProperties> = {
  lg: {
    height: "var(--button-height-lg)",
    paddingLeft: "var(--spacing-xl)",
    paddingRight: "var(--spacing-xl)",
    paddingTop: "var(--spacing-md)",
    paddingBottom: "var(--spacing-md)",
    fontSize: "var(--font-size-15)",
    fontWeight: "var(--font-weight-semibold)",
    lineHeight: "var(--spacing-lg)",
  },
  md: {
    height: "var(--button-height-md)",
    paddingLeft: "var(--spacing-md)",
    paddingRight: "var(--spacing-md)",
    paddingTop: "var(--spacing-sm)",
    paddingBottom: "var(--spacing-sm)",
    fontSize: "var(--font-size-15)",
    fontWeight: "var(--font-weight-semibold)",
    lineHeight: "var(--spacing-lg)",
  },
  sm: {
    height: "var(--button-height-sm)",
    paddingLeft: "var(--spacing-xs)",
    paddingRight: "var(--spacing-xs)",
    paddingTop: "var(--button-padding-y-sm)",
    paddingBottom: "var(--button-padding-y-sm)",
    fontSize:
      "var(--font-size-12)" /* ⚠️ 누락된 토큰: 11px C1Caption → --font-size-12 근사치 */,
    fontWeight: "var(--font-weight-regular)",
    lineHeight: "var(--line-height-18)",
  },
};

const VARIANT_STYLES: Record<ButtonVariant, CSSProperties> = {
  filled: {
    backgroundColor: "var(--surface-accent)",
    color: "var(--surface-white)",
    border: "none",
  },
  outline: {
    backgroundColor: "var(--surface-light-grey)",
    color: "var(--text-secondary-dark-grey)",
    border: "1.5px solid var(--border-default)",
  },
};

const DISABLED_STYLES: Record<ButtonVariant, CSSProperties> = {
  filled: {
    backgroundColor: "var(--surface-grey)",
    color: "var(--text-disabled)",
    border: "none",
    cursor: "not-allowed",
  },
  outline: {
    backgroundColor: "var(--surface-light-grey)",
    color: "var(--text-disabled)",
    border: "1.5px solid var(--border-disabled)",
    cursor: "not-allowed",
  },
};

export function Button({
  size = "md",
  variant = "filled",
  disabled = false,
  children = "Button",
  className,
  ...rest
}: ButtonProps) {
  const variantStyle = disabled
    ? DISABLED_STYLES[variant]
    : VARIANT_STYLES[variant];

  const style: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-family-pretendard)",
    letterSpacing: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    cursor: "pointer",
    transition: "background-color 0.15s ease, border-color 0.15s ease",
    outline: "none",
    ...SIZE_STYLES[size],
    ...variantStyle,
  };

  return (
    <button
      {...rest}
      disabled={disabled}
      data-variant={variant}
      data-size={size}
      className={["btn", className].filter(Boolean).join(" ")}
      style={style}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 var(--spacing-xs)",
        }}
      >
        {children}
      </span>
    </button>
  );
}
