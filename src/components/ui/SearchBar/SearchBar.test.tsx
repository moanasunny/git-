import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  it("placeholder가 기본값으로 렌더링된다", () => {
    render(<SearchBar />);
    expect(
      screen.getByPlaceholderText("지금 듣고 싶은 음악이 검색해주세요"),
    ).toBeInTheDocument();
  });

  it("검색 아이콘 버튼이 렌더링된다", () => {
    render(<SearchBar />);
    expect(screen.getByRole("button", { name: "검색" })).toBeInTheDocument();
  });

  it("Enter 키 입력 시 onSearch가 호출된다", async () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByRole("textbox");

    await userEvent.type(input, "아이유{Enter}");
    expect(onSearch).toHaveBeenCalledWith("아이유");
  });

  it("아이콘 클릭 시 onSearch가 호출된다", async () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} defaultValue="BTS" />);
    const btn = screen.getByRole("button", { name: "검색" });

    fireEvent.click(btn);
    expect(onSearch).toHaveBeenCalledWith("BTS");
  });

  it("className prop이 적용된다", () => {
    const { container } = render(<SearchBar className="custom" />);
    expect(container.firstChild).toHaveClass("search-bar", "custom");
  });
});
