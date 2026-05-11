import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { CardDetailedCard } from "./CardDetailedCard";

const PLACEHOLDER = "https://placehold.co/223x148/555555/cccccc?text=Thumb";

const meta = {
  title: "UI/CardDetailedCard",
  component: CardDetailedCard,
  tags: ["autodocs"],
  parameters: {
    design: {
      url: "https://www.figma.com/design/Hsg5LWRnNXefayLlE57npT/-%EC%8B%A4%EC%8A%B5-%EA%B3%B5%EC%9C%A0-%ED%8C%8C%EC%9D%BC--%EB%A9%9C%EB%A1%A0-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C--Copy-?node-id=50-12357",
    },
  },
  argTypes: {
    layout: {
      control: "radio",
      options: ["vertical", "horizontal"],
    },
    state: {
      control: "radio",
      options: ["default", "focus"],
    },
  },
} satisfies Meta<typeof CardDetailedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 세로 레이아웃 + 기본 상태 */
export const VerticalDefault: Story = {
  args: {
    src: PLACEHOLDER,
    title: "안녕",
    artist: "한로로",
    platformLabel: "멜론TV",
    layout: "vertical",
    state: "default",
  },
};

/** 세로 레이아웃 + 포커스 (제목 밑줄) */
export const VerticalFocus: Story = {
  args: {
    src: PLACEHOLDER,
    title: "안녕",
    artist: "한로로",
    platformLabel: "멜론TV",
    layout: "vertical",
    state: "focus",
  },
};

/** 가로 레이아웃 + 기본 상태 */
export const HorizontalDefault: Story = {
  args: {
    src: PLACEHOLDER,
    title: "안녕",
    artist: "한로로",
    platformLabel: "멜론TV",
    layout: "horizontal",
    state: "default",
  },
};

/** 가로 레이아웃 + 포커스 */
export const HorizontalFocus: Story = {
  args: {
    src: PLACEHOLDER,
    title: "안녕",
    artist: "한로로",
    platformLabel: "멜론TV",
    layout: "horizontal",
    state: "focus",
  },
};

/** 세로/가로 4가지 variant 비교 */
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-2xl)",
      }}
    >
      <div style={{ display: "flex", gap: "var(--spacing-xl)" }}>
        <CardDetailedCard
          src={PLACEHOLDER}
          title="안녕"
          artist="한로로"
          platformLabel="멜론TV"
          layout="vertical"
          state="default"
        />
        <CardDetailedCard
          src={PLACEHOLDER}
          title="안녕"
          artist="한로로"
          platformLabel="멜론TV"
          layout="vertical"
          state="focus"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-md)",
        }}
      >
        <CardDetailedCard
          src={PLACEHOLDER}
          title="안녕"
          artist="한로로"
          platformLabel="멜론TV"
          layout="horizontal"
          state="default"
        />
        <CardDetailedCard
          src={PLACEHOLDER}
          title="안녕"
          artist="한로로"
          platformLabel="멜론TV"
          layout="horizontal"
          state="focus"
        />
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const titles = canvas.getAllByText("안녕");
    await expect(titles.length).toBeGreaterThan(0);
    const platforms = canvas.getAllByText("멜론TV");
    await expect(platforms.length).toBeGreaterThan(0);
  },
};
