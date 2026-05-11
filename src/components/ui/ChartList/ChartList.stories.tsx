import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { ChartList } from "./ChartList";
import type { ChartItem } from "./ChartList";

// ─── 샘플 데이터 ──────────────────────────────────────────────────────────────

const SAMPLE_THUMBNAIL =
  "https://www.figma.com/api/mcp/asset/27d29f7c-a8d3-4573-a4c6-9a9c749307bf";

const sampleItems: ChartItem[] = [
  {
    rank: 1,
    title: "기쁨, 슬픔, 아름다운 마음",
    artist: "AKMU (악뮤)",
    rankChange: 0,
    featured: true,
    thumbnail: SAMPLE_THUMBNAIL,
  },
  {
    rank: 2,
    title: "기쁨, 슬픔, 아름다운 마음",
    artist: "AKMU (악뮤)",
    rankChange: 0,
  },
  {
    rank: 3,
    title: "기쁨, 슬픔, 아름다운 마음",
    artist: "AKMU (악뮤)",
    rankChange: 0,
  },
  {
    rank: 4,
    title: "기쁨, 슬픔, 아름다운 마음",
    artist: "AKMU (악뮤)",
    rankChange: 0,
  },
  {
    rank: 5,
    title: "기쁨, 슬픔, 아름다운 마음",
    artist: "AKMU (악뮤)",
    rankChange: 0,
  },
  {
    rank: 6,
    title: "기쁨, 슬픔, 아름다운 마음",
    artist: "AKMU (악뮤)",
    rankChange: 0,
  },
  {
    rank: 7,
    title: "기쁨, 슬픔, 아름다운 마음",
    artist: "AKMU (악뮤)",
    rankChange: 0,
  },
  {
    rank: 8,
    title: "기쁨, 슬픔, 아름다운 마음",
    artist: "AKMU (악뮤)",
    rankChange: 0,
  },
  {
    rank: 9,
    title: "기쁨, 슬픔, 아름다운 마음",
    artist: "AKMU (악뮤)",
    rankChange: 0,
  },
  {
    rank: 10,
    title: "기쁨, 슬픔, 아름다운 마음",
    artist: "AKMU (악뮤)",
    rankChange: 0,
  },
];

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: "UI/ChartList",
  component: ChartList,
  tags: ["autodocs"],
  parameters: {
    design: {
      url: "https://www.figma.com/design/Hsg5LWRnNXefayLlE57npT/-%EC%8B%A4%EC%8A%B5-%EA%B3%B5%EC%9C%A0-%ED%8C%8C%EC%9D%BC--%EB%A9%9C%EB%A1%A0-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C--Copy-?node-id=50-13516",
    },
  },
  argTypes: {
    defaultActiveTab: {
      control: "radio",
      options: ["top100", "pop", "artist"],
    },
  },
} satisfies Meta<typeof ChartList>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    items: sampleItems,
    defaultActiveTab: "top100",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 탭 렌더링 확인
    const tabs = canvas.getAllByRole("tab");
    await expect(tabs).toHaveLength(3);
    await expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    await expect(tabs[1]).toHaveAttribute("aria-selected", "false");

    // 1위 항목 렌더링 확인
    const rankOnes = canvas.getAllByText("1");
    await expect(rankOnes.length).toBeGreaterThan(0);
  },
};

export const TabTop100: Story = {
  name: "Tab / TOP 100",
  args: {
    items: sampleItems,
    defaultActiveTab: "top100",
  },
};

export const TabPop: Story = {
  name: "Tab / POP",
  args: {
    items: sampleItems,
    defaultActiveTab: "pop",
  },
};

export const TabArtist: Story = {
  name: "Tab / 아티스트",
  args: {
    items: sampleItems,
    defaultActiveTab: "artist",
  },
};

export const InteractiveTabSwitch: Story = {
  name: "Interactive / 탭 전환",
  args: { items: sampleItems },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole("tab");

    // 초기: TOP 100 활성
    await expect(tabs[0]).toHaveAttribute("aria-selected", "true");

    // POP 탭 클릭
    await userEvent.click(tabs[1]);
    await expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    await expect(tabs[0]).toHaveAttribute("aria-selected", "false");

    // 아티스트 탭 클릭
    await userEvent.click(tabs[2]);
    await expect(tabs[2]).toHaveAttribute("aria-selected", "true");
    await expect(tabs[1]).toHaveAttribute("aria-selected", "false");
  },
};

export const FeaturedItem: Story = {
  name: "Featured / 앨범 아트 표시",
  args: {
    items: [
      {
        rank: 1,
        title: "기쁨, 슬픔, 아름다운 마음",
        artist: "AKMU (악뮤)",
        rankChange: 0,
        featured: true,
        thumbnail: SAMPLE_THUMBNAIL,
      },
      ...sampleItems.slice(1),
    ],
  },
};

export const NoThumbnail: Story = {
  name: "Featured / 썸네일 없음",
  args: {
    items: sampleItems.map((item) => ({ ...item, thumbnail: undefined })),
  },
};
