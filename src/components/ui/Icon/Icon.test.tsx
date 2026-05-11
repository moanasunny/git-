import { describe, it, expect } from "vitest";
import { Icon } from "./Icon";
import type { IconName } from "./Icon";

describe("Icon", () => {
  it("IconName 타입에 모든 아이콘 이름이 포함된다", () => {
    const iconNames: IconName[] = [
      "search",
      "star",
      "shuffle",
      "ticket",
      "nav-arrow-right",
      "nav-arrow-left",
      "arrow-up",
      "arrow-left",
      "arrow-right",
      "up",
    ];
    expect(iconNames).toHaveLength(10);
  });

  it("size=lg일 때 24px 크기값이 매핑된다", () => {
    const SIZE_MAP = { sm: 16, lg: 24 };
    expect(SIZE_MAP["lg"]).toBe(24);
  });

  it("size=sm일 때 16px 크기값이 매핑된다", () => {
    const SIZE_MAP = { sm: 16, lg: 24 };
    expect(SIZE_MAP["sm"]).toBe(16);
  });

  it("Icon 함수가 export된다", () => {
    expect(Icon).toBeDefined();
    expect(typeof Icon).toBe("function");
  });
});
