import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { CardTitle } from "./CardTitle";

const meta = {
  title: "UI/CardTitle",
  component: CardTitle,
  tags: ["autodocs"],
  parameters: {
    design: {
      url: "https://www.figma.com/design/Hsg5LWRnNXefayLlE57npT/-%EC%8B%A4%EC%8A%B5-%EA%B3%B5%EC%9C%A0-%ED%8C%8C%EC%9D%BC--%EB%A9%9C%EB%A1%A0-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C--Copy-?node-id=2123-1441",
    },
  },
  argTypes: {
    state: {
      control: "radio",
      options: ["default", "focus"],
    },
  },
} satisfies Meta<typeof CardTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "카드 제목",
    state: "default",
  },
};

export const Focus: Story = {
  args: {
    children: "카드 제목",
    state: "focus",
  },
};

export const LongText: Story = {
  args: {
    children: "긴 제목이 들어오는 경우의 카드 제목",
    state: "default",
  },
};

export const FocusWithText: Story = {
  args: {
    children: "안녕",
    state: "focus",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText("안녕");
    await expect(title).toBeInTheDocument();
    await expect(title).toHaveStyle({ color: "var(--text-grey)" });
  },
};
