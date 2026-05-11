import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { CardImage } from "./CardImage";

const PLACEHOLDER_SM = "https://placehold.co/156x156/cccccc/888888?text=SM";
const PLACEHOLDER_MD = "https://placehold.co/223x148/cccccc/888888?text=MD";

const meta = {
  title: "UI/CardImage",
  component: CardImage,
  tags: ["autodocs"],
  parameters: {
    design: {
      url: "https://www.figma.com/design/Hsg5LWRnNXefayLlE57npT/-%EC%8B%A4%EC%8A%B5-%EA%B3%B5%EC%9C%A0-%ED%8C%8C%EC%9D%BC--%EB%A9%9C%EB%A1%A0-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C--Copy-?node-id=2135-1228",
    },
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md"],
    },
  },
} satisfies Meta<typeof CardImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    src: PLACEHOLDER_SM,
    alt: "앨범 커버 (sm)",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    src: PLACEHOLDER_MD,
    alt: "앨범 커버 (md)",
    size: "md",
  },
};

export const WithRealImage: Story = {
  args: {
    src: PLACEHOLDER_SM,
    alt: "앨범 이미지",
    size: "sm",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const img = canvas.getByRole("img", { name: "앨범 이미지" });
    await expect(img).toBeInTheDocument();
    await expect(img).toHaveAttribute("src", PLACEHOLDER_SM);
  },
};

export const Comparison: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "var(--spacing-md)",
        alignItems: "flex-start",
      }}
    >
      <CardImage src={PLACEHOLDER_SM} alt="sm 사이즈" size="sm" />
      <CardImage src={PLACEHOLDER_MD} alt="md 사이즈" size="md" />
    </div>
  ),
};
