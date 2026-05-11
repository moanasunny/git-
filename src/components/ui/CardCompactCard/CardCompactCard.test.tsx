import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CardCompactCard } from "./CardCompactCard";

const SRC = "https://example.com/thumb.jpg";

describe("CardCompactCard", () => {
  it("기본 렌더링된다", () => {
    render(<CardCompactCard artist="Various Artists" />);
    expect(screen.getByText("Various Artists")).toBeInTheDocument();
  });

  it("title prop이 표시된다", () => {
    render(<CardCompactCard title="앨범 제목" artist="가수" />);
    expect(screen.getByText("앨범 제목")).toBeInTheDocument();
    expect(screen.getByText("가수")).toBeInTheDocument();
  });

  it("이미지가 렌더링된다", () => {
    render(<CardCompactCard src={SRC} alt="앨범" artist="가수" />);
    expect(screen.getByRole("img")).toHaveAttribute("src", SRC);
  });

  it("default state에서 재생 버튼이 표시된다", () => {
    render(<CardCompactCard state="default" artist="가수" />);
    expect(screen.getByRole("button", { name: "재생" })).toBeInTheDocument();
  });

  it("hover state에서 재생 버튼이 없다", () => {
    render(<CardCompactCard state="hover" artist="가수" />);
    expect(
      screen.queryByRole("button", { name: "재생" }),
    ).not.toBeInTheDocument();
  });

  it("onClick이 호출된다", () => {
    const onClick = vi.fn();
    render(<CardCompactCard artist="가수" onClick={onClick} />);
    fireEvent.click(screen.getByText("가수").closest("div")!);
    expect(onClick).toHaveBeenCalled();
  });
});
