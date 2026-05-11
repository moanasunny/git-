import { useState, type CSSProperties } from "react";
import { Button } from "../Button/Button";

// ─── Types ───────────────────────────────────────────────────────────────────

export type ChartActiveTab = "top100" | "pop" | "artist";

export interface ChartItem {
  rank: number;
  title: string;
  artist: string;
  /** 앨범 아트 이미지 URL */
  thumbnail?: string;
  /** 순위 변동. 양수=상승, 음수=하락, 0=유지 */
  rankChange?: number;
  /** true이면 앨범 아트를 표시하는 확장 레이아웃 */
  featured?: boolean;
}

export interface ChartListProps {
  items?: ChartItem[];
  /** 초기 활성 탭 (비제어) */
  defaultActiveTab?: ChartActiveTab;
  onTabChange?: (tab: ChartActiveTab) => void;
  onShufflePlay?: () => void;
  onShowMore?: () => void;
  className?: string;
}

// ─── StarIcon ────────────────────────────────────────────────────────────────

function StarIcon({ color }: { color: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={color}
      aria-hidden
      style={{ flexShrink: 0 }}
    >
      <path d="M8 2 9.649 5.342l3.687.536-2.668 2.6.63 3.669L8 10.25l-3.298 1.897.63-3.669L2.664 5.878l3.687-.536L8 2z" />
    </svg>
  );
}

// ─── RankChangeIndicator ─────────────────────────────────────────────────────

function RankChangeIndicator({ change = 0 }: { change?: number }) {
  const containerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "var(--spacing-xxs)",
    overflow: "hidden",
    paddingBottom: "2px",
    flexShrink: 0,
  };
  const dashStyle: CSSProperties = {
    width: "5px",
    height: "2px",
    backgroundColor: "var(--text-grey)",
    flexShrink: 0,
  };
  const numStyle: CSSProperties = {
    fontFamily: "var(--font-family-pretendard)",
    fontSize: "var(--font-size-10)",
    fontWeight: "var(--font-weight-semibold)",
    color: "var(--text-grey)",
    lineHeight: "13px",
    width: "9px",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={dashStyle} aria-hidden />
      <span style={numStyle}>{Math.abs(change)}</span>
    </div>
  );
}

// ─── ChartTabItem ─────────────────────────────────────────────────────────────

interface ChartTabItemProps {
  label: string;
  isActive: boolean;
  leftIcon?: React.ReactNode;
  onClick: () => void;
}

function ChartTabItem({
  label,
  isActive,
  leftIcon,
  onClick,
}: ChartTabItemProps) {
  const style: CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "var(--spacing-xxs)",
    paddingTop: "6px",
    paddingBottom: "6px",
    flex: "1 0 0",
    cursor: "pointer",
    background: "transparent",
    border: "none",
    borderTop: isActive
      ? "2px solid var(--border-secondary)"
      : "1px solid var(--border-default)",
    boxSizing: "border-box",
  };
  const textStyle: CSSProperties = {
    fontFamily: "var(--font-family-pretendard)",
    fontSize: "var(--font-size-13)",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "var(--spacing-md)",
    color: isActive ? "var(--text-secondary)" : "var(--text-light-grey)",
    whiteSpace: "nowrap",
  };

  return (
    <button role="tab" aria-selected={isActive} style={style} onClick={onClick}>
      {leftIcon}
      <span style={textStyle}>{label}</span>
    </button>
  );
}

// ─── ChartElementTab ─────────────────────────────────────────────────────────

interface ChartElementTabProps {
  activeTab: ChartActiveTab;
  onTabChange: (tab: ChartActiveTab) => void;
}

function ChartElementTab({ activeTab, onTabChange }: ChartElementTabProps) {
  const containerStyle: CSSProperties = {
    display: "flex",
    alignItems: "stretch",
    width: "100%",
    flexShrink: 0,
  };

  return (
    <div style={containerStyle} role="tablist" aria-label="차트 탭">
      <ChartTabItem
        label="TOP 100"
        isActive={activeTab === "top100"}
        onClick={() => onTabChange("top100")}
      />
      <ChartTabItem
        label="POP"
        isActive={activeTab === "pop"}
        onClick={() => onTabChange("pop")}
      />
      <ChartTabItem
        label="아티스트"
        isActive={activeTab === "artist"}
        leftIcon={
          <StarIcon
            color={
              activeTab === "artist"
                ? "var(--icon-secondary)"
                : "var(--icon-light-grey)"
            }
          />
        }
        onClick={() => onTabChange("artist")}
      />
    </div>
  );
}

