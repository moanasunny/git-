import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Logo } from "./Logo";

const meta = {
  title: "UI/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    design: {
      url: "https://www.figma.com/design/cZV4zdCZCYVrWeHUBzJxm5/-%EC%8B%A4%EC%8A%B5-%EA%B3%B5%EC%9C%A0-%ED%8C%8C%EC%9D%BC--%EB%A9%9C%EB%A1%A0-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C--Copy-?node-id=2001-8153",
    },
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    src: { control: "text" },
    alt: { control: "text" },
    className: { control: "text" },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    alt: "Melon",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const logo = canvas.getByRole("img", { name: "Melon" });
    await expect(logo).toBeInTheDocument();
    await expect(logo).toHaveAttribute("alt", "Melon");
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    alt: "Melon",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    alt: "Melon",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    alt: "Melon",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-xl)",
        alignItems: "flex-start",
      }}
    >
      <Logo size="sm" />
      <Logo size="md" />
      <Logo size="lg" />
    </div>
  ),
};
