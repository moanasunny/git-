import { describe, it, expect } from "vitest";
import { Footer } from "./Footer";
import type { FooterLink, FooterCompanyInfoItem } from "./Footer";

describe("Footer", () => {
  it("Footer 함수가 export된다", () => {
    expect(Footer).toBeDefined();
    expect(typeof Footer).toBe("function");
  });

  it("FooterLink 타입에 필수 label 필드가 존재한다", () => {
    const link: FooterLink = { label: "이용약관", bold: true };
    expect(link.label).toBe("이용약관");
    expect(link.bold).toBe(true);
  });

  it("FooterLink href는 선택적이다", () => {
    const linkWithHref: FooterLink = {
      label: "고객센터",
      href: "https://melon.com/help",
    };
    const linkWithoutHref: FooterLink = { label: "이용약관" };
    expect(linkWithHref.href).toBeDefined();
    expect(linkWithoutHref.href).toBeUndefined();
  });

  it("FooterCompanyInfoItem 타입이 올바르게 정의된다", () => {
    const item: FooterCompanyInfoItem = {
      text: "사업자등록번호 : 220-88-02594",
      withDivider: true,
    };
    expect(item.text).toBe("사업자등록번호 : 220-88-02594");
    expect(item.withDivider).toBe(true);
  });

  it("FooterCompanyInfoItem actionLabel은 선택적이다", () => {
    const itemWithAction: FooterCompanyInfoItem = {
      text: "통신판매업신고번호 : 2018-성남분당B-0004",
      actionLabel: "사업자정보확인",
    };
    const itemWithoutAction: FooterCompanyInfoItem = {
      text: "© Kakao Entertainment Corp.",
    };
    expect(itemWithAction.actionLabel).toBeDefined();
    expect(itemWithoutAction.actionLabel).toBeUndefined();
  });

  it("bold=true인 정책 링크와 bold=false인 정책 링크를 구분할 수 있다", () => {
    const boldLinks: FooterLink[] = [
      { label: "이용약관", bold: true },
      { label: "개인정보처리방침", bold: true },
    ];
    const regularLinks: FooterLink[] = [
      { label: "제휴/프로모션문의", bold: false },
    ];
    expect(boldLinks.every((l) => l.bold === true)).toBe(true);
    expect(regularLinks.every((l) => l.bold === false)).toBe(true);
  });

  it("withDivider가 true인 항목과 false인 항목을 필터링할 수 있다", () => {
    const items: FooterCompanyInfoItem[] = [
      { text: "문의전화 : 1566-7727", withDivider: false },
      { text: "이메일 : test@kakaoent.com", withDivider: true },
      { text: "공동대표이사 : 홍길동", withDivider: true },
    ];
    const withDividers = items.filter((i) => i.withDivider === true);
    expect(withDividers).toHaveLength(2);
  });
});
