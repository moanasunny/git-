import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { PlayOverlay } from "./PlayOverlay";

const meta = {
  title: "UI/PlayOverlay",
  component: PlayOverlay,
  tags: ["autodocs"],
  parameters: {
    design: {
      url: "https://www.figma.com/design/Hsg5LWRnNXefayLlE57npT/-%EC%8B%A4%EC%8A%B5-%EA%B3%B5%EC%9C%A0-%ED%8C%8C%EC%9D%BC--%EB%A9%9C%EB%A1%A0-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C--Copy-?node-id=2123-2334",
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#1a1a1a" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
  argTypes: {
    state: {
      control: "radio",
      options: ["default", "hover"],
    },
  },
} satisfies Meta<typeof PlayOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: "default",
  },
};

export const Hover: Story = {
  args: {
    state: "hover",
  },
};

export const Interactive: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "재생" });

    await expect(button).toBeInTheDocument();
    await userEvent.hover(button);
    await userEvent.unhover(button);
    await userEvent.click(button);
  },
};
