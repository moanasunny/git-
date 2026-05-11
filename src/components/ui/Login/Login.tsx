import type { CSSProperties } from "react";
import { Button } from "../Button/Button";
import { Tab } from "../Tab/Tab";
import "./Login.css";

export interface LoginProps {
  /** 안내 텍스트. 기본값: "멜론을 더 안전하게 이용하세요." */
  description?: string;
  /** 로그인 버튼 텍스트. 기본값: "로그인" */
  loginLabel?: string;
  /** 회원가입 탭 레이블. 기본값: "회원가입" */
  signUpLabel?: string;
  /** 회원가입 탭 활성(포커스) 상태 */
  signUpActive?: boolean;
  /** 로그인 버튼 클릭 핸들러 */
  onLoginClick?: () => void;
  /** 회원가입 탭 클릭 핸들러 */
  onSignUpClick?: () => void;
  /** 추가 className */
  className?: string;
}

const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--spacing-xs)",
  alignItems: "center",
  justifyContent: "center",
  padding: "var(--spacing-xl) var(--spacing-md)",
  width: "280px",
  boxSizing: "border-box",
  backgroundColor: "var(--surface-light-grey)",
  border: "1px solid var(--border-default)",
  borderRadius: "var(--radius-xs)",
};

const topAreaStyle: CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  width: "100%",
  flexShrink: 0,
};

const descriptionStyle: CSSProperties = {
  fontFamily: "var(--font-family-pretendard)",
  fontSize:
    "var(--font-size-12)" /* ⚠️ 누락된 토큰: Figma C1Caption=11px, 근사치 12px 사용 */,
  fontWeight: "var(--font-weight-regular)",
  lineHeight: "var(--line-height-18)",
  color: "var(--text-light-grey)",
  letterSpacing: 0,
  whiteSpace: "nowrap",
};

export function Login({
  description = "멜론을 더 안전하게 이용하세요.",
  loginLabel = "로그인",
  signUpLabel = "회원가입",
  signUpActive = false,
  onLoginClick,
  onSignUpClick,
  className,
}: LoginProps) {
  return (
    <div
      style={containerStyle}
      className={className}
      data-testid="login-banner"
    >
      <div style={topAreaStyle}>
        <span style={descriptionStyle}>{description}</span>
        <Tab
          size="sm"
          label={signUpLabel}
          leftIcon={false}
          isActive={signUpActive}
          onClick={onSignUpClick}
        />
      </div>
      <Button
        size="lg"
        variant="filled"
        onClick={onLoginClick}
        className="login-btn-full"
      >
        {loginLabel}
      </Button>
    </div>
  );
}
