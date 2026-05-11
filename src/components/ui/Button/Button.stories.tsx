import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    design: {
      url: "https://www.figma.com/design/Hsg5LWRnNXefayLlE57npT/-%EC%8B%A4%EC%8A%B5-%EA%B3%B5%EC%9C%A0-%ED%8C%8C%EC%9D%BC--%EB%A9%9C%EB%A1%A0-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C--Copy-?node-id=2083-5746",
    },
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["filled", "outline"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "filled",
    children: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Button" });
    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();
    await userEvent.click(button);
  },
};

// --- Size variants ---

export const Large: Story = {
  args: { size: "lg", variant: "filled", children: "Button" },
};

export const Medium: Story = {
  args: { size: "md", variant: "filled", children: "Button" },
};

export const Small: Story = {
  args: { size: "sm", variant: "filled", children: "Button" },
};

// --- Style variants ---

export const FilledDefault: Story = {
  name: "Filled / Default",
  args: { size: "md", variant: "filled", children: "Button" },
};

export const FilledDisabled: Story = {
  name: "Filled / Disabled",
  args: { size: "md", variant: "filled", disabled: true, children: "Button" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Button" });
    await expect(button).toBeDisabled();
  },
};

export const OutlineDefault: Story = {
  name: "Outline / Default",
  args: { size: "md", variant: "outline", children: "Button" },
};

export const OutlineDisabled: Story = {
  name: "Outline / Disabled",
  args: { size: "md", variant: "outline", disabled: true, children: "Button" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Button" });
    await expect(button).toBeDisabled();
  },
};

// --- All variants grid ---

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-xl)",
        alignItems: "flex-start",
      }}
    >
      {/* Filled */}
      <div
        style={{
          display: "flex",
          gap: "var(--spacing-md)",
          alignItems: "center",
        }}
      >
        <Button size="lg" variant="filled">
          Button
        </Button>
        <Button size="md" variant="filled">
          Button
        </Button>
        <Button size="sm" variant="filled">
          Button
        </Button>
        <Button size="md" variant="filled" disabled>
          Button
        </Button>
      </div>
      {/* Outline */}
      <div
        style={{
          display: "flex",
          gap: "var(--spacing-md)",
          alignItems: "center",
        }}
      >
        <Button size="lg" variant="outline">
          Button
        </Button>
        <Button size="md" variant="outline">
          Button
        </Button>
        <Button size="sm" variant="outline">
          Button
        </Button>
        <Button size="md" variant="outline" disabled>
          Button
        </Button>
      </div>
    </div>
  ),
};
