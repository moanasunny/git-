import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Footer } from "./Footer";

const meta = {
  title: "UI/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Hsg5LWRnNXefayLlE57npT/-%EC%8B%A4%EC%8A%B5-%EA%B3%B5%EC%9C%A0-%ED%8C%8C%EC%9D%BC--%EB%A9%9C%EB%A1%A0-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C--Copy-?node-id=2083-5750",
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Default ───────────────────────────────────────────────────────

export const Default: Story = {
  name: "Default (기본)",
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 서비스 링크 영역 확인
    const serviceNav = canvas.getByRole("navigation", { name: "서비스 링크" });
    expect(serviceNav).toBeInTheDocument();

    // 정책 링크 영역 확인
    const policyNav = canvas.getByRole("navigation", { name: "정책 링크" });
    expect(policyNav).toBeInTheDocument();

    // 회사 정보 영역 확인
    const companyInfo = canvas.getByRole("contentinfo");
    expect(companyInfo).toBeInTheDocument();

    // 이용약관 링크 버튼 확인
    const termsBtn = canvas.getByRole("button", { name: "이용약관" });
    expect(termsBtn).toBeInTheDocument();
  },
};

// ─── CustomServiceLinks ─────────────────────────────────────────────

export const CustomServiceLinks: Story = {
  name: "CustomServiceLinks (커스텀 서비스 링크)",
  args: {
    serviceLinks: [
      { label: "멜론 앱 다운로드", href: "https://melon.com" },
      { label: "멜론 스튜디오", href: "https://melon.com/studio" },
      { label: "고객센터", href: "https://melon.com/help" },
    ],
    policyLinks: [
      { label: "이용약관", bold: true },
      { label: "개인정보처리방침", bold: true },
      { label: "고객센터", bold: false },
    ],
  },
};

// ─── MinimalInfo ───────────────────────────────────────────────────

export const MinimalInfo: Story = {
  name: "MinimalInfo (최소 회사 정보)",
  args: {
    serviceLinks: [{ label: "고객센터" }],
    policyLinks: [
      { label: "이용약관", bold: true },
      { label: "개인정보처리방침", bold: true },
    ],
    companyInfo: [
      { text: "문의전화 : 1566-7727 (평일 09:00-18:00, 유료)" },
      {
        text: "(주)카카오엔터테인먼트  경기도 성남시 분당구 판교역로 235",
        withDivider: false,
      },
      { text: "© Kakao Entertainment Corp.", withDivider: true },
    ],
  },
};

// ─── WithActionLink ────────────────────────────────────────────────

export const WithActionLink: Story = {
  name: "WithActionLink (액션 링크 포함)",
  args: {
    companyInfo: [
      { text: "문의전화 : 1566-7727 (평일 09:00-18:00, 유료)" },
      {
        text: "(주)카카오엔터테인먼트  경기도 성남시 분당구 판교역로 235",
        withDivider: false,
      },
      { text: "사업자등록번호 : 220-88-02594", withDivider: true },
      {
        text: "통신판매업신고번호 : 2018-성남분당B-0004",
        withDivider: true,
        actionLabel: "사업자정보확인",
        actionHref: "https://www.ftc.go.kr",
      },
    ],
  },
};
