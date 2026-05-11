import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("renders with default alt text", () => {
    render(<Logo />);
    expect(screen.getByRole("img", { name: "Melon" })).toBeInTheDocument();
  });

  it("renders with custom alt text", () => {
    render(<Logo alt="멜론 로고" />);
    expect(screen.getByRole("img", { name: "멜론 로고" })).toBeInTheDocument();
  });

  it("applies md size by default (130x36)", () => {
    render(<Logo />);
    const img = screen.getByRole("img");
    expect(img).toHaveStyle({ width: "130px", height: "36px" });
  });

  it("applies sm size (84x23)", () => {
    render(<Logo size="sm" />);
    const img = screen.getByRole("img");
    expect(img).toHaveStyle({ width: "84px", height: "23px" });
  });

  it("applies lg size (180x50)", () => {
    render(<Logo size="lg" />);
    const img = screen.getByRole("img");
    expect(img).toHaveStyle({ width: "180px", height: "50px" });
  });

  it("applies custom className", () => {
    render(<Logo className="my-logo" />);
    expect(screen.getByRole("img")).toHaveClass("my-logo");
  });

  it("renders with custom src", () => {
    render(<Logo src="/custom-logo.png" />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "/custom-logo.png");
  });
});
