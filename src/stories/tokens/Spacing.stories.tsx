import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta = {
  title: "Tokens/Spacing",
  parameters: {
    layout: "padded",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cZV4zdCZCYVrWeHUBzJxm5/?node-id=8:21961",
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── helpers ────────────────────────────────────────────────────────────────

function getCssVar(name: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontSize: "13px",
        fontWeight: 600,
        color: "var(--text-secondary-dark-grey)",
        marginBottom: "16px",
        marginTop: "0",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
      }}
    >
      {children}
    </h3>
  );
}

// ─── Spacing ─────────────────────────────────────────────────────────────────

const SPACING_TOKENS = [
  {
    label: "spacing-xxs",
    cssVar: "--spacing-xxs",
    figma: "Spacing/spacing-xxs",
  },
  { label: "spacing-xs", cssVar: "--spacing-xs", figma: "Spacing/spacing-xs" },
  { label: "spacing-sm", cssVar: "--spacing-sm", figma: "Spacing/spacing-sm" },
  { label: "spacing-md", cssVar: "--spacing-md", figma: "Spacing/spacing-md" },
  { label: "spacing-lg", cssVar: "--spacing-lg", figma: "Spacing/spacing-lg" },
  { label: "spacing-xl", cssVar: "--spacing-xl", figma: "Spacing/spacing-xl" },
  {
    label: "spacing-2xl",
    cssVar: "--spacing-2xl",
    figma: "Spacing/spacing-2xl",
  },
  {
    label: "spacing-3xl",
    cssVar: "--spacing-3xl",
    figma: "Spacing/spacing-3xl",
  },
];

function SpacingVisualizer() {
  return (
    <div style={{ padding: "8px" }}>
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "var(--text-primary-dark)",
          marginBottom: "32px",
        }}
      >
        Spacing
      </h2>
      <SectionTitle>Scale</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {SPACING_TOKENS.map(({ label, cssVar, figma }) => {
          const value = getCssVar(cssVar);
          return (
            <div
              key={cssVar}
              data-testid={label}
              style={{ display: "flex", alignItems: "center", gap: "16px" }}
            >
              {/* bar */}
              <div
                style={{
                  height: "32px",
                  width: `var(${cssVar})`,
                  minWidth: "2px",
                  background: "var(--surface-accent)",
                  borderRadius: "var(--radius-xxs)",
                  flexShrink: 0,
                }}
              />
              {/* meta */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                <code
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--text-primary-dark)",
                    minWidth: "120px",
                  }}
                >
                  {cssVar}
                </code>
                <span
                  style={{
                    fontSize: "13px",
                    color: "var(--text-accent)",
                    fontFamily: "monospace",
                    minWidth: "48px",
                  }}
                >
                  {value}
                </span>
                <span
                  style={{ fontSize: "12px", color: "var(--text-light-grey)" }}
                >
                  {figma}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const SpacingScale: Story = {
  name: "Spacing Scale",
  render: () => <SpacingVisualizer />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId("spacing-xxs")).toBeInTheDocument();
    await expect(canvas.getByTestId("spacing-3xl")).toBeInTheDocument();
  },
};

// ─── Radius ──────────────────────────────────────────────────────────────────

const RADIUS_TOKENS = [
  {
    label: "radius-none",
    cssVar: "--radius-none",
    figma: "Radius/radius-none",
  },
  { label: "radius-xxs", cssVar: "--radius-xxs", figma: "Radius/radius-xxs" },
  { label: "radius-xs", cssVar: "--radius-xs", figma: "Radius/radius-xs" },
  { label: "radius-sm", cssVar: "--radius-sm", figma: "Radius/radius-sm" },
  { label: "radius-lg", cssVar: "--radius-lg", figma: "Radius/radius-lg" },
];

function RadiusVisualizer() {
  return (
    <div style={{ padding: "8px" }}>
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "var(--text-primary-dark)",
          marginBottom: "32px",
        }}
      >
        Border Radius
      </h2>
      <SectionTitle>Scale</SectionTitle>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
        {RADIUS_TOKENS.map(({ label, cssVar, figma }) => {
          const value = getCssVar(cssVar);
          return (
            <div
              key={cssVar}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "var(--surface-accent)",
                  borderRadius: `var(${cssVar})`,
                  opacity: 0.85,
                }}
              />
              <div
                style={{
                  textAlign: "center",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  lineHeight: "1.5",
                }}
              >
                <div
                  style={{ fontWeight: 600, color: "var(--text-primary-dark)" }}
                >
                  {label}
                </div>
                <div style={{ color: "var(--text-accent)" }}>{value}</div>
                <div style={{ color: "var(--text-light-grey)" }}>{figma}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const BorderRadius: Story = {
  name: "Border Radius",
  render: () => <RadiusVisualizer />,
};

// ─── Shadow ───────────────────────────────────────────────────────────────────

const SHADOW_TOKENS = [
  {
    label: "shadow-small",
    cssVar: "--shadow-small",
    figma: "Shadow/shadow-small",
    desc: "offset 0 2 · blur 4 · 5%",
  },
  {
    label: "shadow-medium",
    cssVar: "--shadow-medium",
    figma: "Shadow/shadow-medium",
    desc: "offset 0 4 · blur 12 · 8%",
  },
  {
    label: "shadow-large",
    cssVar: "--shadow-large",
    figma: "Shadow/shadow-large",
    desc: "offset 0 8 · blur 24 · 12%",
  },
];

function ShadowVisualizer() {
  return (
    <div
      style={{
        padding: "8px",
        background: "var(--surface-light-grey)",
        minHeight: "300px",
        borderRadius: "var(--radius-sm)",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "var(--text-primary-dark)",
          marginBottom: "32px",
        }}
      >
        Shadows
      </h2>
      <SectionTitle>Scale</SectionTitle>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
        {SHADOW_TOKENS.map(({ label, cssVar, figma, desc }) => {
          const value = getCssVar(cssVar);
          return (
            <div
              key={cssVar}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "80px",
                  background: "var(--surface-white)",
                  borderRadius: "var(--radius-sm)",
                  boxShadow: `var(${cssVar})`,
                }}
              />
              <div
                style={{
                  textAlign: "center",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  lineHeight: "1.5",
                  maxWidth: "140px",
                }}
              >
                <div
                  style={{ fontWeight: 600, color: "var(--text-primary-dark)" }}
                >
                  {label}
                </div>
                <div
                  style={{ color: "var(--text-grey)", wordBreak: "break-all" }}
                >
                  {value}
                </div>
                <div
                  style={{ color: "var(--text-light-grey)", marginTop: "2px" }}
                >
                  {figma}
                </div>
                <div style={{ color: "var(--text-light-grey)" }}>{desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const Shadows: Story = {
  render: () => <ShadowVisualizer />,
};
