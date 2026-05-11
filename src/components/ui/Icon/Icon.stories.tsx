import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Icon } from "./Icon";
import type { IconName } from "./Icon";

const ALL_ICONS: IconName[] = [
  "search",
  "star",
  "shuffle",
  "ticket",
  "nav-arrow-right",
  "nav-arrow-left",
  "arrow-up",
  "arrow-left",
  "arrow-right",
  "up",
];

const meta = {
  title: "UI/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    design: {
      url: "https://www.figma.com/design/cZV4zdCZCYVrWeHUBzJxm5/-%EC%8B%A4%EC%8A%B5-%EA%B3%B5%EC%9C%A0-%ED%8C%8C%EC%9D%BC--%EB%A9%9C%EB%A1%A0-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C--Copy-?node-id=2111-5743",
    },
    layout: "centered",
  },
  args: {
    name: "search",
    size: "lg",
    color: "var(--icon-black)",
  },
  argTypes: {
    name: {
      control: "select",
      options: ALL_ICONS,
    },
    size: {
      control: "radio",
      options: ["sm", "lg"],
    },
    color: {
      control: "text",
      description: "CSS 변수 또는 색상 값 (예: var(--icon-accent))",
    },
    label: {
      control: "text",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "search",
    size: "lg",
    color: "var(--icon-black)",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const svg = canvas.getByRole("img", { name: "검색" });
    await expect(svg).toBeInTheDocument();
  },
  render: (args) => <Icon {...args} label="검색" />,
};

export const Search: Story = {
  args: {
    name: "search",
    size: "lg",
    color: "var(--icon-black)",
  },
};

export const Star: Story = {
  args: {
    name: "star",
    size: "lg",
    color: "var(--icon-black)",
  },
};

export const Shuffle: Story = {
  args: {
    name: "shuffle",
    size: "lg",
    color: "var(--icon-black)",
  },
};

export const Ticket: Story = {
  args: {
    name: "ticket",
    size: "lg",
    color: "var(--icon-black)",
  },
};

export const NavArrowRight: Story = {
  args: {
    name: "nav-arrow-right",
    size: "lg",
    color: "var(--icon-black)",
  },
};

export const NavArrowLeft: Story = {
  args: {
    name: "nav-arrow-left",
    size: "lg",
    color: "var(--icon-black)",
  },
};

export const ArrowUp: Story = {
  args: {
    name: "arrow-up",
    size: "lg",
    color: "var(--icon-black)",
  },
};

export const ArrowUpSmall: Story = {
  args: {
    name: "arrow-up",
    size: "sm",
    color: "var(--icon-black)",
  },
};

export const ArrowLeft: Story = {
  args: {
    name: "arrow-left",
    size: "lg",
    color: "var(--icon-black)",
  },
};

export const ArrowRight: Story = {
  args: {
    name: "arrow-right",
    size: "lg",
    color: "var(--icon-black)",
  },
};

export const Up: Story = {
  args: {
    name: "up",
    size: "lg",
    color: "var(--icon-black)",
  },
};

export const SizeComparison: Story = {
  args: { name: "arrow-up" },
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--spacing-xl)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--spacing-xs)",
        }}
      >
        <Icon name="arrow-up" size="lg" color="var(--icon-black)" />
        <span
          style={{ fontSize: "var(--font-size-12)", color: "var(--text-grey)" }}
        >
          lg (24px)
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--spacing-xs)",
        }}
      >
        <Icon name="arrow-up" size="sm" color="var(--icon-black)" />
        <span
          style={{ fontSize: "var(--font-size-12)", color: "var(--text-grey)" }}
        >
          sm (16px)
        </span>
      </div>
    </div>
  ),
};

export const ColorVariants: Story = {
  args: { name: "star" },
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--spacing-xl)",
        flexWrap: "wrap",
      }}
    >
      {(
        [
          { color: "var(--icon-black)", label: "black" },
          { color: "var(--icon-grey)", label: "grey" },
          { color: "var(--icon-accent)", label: "accent" },
          { color: "var(--icon-secondary)", label: "secondary" },
          { color: "var(--icon-info)", label: "info" },
          { color: "var(--icon-error)", label: "error" },
          { color: "var(--icon-warning)", label: "warning" },
          { color: "var(--icon-disabled)", label: "disabled" },
        ] as const
      ).map(({ color, label }) => (
        <div
          key={label}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--spacing-xs)",
          }}
        >
          <Icon name="star" size="lg" color={color} />
          <span
            style={{
              fontSize: "var(--font-size-12)",
              color: "var(--text-grey)",
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const AllIcons: Story = {
  args: { name: "search" },
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "var(--spacing-xl)",
      }}
    >
      {ALL_ICONS.map((name) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--spacing-xs)",
          }}
        >
          <Icon name={name} size="lg" color="var(--icon-black)" />
          <span
            style={{
              fontSize: "var(--font-size-12)",
              color: "var(--text-grey)",
            }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};