// ─── ChartRankRow ─────────────────────────────────────────────────────────────

interface ChartRankRowProps {
  item: ChartItem;
  rowStyle?: "white" | "grey";
}

function ChartRankRow({ item, rowStyle = "white" }: ChartRankRowProps) {
  const containerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "var(--spacing-xs)",
    padding: item.featured
      ? "var(--spacing-sm) var(--spacing-xs)"
      : "var(--spacing-xs)",
    backgroundColor:
      rowStyle === "grey" ? "var(--surface-grey)" : "var(--surface-white)",
    borderBottom: "1px solid var(--border-default)",
    width: "100%",
    boxSizing: "border-box",
  };

  const rankStyle: CSSProperties = {
    fontFamily: "var(--font-family-pretendard)",
    fontSize:
      "var(--font-size-17)" /* ⚠️ 누락된 토큰: Figma 16px → --font-size-17(17px) 근사치 */,
    fontWeight: "var(--font-weight-semibold)",
    color: "var(--text-secondary)",
    lineHeight: "28px",
    width: "33px",
    flexShrink: 0,
    fontStyle: "italic",
  };

  const titleStyle: CSSProperties = {
    fontFamily: "var(--font-family-pretendard)",
    fontSize: "var(--font-size-12)",
    fontWeight: "var(--font-weight-regular)",
    color: "var(--text-primary-black)",
    lineHeight: "var(--spacing-md)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    margin: 0,
  };

  const artistStyle: CSSProperties = {
    fontFamily: "var(--font-family-pretendard)",
    fontSize: "var(--font-size-12)",
    fontWeight: "var(--font-weight-regular)",
    color: "var(--text-light-grey)",
    lineHeight: "15px",
    whiteSpace: "nowrap",
    flexShrink: 0,
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      <span style={rankStyle}>{item.rank}</span>

      <RankChangeIndicator change={item.rankChange} />

      {item.featured && item.thumbnail && (
        <div
          style={{
            position: "relative",
            width: "48px",
            height: "48px",
            flexShrink: 0,
            overflow: "hidden",
            border: "1px solid var(--color-black-10)",
          }}
        >
          <img
            src={item.thumbnail}
            alt={`${item.title} 앨범 아트`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: item.featured ? "column" : "row",
          gap: item.featured ? "2px" : "var(--spacing-xxs)",
          flex: "1 0 0",
          minWidth: 0,
          paddingTop: "2px",
          overflow: "hidden",
          alignItems: item.featured ? "flex-start" : "center",
        }}
      >
        <p style={titleStyle}>{item.title}</p>
        <p style={artistStyle}>{item.artist}</p>
      </div>
    </div>
  );
}

// ─── ChartList ────────────────────────────────────────────────────────────────

const DEFAULT_ITEMS: ChartItem[] = Array.from({ length: 10 }, (_, i) => ({
  rank: i + 1,
  title: "기쁨, 슬픔, 아름다운 마음",
  artist: "AKMU (악뮤)",
  rankChange: 0,
  featured: i === 0,
}));

export function ChartList({
  items = DEFAULT_ITEMS,
  defaultActiveTab = "top100",
  onTabChange,
  onShufflePlay,
  onShowMore,
  className,
}: ChartListProps) {
  const [activeTab, setActiveTab] = useState<ChartActiveTab>(defaultActiveTab);

  function handleTabChange(tab: ChartActiveTab) {
    setActiveTab(tab);
    onTabChange?.(tab);
  }

  const containerStyle: CSSProperties = {
    backgroundColor: "var(--surface-white)",
    border: "1px solid var(--border-default)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    overflow: "hidden",
    width: "280px",
  };

  const listStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  };

  const bottomStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "var(--spacing-xs)",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <div style={containerStyle} className={className}>
      <ChartElementTab activeTab={activeTab} onTabChange={handleTabChange} />

      <div style={listStyle}>
        {items.map((item, idx) => (
          <ChartRankRow
            key={item.rank}
            item={item}
            rowStyle={idx % 2 === 0 ? "white" : "grey"}
          />
        ))}
      </div>

      <div style={bottomStyle}>
        <Button size="sm" variant="outline" onClick={onShufflePlay}>
          셔플듣기
        </Button>
        <Button size="sm" variant="outline" onClick={onShowMore}>
          더보기
        </Button>
      </div>
    </div>
  );
}
