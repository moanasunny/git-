import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { NavigationBar } from "./NavigationBar";

const meta = {
  title: "UI/NavigationBar",
  component: NavigationBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Hsg5LWRnNXefayLlE57npT/ai_claude?node-id=2083-5751",
    },
  },
  argTypes: {
    keywordRankChange: {
      control: "select",
      options: ["up", "down", "same"],
    },
    keywordRank: { control: "number" },
    keywordRankDiff: { control: "number" },
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Default ───────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    gnbItems: [
      { label: "홈", isActive: true },
      { label: "뮤직" },
      { label: "차트" },
      { label: "라디오" },
      { label: "동영상" },
    ],
    utilItems: [
      { label: "로그인" },
      { label: "회원가입" },
      { label: "고객센터" },
    ],
    searchPlaceholder: "지금 듣고 싶은 음악을 검색해주세요",
  },
};

// ─── WithActiveTab ─────────────────────────────────────────────────

export const WithActiveTab: Story = {
  args: {
    gnbItems: [
      { label: "홈" },
      { label: "뮤직", isActive: true },
      { label: "차트" },
      { label: "라디오" },
      { label: "동영상" },
    ],
    utilItems: [
      { label: "로그인" },
      { label: "회원가입" },
      { label: "고객센터" },
    ],
    keyword: "Supernova - aespa",
    keywordRank: 1,
    keywordRankChange: "same",
    searchPlaceholder: "지금 듣고 싶은 음악을 검색해주세요",
  },
};

// ─── LongKeyword ───────────────────────────────────────────────────

export const LongKeyword: Story = {
  name: "LongKeyword (긴 키워드 말줄임)",
  args: {
    gnbItems: [
      { label: "홈", isActive: true },
      { label: "뮤직" },
      { label: "차트" },
      { label: "라디오" },
      { label: "동영상" },
    ],
    utilItems: [
      { label: "로그인" },
      { label: "회원가입" },
      { label: "고객센터" },
    ],
    keyword:
      "이 노래는 제목이 정말로 매우 길어서 말줄임 처리가 되어야 하는 케이스입니다",
    keywordRank: 3,
    keywordRankChange: "up",
    keywordRankDiff: 2,
    searchPlaceholder: "지금 듣고 싶은 음악을 검색해주세요",
  },
};

// ─── RankUp ────────────────────────────────────────────────────────

export const RankUp: Story = {
  name: "RankUp (순위 상승)",
  args: {
    gnbItems: [
      { label: "홈", isActive: true },
      { label: "뮤직" },
      { label: "차트" },
      { label: "라디오" },
      { label: "동영상" },
    ],
    utilItems: [
      { label: "로그인" },
      { label: "회원가입" },
      { label: "고객센터" },
    ],
    keyword: "손오공 - 지코",
    keywordRank: 2,
    keywordRankChange: "up",
    keywordRankDiff: 5,
    searchPlaceholder: "지금 듣고 싶은 음악을 검색해주세요",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 인기 검색어 영역 확인
    const keywordArea = canvas.getByLabelText("인기 검색어");
    expect(keywordArea).toBeInTheDocument();

    // GNB 탭 목록 확인
    const tablist = canvas.getByRole("tablist");
    expect(tablist).toBeInTheDocument();

    // 검색창에 텍스트 입력
    const searchInput = canvas.getByRole("textbox");
    await userEvent.type(searchInput, "지코");
    expect(searchInput).toHaveValue("지코");
  },
};

// ─── RankDown ──────────────────────────────────────────────────────

export const RankDown: Story = {
  name: "RankDown (순위 하락)",
  args: {
    gnbItems: [
      { label: "홈", isActive: true },
      { label: "뮤직" },
      { label: "차트" },
      { label: "라디오" },
      { label: "동영상" },
    ],
    utilItems: [
      { label: "로그인" },
      { label: "회원가입" },
      { label: "고객센터" },
    ],
    keyword: "아이유 - Blueming",
    keywordRank: 4,
    keywordRankChange: "down",
    keywordRankDiff: 1,
    searchPlaceholder: "지금 듣고 싶은 음악을 검색해주세요",
  },
};
