import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ChartList } from "./ChartList";
import type { ChartItem } from "./ChartList";

const items: ChartItem[] = Array.from({ length: 5 }, (_, i) => ({
  rank: i + 1,
  title: `노래 ${i + 1}`,
  artist: `아티스트 ${i + 1}`,
  rankChange: 0,
  featured: i === 0,
}));

describe("ChartList", () => {
  it("차트 항목 목록을 렌더링한다", () => {
    render(<ChartList items={items} />);
    expect(screen.getByText("노래 1")).toBeInTheDocument();
    expect(screen.getByText("노래 5")).toBeInTheDocument();
  });

  it("3개의 탭을 렌더링한다", () => {
    render(<ChartList items={items} />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(3);
  });

  it("기본 탭 TOP 100이 활성 상태이다", () => {
    render(<ChartList items={items} />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    expect(tabs[1]).toHaveAttribute("aria-selected", "false");
    expect(tabs[2]).toHaveAttribute("aria-selected", "false");
  });

  it("defaultActiveTab=pop이면 POP 탭이 활성 상태이다", () => {
    render(<ChartList items={items} defaultActiveTab="pop" />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    expect(tabs[0]).toHaveAttribute("aria-selected", "false");
  });

  it("탭 클릭 시 활성 탭이 변경된다", () => {
    render(<ChartList items={items} />);
    const tabs = screen.getAllByRole("tab");
    fireEvent.click(tabs[1]);
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    expect(tabs[0]).toHaveAttribute("aria-selected", "false");
  });

  it("탭 변경 시 onTabChange 콜백이 호출된다", () => {
    const onTabChange = vi.fn();
    render(<ChartList items={items} onTabChange={onTabChange} />);
    const tabs = screen.getAllByRole("tab");
    fireEvent.click(tabs[2]);
    expect(onTabChange).toHaveBeenCalledWith("artist");
  });

  it("셔플듣기 버튼 클릭 시 onShufflePlay가 호출된다", () => {
    const onShufflePlay = vi.fn();
    render(<ChartList items={items} onShufflePlay={onShufflePlay} />);
    fireEvent.click(screen.getByText("셔플듣기"));
    expect(onShufflePlay).toHaveBeenCalledTimes(1);
  });

  it("더보기 버튼 클릭 시 onShowMore가 호출된다", () => {
    const onShowMore = vi.fn();
    render(<ChartList items={items} onShowMore={onShowMore} />);
    fireEvent.click(screen.getByText("더보기"));
    expect(onShowMore).toHaveBeenCalledTimes(1);
  });

  it("featured 항목의 썸네일을 렌더링한다", () => {
    const itemsWithThumb: ChartItem[] = [
      {
        rank: 1,
        title: "피처드 곡",
        artist: "아티스트",
        featured: true,
        thumbnail: "https://example.com/thumb.jpg",
      },
    ];
    render(<ChartList items={itemsWithThumb} />);
    const img = screen.getByAltText("피처드 곡 앨범 아트");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://example.com/thumb.jpg");
  });

  it("featured=false인 항목은 썸네일을 렌더링하지 않는다", () => {
    const itemsNoFeatured: ChartItem[] = [
      {
        rank: 1,
        title: "일반 곡",
        artist: "아티스트",
        featured: false,
        thumbnail: "https://example.com/thumb.jpg",
      },
    ];
    render(<ChartList items={itemsNoFeatured} />);
    expect(screen.queryByAltText("일반 곡 앨범 아트")).not.toBeInTheDocument();
  });
});
