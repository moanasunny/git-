import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { useState } from "react";
import { Tab } from "./Tab";

const meta = {
  title: "UI/Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: {
    design: {
      url: "https://www.figma.com/design/Hsg5LWRnNXefayLlE57npT/-%EC%8B%A4%EC%8A%B5-%EA%B3%B5%EC%9C%A0-%ED%8C%8C%EC%9D%BC--%EB%A9%9C%EB%A1%A0-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C--Copy-?node-id=2-11161",
    },
  },
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
    state: {
      control: "radio",
      options: ["default", "hover", "focus", "disabled"],
    },
    leftIcon: { control: "boolean" },
    label: { control: "text" },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── 기본 ───────────────────────────────────────────────
export const Default: Story = {
  args: { size: "lg", state: "default", label: "Label" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole("tab");
    await expect(tab).toBeInTheDocument();
    await expect(tab).toHaveAttribute("aria-selected", "false");
  },
};

// ─── Lg size ────────────────────────────────────────────
export const LgDefault: Story = {
  name: "Lg / Default",
  args: { size: "lg", state: "default", label: "Labled" },
};

export const LgHover: Story = {
  name: "Lg / Hover",
  args: { size: "lg", state: "hover", label: "Labled" },
};

export const LgFocus: Story = {
  name: "Lg / Focus (Active)",
  args: { size: "lg", state: "focus", label: "Labled" },
};

export const LgDisabled: Story = {
  name: "Lg / Disabled",
  args: { size: "lg", state: "disabled", label: "Labled" },
};

// ─── Md size ────────────────────────────────────────────
export const MdDefault: Story = {
  name: "Md / Default",
  args: { size: "md", state: "default", label: "Label" },
};

export const MdHover: Story = {
  name: "Md / Hover",
  args: { size: "md", state: "hover", label: "Label" },
};

export const MdFocus: Story = {
  name: "Md / Focus (Active)",
  args: { size: "md", state: "focus", label: "Label" },
};

export const MdDisabled: Story = {
  name: "Md / Disabled",
  args: { size: "md", state: "disabled", label: "Label" },
};

// ─── Sm size ────────────────────────────────────────────
export const SmDefault: Story = {
  name: "Sm / Default",
  args: { size: "sm", state: "default", label: "menu" },
};

export const SmHover: Story = {
  name: "Sm / Hover",
  args: { size: "sm", state: "hover", label: "menu" },
};

export const SmFocus: Story = {
  name: "Sm / Focus (Active)",
  args: { size: "sm", state: "focus", label: "menu" },
};

export const SmDisabled: Story = {
  name: "Sm / Disabled",
  args: { size: "sm", state: "disabled", label: "menu" },
};

// ─── 아이콘 없음 ─────────────────────────────────────────
export const NoIcon: Story = {
  name: "Lg / No Icon",
  args: { size: "lg", state: "default", label: "Label", leftIcon: false },
};

// ─── 인터랙티브 TabMenu (실제 사용 예) ─────────────────────
export const InteractiveTabMenu: Story = {
  name: "Interactive / TabMenu (md)",
  render: () => {
    const tabs = ["Label", "Label", "Label", "Label"];
    const [active, setActive] = useState(0);
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
        {tabs.map((label, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            <Tab
              size="md"
              label={label}
              isActive={active === i}
              onClick={() => setActive(i)}
            />
            {i < tabs.length - 1 && (
              <div
                style={{
                  width: "1px",
                  height: "8px",
                  backgroundColor: "var(--border-default)",
                  flexShrink: 0,
                }}
              />
            )}
          </div>
        ))}
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole("tab");
    await expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    await userEvent.click(tabs[1]);
    await expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    await expect(tabs[0]).toHaveAttribute("aria-selected", "false");
  },
};

// ─── 인터랙티브 TabListSm ────────────────────────────────
export const InteractiveTabListSm: Story = {
  name: "Interactive / TabList (sm)",
  render: () => {
    const menus = ["menu", "menu", "menu"];
    const [active, setActive] = useState(0);
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-xs)",
        }}
      >
        {menus.map((label, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--spacing-xs)",
            }}
          >
            <Tab
              size="sm"
              label={label}
              isActive={active === i}
              onClick={() => setActive(i)}
            />
            {i < menus.length - 1 && (
              <div
                style={{
                  width: "1px",
                  height: "8px",
                  backgroundColor: "var(--color-grey-300)",
                  flexShrink: 0,
                }}
              />
            )}
          </div>
        ))}
      </div>
    );
  },
};

// ─── 모든 variant 한눈에 ─────────────────────────────────
export const AllVariants: Story = {
  name: "All Variants",
  render: () => {
    const states = ["default", "hover", "focus", "disabled"] as const;
    const sizes = ["lg", "md", "sm"] as const;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-xl)",
        }}
      >
        {sizes.map((size) => (
          <div
            key={size}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-xs)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-family-pretendard)",
                fontSize: "var(--font-size-12)",
                color: "var(--text-grey)",
                margin: 0,
              }}
            >
              size: {size}
            </p>
            <div
              style={{
                display: "flex",
                gap: "var(--spacing-xl)",
                alignItems: "center",
              }}
            >
              {states.map((state) => (
                <Tab
                  key={state}
                  size={size}
                  state={state}
                  label={size === "sm" ? "menu" : "Label"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
