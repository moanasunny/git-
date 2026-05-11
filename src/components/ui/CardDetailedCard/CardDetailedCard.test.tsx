import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CardDetailedCard } from "./CardDetailedCard";

const SRC = "https://example.com/thumb.jpg";

describe("CardDetailedCard", () => {
  it("기본 렌더링된다", () => {
    render(
      <CardDetailedCard title="안녕" artist="한로로" platformLabel="멜론TV" />,
    );
    expect(screen.getByText("안녕")).toBeInTheDocument();
    expect(screen.getByText("한로로")).toBeInTheDocument();
    expect(screen.getByText("멜론TV")).toBeInTheDocument();
  });

  it("vertical 레이아웃에서 이미지가 렌더링된다", () => {
    render(<CardDetailedCard src={SRC} title="안녕" layout="vertical" />);
    expect(screen.getByRole("img")).toHaveAttribute("src", SRC);
  });

  it("horizontal 레이아웃에서 이미지가 렌더링된다", () => {
    render(<CardDetailedCard src={SRC} title="안녕" layout="horizontal" />);
    expect(screen.getByRole("img")).toHaveAttribute("src", SRC);
  });

  it("focus state에서 CardTitle에 focus가 전달된다", () => {
    render(<CardDetailedCard title="안녕" state="focus" />);
    const title = screen.getByText("안녕");
    expect(title).toHaveStyle({ borderBottom: "1px solid var(--border-grey)" });
  });

  it("default state에서 CardTitle 밑줄이 없다", () => {
    render(<CardDetailedCard title="안녕" state="default" />);
    const title = screen.getByText("안녕");
    expect(title).not.toHaveStyle({
      borderBottom: "1px solid var(--border-grey)",
    });
  });

  it("platformLabel 색상이 secondary 토큰이다", () => {
    render(<CardDetailedCard platformLabel="멜론TV" />);
    expect(screen.getByText("멜론TV")).toHaveStyle({
      color: "var(--surface-secondary)",
    });
  });

  it("artist 색상이 light-grey 토큰이다", () => {
    render(<CardDetailedCard artist="한로로" />);
    expect(screen.getByText("한로로")).toHaveStyle({
      color: "var(--text-light-grey)",
    });
  });
});
