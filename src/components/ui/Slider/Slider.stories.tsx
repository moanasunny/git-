import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Slider } from "./Slider";

const meta = {
  title: "UI/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    design: {
      url: "https://www.figma.com/design/Hsg5LWRnNXefayLlE57npT/-%EC%8B%A4%EC%8A%B5-%EA%B3%B5%EC%9C%A0-%ED%8C%8C%EC%9D%BC--%EB%A9%9C%EB%A1%A0-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C--Copy-?node-id=2083-5752",
    },
    layout: "centered",
  },
  argTypes: {
    index: {
      control: { type: "number", min: 1, max: 4 },
      description: "활성화된 슬라이드 인덱스 (1~4)",
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    index: 1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const indicator = canvas.getByRole("tablist");
    await expect(indicator).toBeInTheDocument();
    await expect(indicator).toHaveAttribute(
      "aria-label",
      "슬라이드 인디케이터",
    );
  },
};

export const Index1: Story = {
  name: "Index 1 (첫 번째 활성)",
  args: { index: 1 },
};

export const Index2: Story = {
  name: "Index 2 (두 번째 활성)",
  args: { index: 2 },
};

export const Index3: Story = {
  name: "Index 3 (세 번째 활성)",
  args: { index: 3 },
};

export const Index4: Story = {
  name: "Index 4 (네 번째 활성)",
  args: { index: 4 },
};

export const AllVariants: Story = {
  name: "전체 변형 비교",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-lg)",
        alignItems: "flex-start",
      }}
    >
      {([1, 2, 3, 4] as const).map((i) => (
        <div key={i}>
          <p
            style={{
              marginBottom: "var(--spacing-xs)",
              fontSize: "12px",
              color: "var(--color-text-secondary)",
            }}
          >
            Index {i}
          </p>
          <Slider index={i} />
        </div>
      ))}
    </div>
  ),
};
