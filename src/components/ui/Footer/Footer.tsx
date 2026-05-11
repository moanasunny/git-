import type { CSSProperties } from "react";

// ─── Types ─────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href?: string;
  bold?: boolean;
  onClick?: () => void;
}

export interface FooterCompanyInfoItem {
  text: string;
  /** 아이템 앞에 구분자(|)를 표시할지 여부 */
  withDivider?: boolean;
  /** 추가 액션 링크 텍스트 (예: "사업자정보확인") */
  actionLabel?: string;
  actionHref?: string;
  onActionClick?: () => void;
}

export interface FooterProps {
  /** 상단 서비스 링크 메뉴 목록 */
  serviceLinks?: FooterLink[];
  /** 중단 정책 링크 목록 */
  policyLinks?: FooterLink[];
  /** 하단 회사 정보 항목 목록 */
  companyInfo?: FooterCompanyInfoItem[];
  className?: string;
}

// ─── Default Data ──────────────────────────────────────────────────

const DEFAULT_SERVICE_LINKS: FooterLink[] = [
  { label: "멜론 스튜디오" },
  { label: "Windows 플레이어" },
  { label: "Mac 플레이어" },
  { label: "iPad" },
  { label: "고객센터" },
];

const DEFAULT_POLICY_LINKS: FooterLink[] = [
  { label: "이용약관", bold: true },
  { label: "위치기반서비스 이용약관", bold: true },
  { label: "개인정보처리방침", bold: true },
  { label: "청소년보호정책", bold: true },
  { label: "제휴/프로모션문의", bold: false },
  { label: "이메일주소무단수집거부", bold: true },
  { label: "파트너센터", bold: false },
];

const DEFAULT_COMPANY_INFO: FooterCompanyInfoItem[] = [
  {
    text: "문의전화 : 1566-7727 (평일 09:00-18:00, 유료)",
  },
  {
    text: "(주)카카오엔터테인먼트  경기도 성남시 분당구 판교역로 235, 에이치스퀘어 N동 8, 9, 10층",
    withDivider: false,
  },
  {
    text: "이메일 : melon_info@kakaoent.com",
    withDivider: true,
  },
  {
    text: "공동대표이사 : 고정희, 장윤중",
    withDivider: true,
  },
  {
    text: "호스팅서비스사업자 : (주)카카오엔터테인먼트",
    withDivider: true,
  },
  {
    text: "사업자등록번호 : 220-88-02594",
    withDivider: true,
  },
  {
    text: "© Kakao Entertainment Corp.",
    withDivider: true,
  },
  {
    text: "통신판매업신고번호 : 2018-성남분당B-0004",
    withDivider: true,
    actionLabel: "사업자정보확인",
  },
];

// ─── Styles ────────────────────────────────────────────────────────

const footerStyle: CSSProperties = {
  width: "100%",
  backgroundColor: "var(--surface-white)",
  display: "flex",
  flexDirection: "column",
  gap: "var(--spacing-lg)",
  padding: "var(--spacing-lg) var(--spacing-xl)",
  paddingBottom: "var(--spacing-3xl)",
  fontFamily: "var(--font-family-pretendard)",
};

const serviceLinksStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  flexWrap: "wrap",
  gap: "var(--spacing-sm)",
};

const serviceLinkStyle: CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "var(--spacing-xs) var(--spacing-xxs)",
  fontFamily: "var(--font-family-pretendard)",
  fontSize: "var(--font-size-15)",
  fontWeight: "var(--font-weight-semibold)" as unknown as number,
  lineHeight: "var(--spacing-lg)",
  /* ⚠️ 누락된 토큰: Figma Grey/500(#888)은 semantic --text-grey(Grey/600=#666)와 다름 */
  color: "var(--color-grey-500)",
  whiteSpace: "nowrap",
  textDecoration: "none",
};

const policyLinksStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "var(--spacing-xs)",
  paddingTop: "var(--spacing-xxs)",
};

const policyLinkBoldStyle: CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "0",
  fontFamily: "var(--font-family-pretendard)",
  fontSize: "var(--font-size-12)",
  fontWeight: "var(--font-weight-bold)" as unknown as number,
  lineHeight: "var(--spacing-md)",
  color: "var(--text-secondary-dark-grey)",
  whiteSpace: "nowrap",
  textDecoration: "none",
};

const policyLinkRegularStyle: CSSProperties = {
  ...policyLinkBoldStyle,
  fontWeight: "var(--font-weight-regular)" as unknown as number,
};

const companyInfoStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "0",
};

const companyInfoItemStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  fontFamily: "var(--font-family-pretendard)",
  fontSize: "var(--font-size-12)",
  fontWeight: "var(--font-weight-regular)" as unknown as number,
  lineHeight: "var(--line-height-18)",
  /* ⚠️ 누락된 토큰: Figma Grey/500(#888) → semantic --text-grey는 Grey/600 */
  color: "var(--color-grey-500)",
  whiteSpace: "nowrap",
};

const dividerStyle: CSSProperties = {
  display: "inline-block",
  width: "1px" /* ⚠️ 누락된 토큰: 구분자 선 1px — spacing/radius 토큰 없음 */,
  height: "10px" /* ⚠️ 누락된 토큰: 구분자 높이 10px — spacing 토큰 없음 */,
  backgroundColor: "var(--color-grey-500)",
  margin: "0 var(--spacing-xs)",
  flexShrink: 0,
};

const companyNameStyle: CSSProperties = {
  fontWeight: "var(--font-weight-bold)" as unknown as number,
};

const actionLinkStyle: CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "0",
  fontFamily: "var(--font-family-pretendard)",
  fontSize: "var(--font-size-12)",
  fontWeight: "var(--font-weight-regular)" as unknown as number,
  lineHeight: "var(--line-height-18)",
  color: "var(--color-grey-500)",
  textDecoration: "underline",
  marginLeft: "var(--spacing-xxs)",
};

// ─── Sub Components ─────────────────────────────────────────────────

interface ServiceLinksProps {
  links: FooterLink[];
}

function ServiceLinks({ links }: ServiceLinksProps) {
  return (
    <nav aria-label="서비스 링크" style={serviceLinksStyle}>
      {links.map((link) =>
        link.href ? (
          <a key={link.label} href={link.href} style={serviceLinkStyle}>
            {link.label}
          </a>
        ) : (
          <button
            key={link.label}
            type="button"
            style={serviceLinkStyle}
            onClick={link.onClick}
          >
            {link.label}
          </button>
        ),
      )}
    </nav>
  );
}

interface PolicyLinksProps {
  links: FooterLink[];
}

function PolicyLinks({ links }: PolicyLinksProps) {
  return (
    <nav aria-label="정책 링크" style={policyLinksStyle}>
      {links.map((link) => {
        const style = link.bold ? policyLinkBoldStyle : policyLinkRegularStyle;
        return link.href ? (
          <a key={link.label} href={link.href} style={style}>
            {link.label}
          </a>
        ) : (
          <button
            key={link.label}
            type="button"
            style={style}
            onClick={link.onClick}
          >
            {link.label}
          </button>
        );
      })}
    </nav>
  );
}

interface CompanyInfoProps {
  items: FooterCompanyInfoItem[];
}

function CompanyInfo({ items }: CompanyInfoProps) {
  return (
    <address
      aria-label="회사 정보"
      style={{ ...companyInfoStyle, fontStyle: "normal" }}
    >
      {items.map((item, idx) => (
        <span key={idx} style={companyInfoItemStyle}>
          {item.withDivider && <span style={dividerStyle} aria-hidden="true" />}
          {/* 회사명 강조 처리: "(주)카카오엔터테인먼트" 부분만 bold */}
          {item.text.startsWith("(주)카카오엔터테인먼트") &&
          !item.withDivider ? (
            <>
              <strong style={companyNameStyle}>(주)카카오엔터테인먼트</strong>
              <span>{item.text.slice("(주)카카오엔터테인먼트".length)}</span>
            </>
          ) : (
            <span>{item.text}</span>
          )}
          {item.actionLabel &&
            (item.actionHref ? (
              <a href={item.actionHref} style={actionLinkStyle}>
                {item.actionLabel}
              </a>
            ) : (
              <button
                type="button"
                style={actionLinkStyle}
                onClick={item.onActionClick}
              >
                {item.actionLabel}
              </button>
            ))}
        </span>
      ))}
    </address>
  );
}

// ─── Footer ────────────────────────────────────────────────────────

export function Footer({
  serviceLinks = DEFAULT_SERVICE_LINKS,
  policyLinks = DEFAULT_POLICY_LINKS,
  companyInfo = DEFAULT_COMPANY_INFO,
  className,
}: FooterProps) {
  return (
    <footer style={footerStyle} className={className} aria-label="사이트 푸터">
      <ServiceLinks links={serviceLinks} />
      <PolicyLinks links={policyLinks} />
      <CompanyInfo items={companyInfo} />
    </footer>
  );
}
