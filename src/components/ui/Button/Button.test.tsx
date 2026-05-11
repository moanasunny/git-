import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with default text", () => {
    render(<Button />);
    expect(screen.getByRole("button", { name: "Button" })).toBeInTheDocument();
  });

  it("renders with custom children", () => {
    render(<Button>확인</Button>);
    expect(screen.getByRole("button", { name: "확인" })).toBeInTheDocument();
  });

  it("is not disabled by default", () => {
    render(<Button />);
    expect(screen.getByRole("button")).not.toBeDisabled();
  });

  it("becomes disabled when disabled prop is true", () => {
    render(<Button disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies data-variant='filled' by default", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toHaveAttribute(
      "data-variant",
      "filled",
    );
  });

  it("applies data-variant='outline' for outline variant", () => {
    render(<Button variant="outline" />);
    expect(screen.getByRole("button")).toHaveAttribute(
      "data-variant",
      "outline",
    );
  });

  it("applies data-size='md' by default", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toHaveAttribute("data-size", "md");
  });

  it("applies correct data-size for each size", () => {
    const { rerender } = render(<Button size="sm" />);
    expect(screen.getByRole("button")).toHaveAttribute("data-size", "sm");

    rerender(<Button size="lg" />);
    expect(screen.getByRole("button")).toHaveAttribute("data-size", "lg");
  });

  it("calls onClick when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} />);
    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", async () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick} />);
    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(<Button className="my-btn" />);
    expect(screen.getByRole("button")).toHaveClass("my-btn");
  });

  it("uses filled surface-accent background by default", () => {
    render(<Button variant="filled" />);
    const btn = screen.getByRole("button");
    expect(btn.style.backgroundColor).toBe("var(--surface-accent)");
  });

  it("uses surface-grey background when filled and disabled", () => {
    render(<Button variant="filled" disabled />);
    const btn = screen.getByRole("button");
    expect(btn.style.backgroundColor).toBe("var(--surface-grey)");
  });
});
