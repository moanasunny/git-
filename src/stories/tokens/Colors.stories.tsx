import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Tokens/Colors",
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

interface SwatchProps {
  name: string;
  cssVar: string;
}

function Swatch({ name, cssVar }: SwatchProps) {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(cssVar)
    .trim();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        minWidth: "120px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "64px",
          borderRadius: "var(--radius-sm)",
          background: `var(${cssVar})`,
          border: "1px solid var(--border-divider)",
        }}
      />
      <div
        style={{ fontSize: "11px", fontFamily: "monospace", lineHeight: "1.4" }}
      >
        <div style={{ fontWeight: 600, color: "var(--text-primary-dark)" }}>
          {name}
        </div>
        <div style={{ color: "var(--text-grey)" }}>{cssVar}</div>
        <div style={{ color: "var(--text-light-grey)" }}>{value}</div>
      </div>
    </div>
  );
}

interface PaletteRowProps {
  title: string;
  swatches: SwatchProps[];
}

function PaletteRow({ title, swatches }: PaletteRowProps) {
  return (
    <section style={{ marginBottom: "40px" }}>
      <h3
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "var(--text-secondary-dark-grey)",
          marginBottom: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {title}
      </h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {swatches.map((s) => (
          <Swatch key={s.cssVar} {...s} />
        ))}
      </div>
    </section>
  );
}

interface SemanticRowProps {
  title: string;
  tokens: { label: string; cssVar: string; desc: string }[];
}

function SemanticGroup({ title, tokens }: SemanticRowProps) {
  return (
    <section style={{ marginBottom: "40px" }}>
      <h3
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "var(--text-secondary-dark-grey)",
          marginBottom: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {title}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {tokens.map(({ label, cssVar, desc }) => {
          const value = getComputedStyle(document.documentElement)
            .getPropertyValue(cssVar)
            .trim();
          return (
            <div
              key={cssVar}
              style={{
                display: "grid",
                gridTemplateColumns: "40px 200px 220px 1fr",
                alignItems: "center",
                gap: "12px",
                padding: "8px 12px",
                background: "var(--surface-white)",
                borderRadius: "var(--radius-xs)",
                border: "1px solid var(--border-divider)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-xs)",
                  background: `var(${cssVar})`,
                  border: "1px solid var(--border-divider)",
                  flexShrink: 0,
                }}
              />
              <code
                style={{ fontSize: "12px", color: "var(--text-primary-dark)" }}
              >
                {cssVar}
              </code>
              <span
                style={{
                  fontSize: "12px",
                  color: "var(--text-grey)",
                  fontFamily: "monospace",
                }}
              >
                {value}
              </span>
              <span
                style={{ fontSize: "12px", color: "var(--text-light-grey)" }}
              >
                {label} — {desc}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Primitive palette data ──────────────────────────────────────────────────

const PRIMARY = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => ({
  name: `Primary/${n}`,
  cssVar: `--color-primary-${n}`,
}));

const GREY = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => ({
  name: `Grey/${n}`,
  cssVar: `--color-grey-${n}`,
}));

const RED = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => ({
  name: `Red/${n}`,
  cssVar: `--color-red-${n}`,
}));

const GREEN = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => ({
  name: `Green/${n}`,
  cssVar: `--color-green-${n}`,
}));

const BLUE = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => ({
  name: `Blue/${n}`,
  cssVar: `--color-blue-${n}`,
}));

const YELLOW = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => ({
  name: `Yellow/${n}`,
  cssVar: `--color-yellow-${n}`,
}));

const WHITE = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10].map((n) => ({
  name: `White/${n}%`,
  cssVar: `--color-white-${n}`,
}));

const BLACK = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10].map((n) => ({
  name: `Black/${n}%`,
  cssVar: `--color-black-${n}`,
}));

// ─── Primitive story ─────────────────────────────────────────────────────────

function PrimitiveColors() {
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
        Primitive Colors
      </h2>
      <PaletteRow title="Primary (Melon Green)" swatches={PRIMARY} />
      <PaletteRow title="Grey" swatches={GREY} />
      <PaletteRow title="Red" swatches={RED} />
      <PaletteRow title="Green" swatches={GREEN} />
      <PaletteRow title="Blue" swatches={BLUE} />
      <PaletteRow title="Yellow" swatches={YELLOW} />
      <PaletteRow
        title="General"
        swatches={[{ name: "General/900", cssVar: "--color-general-900" }]}
      />
      <PaletteRow title="White (opacity)" swatches={WHITE} />
      <PaletteRow title="Black (opacity)" swatches={BLACK} />
    </div>
  );
}

export const Primitive: Story = {
  render: () => <PrimitiveColors />,
};

