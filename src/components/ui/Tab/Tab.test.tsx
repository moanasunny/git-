import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Tab } from "./Tab";

describe("Tab", () => {
  it("레이블을 렌더링한다", () => {
    render(<Tab label="테스트" />);
    expect(screen.getByText("테스트")).toBeInTheDocument();
  });

  it("기본 role=tab 속성을 가진다", () => {
    render(<Tab label="탭" />);
    expect(screen.getByRole("tab")).toBeInTheDocument();
  });

  it("focus state일 때 aria-selected=true", () => {
    render(<Tab label="탭" state="focus" />);
    expect(screen.getByRole("tab")).toHaveAttribute("aria-selected", "true");
  });

  it("default state일 때 aria-selected=false", () => {
    render(<Tab label="탭" state="default" />);
    expect(screen.getByRole("tab")).toHaveAttribute("aria-selected", "false");
  });

  it("disabled state일 때 클릭 핸들러가 호출되지 않는다", () => {
    const onClick = vi.fn();
    render(<Tab label="탭" state="disabled" onClick={onClick} />);
    fireEvent.click(screen.getByRole("tab"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("활성화 상태에서 클릭 핸들러가 호출된다", () => {
    const onClick = vi.fn();
    render(<Tab label="탭" state="default" onClick={onClick} />);
    fireEvent.click(screen.getByRole("tab"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("isActive=true일 때 aria-selected=true", () => {
    render(<Tab label="탭" isActive />);
    expect(screen.getByRole("tab")).toHaveAttribute("aria-selected", "true");
  });

  it("sm 크기에서는 아이콘을 렌더링하지 않는다", () => {
    render(<Tab label="menu" size="sm" leftIcon />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("lg 크기에서 leftIcon=true이면 아이콘을 렌더링한다", () => {
    render(<Tab label="Label" size="lg" leftIcon state="default" />);
    // Icon은 aria-hidden이므로 svg로 확인
    const tab = screen.getByRole("tab");
    expect(tab.querySelector("svg")).toBeInTheDocument();
  });

  it("lg 크기에서 leftIcon=false이면 아이콘을 렌더링하지 않는다", () => {
    render(<Tab label="Label" size="lg" leftIcon={false} />);
    const tab = screen.getByRole("tab");
    expect(tab.querySelector("svg")).not.toBeInTheDocument();
  });

  it("disabled=true prop이 state prop보다 우선하지 않는다 (state 제공 시)", () => {
    // state prop이 직접 주어지면 그대로 사용
    render(<Tab label="탭" state="focus" disabled />);
    expect(screen.getByRole("tab")).toHaveAttribute("aria-selected", "true");
  });
});
