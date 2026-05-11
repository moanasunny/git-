import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CardTitle } from "./CardTitle";

describe("CardTitle", () => {
  it("텍스트가 렌더링된다", () => {
    render(<CardTitle>카드 제목</CardTitle>);
    expect(screen.getByText("카드 제목")).toBeInTheDocument();
  });

  it("default 상태에서 밑줄이 없다", () => {
    render(<CardTitle state="default">제목</CardTitle>);
    const el = screen.getByText("제목");
    expect(el).not.toHaveStyle({
      borderBottom: "1px solid var(--border-grey)",
    });
  });

  it("focus 상태에서 하단 테두리가 적용된다", () => {
    render(<CardTitle state="focus">제목</CardTitle>);
    const el = screen.getByText("제목");
    expect(el).toHaveStyle({ borderBottom: "1px solid var(--border-grey)" });
  });

  it("Pretendard Bold 폰트가 적용된다", () => {
    render(<CardTitle>제목</CardTitle>);
    const el = screen.getByText("제목");
    expect(el).toHaveStyle({ fontFamily: "var(--font-family-pretendard)" });
    expect(el).toHaveStyle({ fontWeight: "var(--font-weight-bold)" });
  });

  it("text-grey 색상이 적용된다", () => {
    render(<CardTitle>제목</CardTitle>);
    expect(screen.getByText("제목")).toHaveStyle({ color: "var(--text-grey)" });
  });
});
