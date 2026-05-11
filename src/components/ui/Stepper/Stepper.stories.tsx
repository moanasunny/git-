import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";
import { Stepper, StepperTab } from "./Stepper";

const meta = {
  title: "UI/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  parameters: {
    design: {
      url: "https://www.figma.com/design/Hsg5LWRnNXefayLlE57npT/-%EC%8B%A4%EC%8A%B5-%EA%B3%B5%EC%9C%A0-%ED%8C%8C%EC%9D%BC--%EB%A9%9C%EB%A1%A0-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C--Copy-?node-id=2083-5753",
    },
    layout: "centered",
  },
  args: {
    arrow: "left",
    state: "default",
  },
  argTypes: {
    arrow: {
      control: "radio",
      options: ["left", "right"],
    },
    state: {
      control: "radio",
      options: ["default", "focus"],
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { arrow: "left", state: "default" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole("button", { name: "이전" });
    await expect(btn).toBeInTheDocument();
    await userEvent.click(btn);
  },
};

export const ArrowLeft: Story = {
  args: { arrow: "left", state: "default" },
};

export const ArrowRight: Story = {
  args: { arrow: "right", state: "default" },
};

export const FocusLeft: Story = {
  args: { arrow: "left", state: "focus" },
};

export const FocusRight: Story = {
  args: { arrow: "right", state: "focus" },
};

export const AllVariants: Story = {
  args: { arrow: "left" },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-lg)",
        alignItems: "flex-start",
      }}
    >
      {(["default", "focus"] as const).map((state) => (
        <div
          key={state}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-md)",
          }}
        >
          <span
            style={{
              fontSize: "var(--font-size-12)",
              color: "var(--text-grey)",
              width: "60px",
            }}
          >
            {state}
          </span>
          <Stepper arrow="left" state={state} />
          <Stepper arrow="right" state={state} />
        </div>
      ))}
    </div>
  ),
};

export const Tab: Story = {
  args: { arrow: "left" },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-lg)",
      }}
    >
      {(["default", "focus"] as const).map((state) => (
        <div
          key={state}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-md)",
          }}
        >
          <span
            style={{
              fontSize: "var(--font-size-12)",
              color: "var(--text-grey)",
              width: "60px",
            }}
          >
            {state}
          </span>
          <StepperTab state={state} />
        </div>
      ))}
    </div>
  ),
};
