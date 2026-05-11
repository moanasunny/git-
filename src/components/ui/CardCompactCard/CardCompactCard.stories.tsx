import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { CardCompactCard } from "./CardCompactCard";

const PLACEHOLDER = "https://placehold.co/156x156/333333/cccccc?text=Album";

const meta = {
  title: "UI/CardCompactCard",
  component: CardCompactCard,
  tags: ["autodocs"],
  parameters: {
    design: {
      url: "https://www.figma.com/design/Hsg5LWRnNXefayLlE57npT/-%EC%8B%A4%EC%8A%B5-%EA%B3%B5%EC%9C%A0-%ED%8C%8C%EC%9D%BC--%EB%A9%9C%EB%A1%A0-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C--Copy-?node-id=50-12357",
    },
    backgrounds: {
      default: "light",
    },
  },
  argTypes: {
    state: {
      control: "radio",
      options: ["default", "hover"],
    },
  },
} satisfies Meta<typeof CardCompactCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 전체 딤 오버레이 + 우하단 재생 버튼 */
export const Default: Story = {
  args: {
    src: PLACEHOLDER,
    title: "Title",
    artist: "Various Artists",
    state: "default",
  },
};

/** 하단 슬림 바만 표시 */
export const Hover: Story = {
  args: {
    src: PLACEHOLDER,
    title: "Title",
    artist: "Various Artists",
    state: "hover",
  },
};

/** 제목 없이 아티스트만 표시 */
export const ArtistOnly: Story = {
  args: {
    src: PLACEHOLDER,
    artist: "Various Artists",
    state: "default",
  },
};

/** 이미지 없이 딤만 표시 */
export const NoImage: Story = {
  args: {
    title: "Title",
    artist: "Various Artists",
    state: "default",
  },
};

/** 나란히 비교 */
export const Comparison: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--spacing-md)" }}>
      <CardCompactCard
        src={PLACEHOLDER}
        title="Title"
        artist="Various Artists"
        state="hover"
      />
      <CardCompactCard
        src={PLACEHOLDER}
        title="Title"
        artist="Various Artists"
        state="default"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const playBtn = canvas.getByRole("button", { name: "재생" });
    await expect(playBtn).toBeInTheDocument();
    await userEvent.click(playBtn);
  },
};
