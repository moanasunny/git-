import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CardImage } from "./CardImage";

const SRC = "https://example.com/image.jpg";

describe("CardImage", () => {
  it("이미지가 렌더링된다", () => {
    render(<CardImage src={SRC} alt="테스트 이미지" />);
    const img = screen.getByRole("img", { name: "테스트 이미지" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", SRC);
  });

  it("alt가 비어있으면 빈 문자열로 처리된다", () => {
    render(<CardImage src={SRC} />);
    const img = screen.getByRole("img", { hidden: true });
    expect(img).toHaveAttribute("alt", "");
  });

  it("sm 사이즈가 156×156으로 적용된다", () => {
    render(<CardImage src={SRC} alt="이미지" size="sm" />);
    const container = screen.getByRole("img").parentElement;
    expect(container).toHaveStyle({ width: "156px", height: "156px" });
  });

  it("md 사이즈가 223×148으로 적용된다", () => {
    render(<CardImage src={SRC} alt="이미지" size="md" />);
    const container = screen.getByRole("img").parentElement;
    expect(container).toHaveStyle({ width: "223px", height: "148px" });
  });

  it("overflow hidden이 적용된다", () => {
    render(<CardImage src={SRC} alt="이미지" />);
    const container = screen.getByRole("img").parentElement;
    expect(container).toHaveStyle({ overflow: "hidden" });
  });
});
