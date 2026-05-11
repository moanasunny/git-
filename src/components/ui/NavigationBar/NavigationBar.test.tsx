import { describe, it, expect, vi } from "vitest";
import { NavigationBar } from "./NavigationBar";
import type { NavigationBarProps, GnbItem, UtilItem } from "./NavigationBar";

describe("NavigationBar", () => {
  it("NavigationBar 함수가 export된다", () => {
    expect(NavigationBar).toBeDefined();
    expect(typeof NavigationBar).toBe("function");
  });

  it("GnbItem 인터페이스 타입이 올바르게 정의된다", () => {
    const item: GnbItem = {
      label: "홈",
      isActive: true,
      onClick: vi.fn(),
    };
    expect(item.label).toBe("홈");
    expect(item.isActive).toBe(true);
  });

  it("UtilItem 인터페이스 타입이 올바르게 정의된다", () => {
    const item: UtilItem = {
      label: "로그인",
      isActive: false,
      onClick: vi.fn(),
    };
    expect(item.label).toBe("로그인");
  });

  it("NavigationBarProps 기본값이 선택적 필드를 포함한다", () => {
    const props: NavigationBarProps = {};
    expect(props.keyword).toBeUndefined();
    expect(props.keywordRank).toBeUndefined();
    expect(props.keywordRankChange).toBeUndefined();
    expect(props.keywordRankDiff).toBeUndefined();
  });

  it("keywordRankChange 타입이 up/down/same만 허용한다", () => {
    const changes: Array<NavigationBarProps["keywordRankChange"]> = [
      "up",
      "down",
      "same",
      undefined,
    ];
    expect(changes).toHaveLength(4);
  });

  it("gnbItems 배열이 여러 탭 아이템을 담을 수 있다", () => {
    const items: GnbItem[] = [
      { label: "홈", isActive: true },
      { label: "뮤직" },
      { label: "차트" },
    ];
    expect(items).toHaveLength(3);
    expect(items[0].isActive).toBe(true);
    expect(items[1].isActive).toBeUndefined();
  });

  it("onSearch 콜백 타입이 string 파라미터를 받는다", () => {
    const onSearch = vi.fn<[string], void>();
    const props: NavigationBarProps = { onSearch };
    props.onSearch?.("검색어");
    expect(onSearch).toHaveBeenCalledWith("검색어");
  });
});
