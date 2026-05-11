import type { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";
import { Banner } from "./Banner";

const PLACEHOLDER_VERTICAL =
  "https://placehold.co/236x315/374d0d/ffffff?text=Artist";
const PLACEHOLDER_HORIZONTAL =
  "https://placehold.co/280x188/cccccc/888888?text=Event";

const meta = {
  title: "UI/Banner",
  component: Banner,
  tags: ["autodocs"],
  parameters: {
    design: {
      url: "https://www.figma.com/design/Hsg5LWRnNXefayLlE57npT/-%EC%8B%A4%EC%8A%B5-%EA%B3%B5%EC%9C%A0-%ED%8C%8C%EC%9D%BC--%EB%A9%9C%EB%A1%A0-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C--Copy-?node-id=50-12922",
    },
  },
  argTypes: {
    orientation: {
      control: "radio",
      options: ["vertical", "horizontal"],
    },
    onClick: { action: "clicked" },
  },
  args: {
    src: PLACEHOLDER_VERTICAL,
    alt: "배너 이미지",
    orientation: "vertical",
    label: "Melon Event",
    title: "홍이삭",
    subtitle: "단독 콘서트 'Sway' 초대 이벤트",
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    src: PLACEHOLDER_VERTICAL,
    alt: "세로형 배너",
    orientation: "vertical",
    label: "Melon Event",
    title: "홍이삭",
    subtitle: "단독 콘서트 'Sway' 초대 이벤트",
  },
};

export const Horizontal: Story = {
  args: {
    src: PLACEHOLDER_HORIZONTAL,
    alt: "가로형 배너",
    orientation: "horizontal",
  },
};

export const VerticalNoSubtitle: Story = {
  name: "Vertical — 서브타이틀 없음",
  args: {
    src: PLACEHOLDER_VERTICAL,
    alt: "서브타이틀 없는 배너",
    orientation: "vertical",
    label: "Melon Event",
    title: "뮤지컬 베토벤",
  },
};

export const Comparison: Story = {
  name: "Comparison — vertical / horizontal 나란히",
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "var(--spacing-md)",
        alignItems: "flex-start",
      }}
    >
      <Banner
        src={PLACEHOLDER_VERTICAL}
        alt="세로형"
        orientation="vertical"
        label="Melon Event"
        title="홍이삭"
        subtitle="단독 콘서트 'Sway' 초대 이벤트"
      />
      <Banner
        src={PLACEHOLDER_HORIZONTAL}
        alt="가로형"
        orientation="horizontal"
      />
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    src: PLACEHOLDER_VERTICAL,
    alt: "클릭 가능한 배너",
    orientation: "vertical",
    label: "Melon Event",
    title: "홍이삭",
    subtitle: "단독 콘서트 'Sway' 초대 이벤트",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const banner = canvas.getByRole("button");
    await expect(banner).toBeInTheDocument();

    await userEvent.click(banner);

    const img = canvas.getByRole("img", { name: "클릭 가능한 배너" });
    await expect(img).toBeInTheDocument();

    const label = canvas.getByText("Melon Event");
    await expect(label).toBeInTheDocument();

    const title = canvas.getByText("홍이삭");
    await expect(title).toBeInTheDocument();

    const subtitle = canvas.getByText("단독 콘서트 'Sway' 초대 이벤트");
    await expect(subtitle).toBeInTheDocument();
  },
};
