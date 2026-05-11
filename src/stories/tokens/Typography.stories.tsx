import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta = {
  title: "Tokens/Typography",
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

// ─── Type Specimen ────────────────────────────────────────────────────────────

interface TextSampleProps {
  label: string;
  familyVar: string;
  sizeVar: string;
  weightVar: string;
  lineHeightVar: string;
  figmaName: string;
  sampleText?: string;
}

function TextSample({
  label,
  familyVar,
  sizeVar,
  weightVar,
  lineHeightVar,
  figmaName,
  sampleText = "가나다라마바사 ABCDEFabcdef 0123456789",
}: TextSampleProps) {
  const family = getCssVar(familyVar);
  const size = getCssVar(sizeVar);
  const weight = getCssVar(weightVar);
  const lineHeight = getCssVar(lineHeightVar);

  return (
    <div
      data-testid={label}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 260px",
        gap: "24px",
        alignItems: "start",
        padding: "16px",
        borderBottom: "1px solid var(--border-divider)",
      }}
    >
      {/* sample text */}
      <div
        style={{
          fontFamily: `var(${familyVar})`,
          fontSize: `var(${sizeVar})`,
          fontWeight: `var(${weightVar})`,
          lineHeight: `var(${lineHeightVar})`,
          color: "var(--text-primary-dark)",
        }}
      >
        {sampleText}
      </div>

      {/* token meta */}
      <div
        style={{
          fontSize: "11px",
          fontFamily: "monospace",
          lineHeight: "1.8",
          color: "var(--text-grey)",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            color: "var(--text-primary-dark)",
            marginBottom: "4px",
          }}
        >
          {label}
        </div>
        <div style={{ color: "var(--text-light-grey)", marginBottom: "6px" }}>
          {figmaName}
        </div>
        <div>
          <span style={{ color: "var(--text-secondary-dark-grey)" }}>
            family
          </span>{" "}
          {family || familyVar}
        </div>
        <div>
          <span style={{ color: "var(--text-secondary-dark-grey)" }}>size</span>{" "}
          {size || sizeVar}
        </div>
        <div>
          <span style={{ color: "var(--text-secondary-dark-grey)" }}>
            weight
          </span>{" "}
          {weight || weightVar}
        </div>
        <div>
          <span style={{ color: "var(--text-secondary-dark-grey)" }}>lh</span>{" "}
          {lineHeight || lineHeightVar}
        </div>
      </div>
    </div>
  );
}

// ─── Semantic typography story ────────────────────────────────────────────────

function TypographyScale() {
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
        Typography
      </h2>

      <section style={{ marginBottom: "48px" }}>
        <SectionTitle>Heading — Inter</SectionTitle>
        <div
          style={{
            border: "1px solid var(--border-divider)",
            borderRadius: "var(--radius-sm)",
            overflow: "hidden",
          }}
        >
          <TextSample
            label="H1"
            familyVar="--text-h1-font-family"
            sizeVar="--text-h1-font-size"
            weightVar="--text-h1-font-weight"
            lineHeightVar="--text-h1-line-height"
            figmaName="Text Font/H1"
            sampleText="Heading 1 — 헤딩 일"
          />
          <TextSample
            label="H5"
            familyVar="--text-h5-font-family"
            sizeVar="--text-h5-font-size"
            weightVar="--text-h5-font-weight"
            lineHeightVar="--text-h5-line-height"
            figmaName="Text Font/H5"
            sampleText="Heading 5 — 헤딩 오"
          />
        </div>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <SectionTitle>Body — Inter</SectionTitle>
        <div
          style={{
            border: "1px solid var(--border-divider)",
            borderRadius: "var(--radius-sm)",
            overflow: "hidden",
          }}
        >
          <TextSample
            label="Body 1"
            familyVar="--text-body1-font-family"
            sizeVar="--text-body1-font-size"
            weightVar="--text-body1-font-weight"
            lineHeightVar="--text-body1-line-height"
            figmaName="Text Font/B1. Body"
          />
        </div>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <SectionTitle>Pretendard — Melon App</SectionTitle>
        <div
          style={{
            border: "1px solid var(--border-divider)",
            borderRadius: "var(--radius-sm)",
            overflow: "hidden",
          }}
        >
          <TextSample
            label="SemiBold"
            familyVar="--text-pretendard-semibold-font-family"
            sizeVar="--text-pretendard-semibold-font-size"
            weightVar="--text-pretendard-semibold-font-weight"
            lineHeightVar="--text-pretendard-semibold-line-height"
            figmaName="www.melon.com/Pretendard/SemiBold"
          />
          <TextSample
            label="Bold"
            familyVar="--text-pretendard-bold-font-family"
            sizeVar="--text-pretendard-bold-font-size"
            weightVar="--text-pretendard-bold-font-weight"
            lineHeightVar="--text-pretendard-bold-line-height"
            figmaName="www.melon.com/Pretendard/Bold"
          />
          <TextSample
            label="Regular"
            familyVar="--text-pretendard-regular-font-family"
            sizeVar="--text-pretendard-regular-font-size"
            weightVar="--text-pretendard-regular-font-weight"
            lineHeightVar="--text-pretendard-regular-line-height"
            figmaName="www.melon.com/Pretendard/Regular"
          />
        </div>
      </section>
    </div>
  );
}

