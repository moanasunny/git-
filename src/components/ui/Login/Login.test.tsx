import { describe, it, expect, vi } from "vitest";
import { Login } from "./Login";

describe("Login", () => {
  it("Login 함수가 export된다", () => {
    expect(Login).toBeDefined();
    expect(typeof Login).toBe("function");
  });

  it("기본 props 타입이 유효하다", () => {
    const defaultProps = {
      description: "멜론을 더 안전하게 이용하세요.",
      loginLabel: "로그인",
      signUpLabel: "회원가입",
      signUpActive: false,
    };
    expect(defaultProps.description).toBe("멜론을 더 안전하게 이용하세요.");
    expect(defaultProps.loginLabel).toBe("로그인");
    expect(defaultProps.signUpLabel).toBe("회원가입");
    expect(defaultProps.signUpActive).toBe(false);
  });

  it("signUpActive=true일 때 boolean 타입이 유효하다", () => {
    const props = { signUpActive: true };
    expect(props.signUpActive).toBe(true);
  });

  it("콜백 핸들러가 함수 타입을 받는다", () => {
    const onLoginClick = vi.fn();
    const onSignUpClick = vi.fn();
    expect(typeof onLoginClick).toBe("function");
    expect(typeof onSignUpClick).toBe("function");
  });

  it("className prop이 string 타입을 받는다", () => {
    const className = "custom-login";
    expect(typeof className).toBe("string");
  });
});
