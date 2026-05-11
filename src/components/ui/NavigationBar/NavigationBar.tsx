import { type CSSProperties, useState } from "react";
import { Logo } from "../Logo/Logo";
import { Tab } from "../Tab/Tab";
import { Icon } from "../Icon/Icon";
import { SearchBar } from "../SearchBar/SearchBar";

// ─── Sub-interfaces ────────────────────────────────────────────────

export interface GnbItem {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface UtilItem {
  label: string;
  icon?: string;
  isActive?: boolean;
  onClick?: () => void;
}

// ─── Main Props ────────────────────────────────────────────────────

export interface NavigationBarProps {
  /** GNB 탭 메뉴 아이템 목록 */
  gnbItems?: GnbItem[];
  /** 유틸리티 메뉴 아이템 목록 (상단 오른쪽) */
  utilItems?: UtilItem[];
  /** 인기 검색어 키워드 텍스트 */
  keyword?: string;
  /** 인기 검색어 순위 */
  keywordRank?: number;
  /** 순위 변동 방향 */
  keywordRankChange?: "up" | "down" | "same";
  /** 순위 변동 숫자 */
  keywordRankDiff?: number;
  /** 검색창 placeholder */
  searchPlaceholder?: string;
  /** 검색 실행 콜백 */
  onSearch?: (query: string) => void;
}

// ─── Default data ──────────────────────────────────────────────────

const DEFAULT_GNB_ITEMS: GnbItem[] = [
  { label: "홈", isActive: true },
  { label: "뮤직" },
  { label: "차트" },
  { label: "라디오" },
  { label: "동영상" },
];

const DEFAULT_UTIL_ITEMS: UtilItem[] = [
  { label: "로그인" },
  { label: "회원가입" },
  { label: "고객센터" },
];

// ─── Styles ────────────────────────────────────────────────────────

const navbarStyle: CSSProperties = {
  width: "100%",
  backgroundColor: "var(--color-bg-primary)",
  borderBottom: "1px solid var(--color-border-default)",
  display: "flex",
  flexDirection: "column",
};

const utilBarStyle: CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "var(--spacing-sm)",
  padding: "var(--spacing-xs) var(--spacing-xl)",
  borderBottom: "1px solid var(--color-border-default)",
};

const utilItemStyle: CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  fontFamily: "var(--font-family-sans)",
  fontSize: "var(--font-size-sm)",
  fontWeight: "var(--font-weight-normal)" as unknown as number,
  color: "var(--color-text-secondary)",
  padding: "0",
  lineHeight: "1",
};

const middleBarStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "var(--spacing-xl)",
  padding: "var(--spacing-md) var(--spacing-xl)",
};

const gnbBarStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0",
  paddingLeft: "var(--spacing-xl)",
  paddingRight: "var(--spacing-xl)",
};

// ─── DisplayKeyword ────────────────────────────────────────────────

interface DisplayKeywordProps {
  keyword?: string;
  rank?: number;
  rankChange?: "up" | "down" | "same";
  rankDiff?: number;
}

function RankChangeIcon({
  rankChange,
}: {
  rankChange: "up" | "down" | "same";
}) {
  if (rankChange === "up") {
    return (
      <Icon
        name="arrow-up"
        size="sm"
        color="var(--color-status-success)"
        label="순위 상승"
      />
    );
  }
  if (rankChange === "down") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-status-error)"
        aria-label="순위 하락"
        role="img"
        style={{ flexShrink: 0, display: "inline-block" }}
      >
        <path
          d="M12 4v16M19 12l-7 7-7-7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <span
      style={{
        width: "16px",
        height: "16px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "var(--font-size-sm)",
        color: "var(--color-text-secondary)",
      }}
      aria-label="순위 변동 없음"
    >
      -
    </span>
  );
}

function DisplayKeyword({
  keyword = "오늘의 인기곡",
  rank = 1,
  rankChange = "same",
  rankDiff,
}: DisplayKeywordProps) {
  const containerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "var(--spacing-xs)",
    minWidth: "0",
  };

  const rankStyle: CSSProperties = {
    fontFamily: "var(--font-family-sans)",
    fontSize: "var(--font-size-sm)",
    fontWeight: "var(--font-weight-bold)" as unknown as number,
    color: "var(--color-brand-primary)",
    flexShrink: 0,
  };

  const keywordStyle: CSSProperties = {
    fontFamily: "var(--font-family-sans)",
    fontSize: "var(--font-size-sm)",
    fontWeight: "var(--font-weight-medium)" as unknown as number,
    color: "var(--color-text-primary)",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  };

  const diffStyle: CSSProperties = {
    fontFamily: "var(--font-family-sans)",
    fontSize: "var(--font-size-sm)",
    fontWeight: "var(--font-weight-normal)" as unknown as number,
    color:
      rankChange === "up"
        ? "var(--color-status-success)"
        : rankChange === "down"
          ? "var(--color-status-error)"
          : "var(--color-text-secondary)",
    flexShrink: 0,
  };

  return (
    <div style={containerStyle} aria-label="인기 검색어">
      <span style={rankStyle}>{rank}</span>
      <RankChangeIcon rankChange={rankChange} />
      {rankDiff !== undefined && rankDiff > 0 && (
        <span style={diffStyle}>{rankDiff}</span>
      )}
      <span style={keywordStyle}>{keyword}</span>
    </div>
  );
}

// ─── GnbMenu ───────────────────────────────────────────────────────

interface GnbMenuProps {
  items: GnbItem[];
}

function GnbMenu({ items }: GnbMenuProps) {
  return (
    <nav style={gnbBarStyle} role="tablist" aria-label="글로벌 내비게이션 메뉴">
      {items.map((item) => (
        <Tab
          key={item.label}
          size="lg"
          label={item.label}
          isActive={item.isActive}
          leftIcon={false}
          onClick={item.onClick}
        />
      ))}
    </nav>
  );
}

// ─── NavigationBar ─────────────────────────────────────────────────

export function NavigationBar({
  gnbItems = DEFAULT_GNB_ITEMS,
  utilItems = DEFAULT_UTIL_ITEMS,
  keyword,
  keywordRank,
  keywordRankChange,
  keywordRankDiff,
  searchPlaceholder,
  onSearch,
}: NavigationBarProps) {
  const [isUtilHoveredIdx, setIsUtilHoveredIdx] = useState<number | null>(null);

  return (
    <header style={navbarStyle} aria-label="사이트 내비게이션">
      {/* 유틸 메뉴 (상단) */}
      <div style={utilBarStyle}>
        {utilItems.map((item, idx) => (
          <button
            key={item.label}
            type="button"
            style={{
              ...utilItemStyle,
              color:
                isUtilHoveredIdx === idx || item.isActive
                  ? "var(--color-text-primary)"
                  : "var(--color-text-secondary)",
            }}
            onClick={item.onClick}
            onMouseEnter={() => setIsUtilHoveredIdx(idx)}
            onMouseLeave={() => setIsUtilHoveredIdx(null)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* 로고 + 검색창 + 인기검색어 (중단) */}
      <div style={middleBarStyle}>
        <Logo size="md" />
        <div style={{ flex: 1, maxWidth: "480px" }}>
          <SearchBar placeholder={searchPlaceholder} onSearch={onSearch} />
        </div>
        {keyword !== undefined && (
          <DisplayKeyword
            keyword={keyword}
            rank={keywordRank}
            rankChange={keywordRankChange}
            rankDiff={keywordRankDiff}
          />
        )}
      </div>

      {/* GNB 탭 메뉴 (하단) */}
      <GnbMenu items={gnbItems} />
    </header>
  );
}