export const TypeScale: Story = {
  name: "Type Scale",
  render: () => <TypographyScale />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId("H1")).toBeInTheDocument();
    await expect(canvas.getByTestId("Body 1")).toBeInTheDocument();
  },
};

// ─── Primitive tokens story ───────────────────────────────────────────────────

const FONT_SIZE_TOKENS = [
  { cssVar: "--font-size-10", figma: "font size/10" },
  { cssVar: "--font-size-12", figma: "font size/12" },
  { cssVar: "--font-size-13", figma: "font size/13" },
  { cssVar: "--font-size-15", figma: "font size/15" },
  { cssVar: "--font-size-17", figma: "font size/17" },
  { cssVar: "--font-size-24", figma: "Text Font/H5 size" },
  { cssVar: "--font-size-48", figma: "Text Font/H1 size" },
];

const FONT_WEIGHT_TOKENS = [
  {
    cssVar: "--font-weight-regular",
    label: "Regular",
    figma: "font weight/400",
  },
  {
    cssVar: "--font-weight-semibold",
    label: "SemiBold",
    figma: "font weight/600",
  },
  { cssVar: "--font-weight-bold", label: "Bold", figma: "font weight/700" },
];

function PrimitiveTypography() {
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
        Primitive Typography Tokens
      </h2>

      <section style={{ marginBottom: "48px" }}>
        <SectionTitle>Font Size</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {FONT_SIZE_TOKENS.map(({ cssVar, figma }) => {
            const value = getCssVar(cssVar);
            return (
              <div
                key={cssVar}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "16px",
                  padding: "8px 0",
                  borderBottom: "1px solid var(--border-divider)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-family-inter)",
                    fontSize: `var(${cssVar})`,
                    fontWeight: 400,
                    color: "var(--text-primary-dark)",
                    minWidth: "180px",
                  }}
                >
                  Melon Music
                </span>
                <code
                  style={{
                    fontSize: "12px",
                    color: "var(--text-grey)",
                    minWidth: "160px",
                  }}
                >
                  {cssVar}
                </code>
                <span
                  style={{
                    fontSize: "12px",
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
            );
          })}
        </div>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <SectionTitle>Font Weight</SectionTitle>
        <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
          {FONT_WEIGHT_TOKENS.map(({ cssVar, label, figma }) => {
            const value = getCssVar(cssVar);
            return (
              <div
                key={cssVar}
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-family-inter)",
                    fontSize: "24px",
                    fontWeight:
                      `var(${cssVar})` as React.CSSProperties["fontWeight"],
                    color: "var(--text-primary-dark)",
                  }}
                >
                  {label}
                </span>
                <code
                  style={{
                    fontSize: "11px",
                    color: "var(--text-grey)",
                    fontFamily: "monospace",
                  }}
                >
                  {cssVar}
                </code>
                <span style={{ fontSize: "11px", color: "var(--text-accent)" }}>
                  {value}
                </span>
                <span
                  style={{ fontSize: "11px", color: "var(--text-light-grey)" }}
                >
                  {figma}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <SectionTitle>Font Family</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            {
              cssVar: "--font-family-inter",
              label: "Inter (Web/Heading)",
              sample: "The quick brown fox",
            },
            {
              cssVar: "--font-family-pretendard",
              label: "Pretendard (Melon App)",
              sample: "가나다라마바사 ABCabc",
            },
          ].map(({ cssVar, label, sample }) => {
            const value = getCssVar(cssVar);
            return (
              <div
                key={cssVar}
                style={{
                  padding: "16px",
                  border: "1px solid var(--border-divider)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <div
                  style={{
                    fontFamily: `var(${cssVar})`,
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "var(--text-primary-dark)",
                    marginBottom: "8px",
                  }}
                >
                  {sample}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    fontFamily: "monospace",
                    color: "var(--text-grey)",
                  }}
                >
                  <code>{cssVar}</code> — {value || label}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export const Primitive: Story = {
  render: () => <PrimitiveTypography />,
};