// ─── Semantic story ───────────────────────────────────────────────────────────

function SemanticColors() {
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
        Semantic Colors
      </h2>
      <SemanticGroup
        title="Surface"
        tokens={[
          {
            label: "Surface/white",
            cssVar: "--surface-white",
            desc: "기본 배경",
          },
          {
            label: "Surface/black",
            cssVar: "--surface-black",
            desc: "다크 배경",
          },
          {
            label: "Surface/grey",
            cssVar: "--surface-grey",
            desc: "보조 배경",
          },
          {
            label: "Surface/light grey",
            cssVar: "--surface-light-grey",
            desc: "약한 배경",
          },
          {
            label: "Surface/accent",
            cssVar: "--surface-accent",
            desc: "강조 (Melon Green)",
          },
          {
            label: "Surface/active",
            cssVar: "--surface-active",
            desc: "활성 상태",
          },
          {
            label: "Surface/pressed",
            cssVar: "--surface-pressed",
            desc: "눌림 상태",
          },
          {
            label: "Surface/secondary",
            cssVar: "--surface-secondary",
            desc: "2차 액션",
          },
        ]}
      />
      <SemanticGroup
        title="Text"
        tokens={[
          {
            label: "Text/primary-black",
            cssVar: "--text-primary-black",
            desc: "주요 텍스트 (흑)",
          },
          {
            label: "Text/primary-white",
            cssVar: "--text-primary-white",
            desc: "주요 텍스트 (백)",
          },
          {
            label: "Text/primary-dark",
            cssVar: "--text-primary-dark",
            desc: "주요 텍스트 (네이비)",
          },
          { label: "Text/grey", cssVar: "--text-grey", desc: "보조 텍스트" },
          {
            label: "Text/secondary-dark-grey",
            cssVar: "--text-secondary-dark-grey",
            desc: "2차 보조",
          },
          {
            label: "Text/light-grey",
            cssVar: "--text-light-grey",
            desc: "힌트 텍스트",
          },
          { label: "Text/disabled", cssVar: "--text-disabled", desc: "비활성" },
          { label: "Text/accent", cssVar: "--text-accent", desc: "강조" },
          {
            label: "Text/secondary",
            cssVar: "--text-secondary",
            desc: "2차 강조",
          },
          { label: "Text/success", cssVar: "--text-success", desc: "성공" },
          { label: "Text/info", cssVar: "--text-info", desc: "정보" },
          { label: "Text/warning", cssVar: "--text-warning", desc: "경고" },
          { label: "Text/error", cssVar: "--text-error", desc: "에러" },
        ]}
      />
      <SemanticGroup
        title="Icon"
        tokens={[
          {
            label: "Icon/white",
            cssVar: "--icon-white",
            desc: "밝은 배경 위 아이콘",
          },
          {
            label: "Icon/black",
            cssVar: "--icon-black",
            desc: "어두운 배경 위 아이콘",
          },
          {
            label: "Icon/accent",
            cssVar: "--icon-accent",
            desc: "강조 아이콘",
          },
          { label: "Icon/grey", cssVar: "--icon-grey", desc: "보조 아이콘" },
          {
            label: "Icon/light-grey",
            cssVar: "--icon-light-grey",
            desc: "약한 아이콘",
          },
          {
            label: "Icon/disabled",
            cssVar: "--icon-disabled",
            desc: "비활성 아이콘",
          },
          {
            label: "Icon/success",
            cssVar: "--icon-success",
            desc: "성공 아이콘",
          },
          { label: "Icon/info", cssVar: "--icon-info", desc: "정보 아이콘" },
          {
            label: "Icon/warning",
            cssVar: "--icon-warning",
            desc: "경고 아이콘",
          },
          { label: "Icon/error", cssVar: "--icon-error", desc: "에러 아이콘" },
        ]}
      />
      <SemanticGroup
        title="Border"
        tokens={[
          {
            label: "Border/default",
            cssVar: "--border-default",
            desc: "기본 보더",
          },
          {
            label: "Border/divider",
            cssVar: "--border-divider",
            desc: "구분선",
          },
          {
            label: "Border/accent",
            cssVar: "--border-accent",
            desc: "강조 보더",
          },
          {
            label: "Border/focused",
            cssVar: "--border-focused",
            desc: "포커스 링",
          },
          {
            label: "Border/secondary",
            cssVar: "--border-secondary",
            desc: "2차 보더",
          },
          { label: "Border/grey", cssVar: "--border-grey", desc: "회색 보더" },
          {
            label: "Border/disabled",
            cssVar: "--border-disabled",
            desc: "비활성 보더",
          },
        ]}
      />
    </div>
  );
}

export const Semantic: Story = {
  render: () => <SemanticColors />,
};
