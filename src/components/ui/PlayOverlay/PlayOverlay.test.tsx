import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PlayOverlay } from "./PlayOverlay";

describe("PlayOverlay", () => {
  it("기본 상태로 렌더링된다", () => {
    render(<PlayOverlay />);
    const button = screen.getByRole("button", { name: "재생" });
    expect(button).toBeInTheDocument();
  });

  it("ariaLabel prop이 적용된다", () => {
    render(<PlayOverlay ariaLabel="음악 재생" />);
    expect(
      screen.getByRole("button", { name: "음악 재생" }),
    ).toBeInTheDocument();
  });

  it("onClick 핸들러가 호출된다", () => {
    const onClick = vi.fn();
    render(<PlayOverlay onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("state=hover일 때 secondary 색상이 적용된다", () => {
    render(<PlayOverlay state="hover" />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ borderColor: "var(--icon-secondary)" });
  });

  it("state=default일 때 white 색상이 적용된다", () => {
    render(<PlayOverlay state="default" />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ borderColor: "var(--icon-white)" });
  });
});
