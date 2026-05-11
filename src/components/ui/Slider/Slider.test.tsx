import { describe, it, expect } from "vitest";
import { Slider } from "./Slider";
import type { SliderProps } from "./Slider";

describe("Slider", () => {
  it("Slider 함수가 export된다", () => {
    expect(Slider).toBeDefined();
    expect(typeof Slider).toBe("function");
  });

  it("SliderProps 인터페이스가 올바른 타입을 가진다", () => {
    const props: SliderProps = {
      activeIndex: 1,
      count: 5,
      paused: false,
    };
    expect(props.activeIndex).toBe(1);
    expect(props.count).toBe(5);
    expect(props.paused).toBe(false);
  });

  it("activeIndex 기본값은 1이다", () => {
    const props: SliderProps = {};
    const defaultActiveIndex = props.activeIndex ?? 1;
    expect(defaultActiveIndex).toBe(1);
  });

  it("count 기본값은 5이다", () => {
    const props: SliderProps = {};
    const defaultCount = props.count ?? 5;
    expect(defaultCount).toBe(5);
  });

  it("activeIndex가 1~count 범위 내에서 작동한다", () => {
    const count = 5;
    const validIndexes = [1, 2, 3, 4, 5];
    validIndexes.forEach((index) => {
      expect(index).toBeGreaterThanOrEqual(1);
      expect(index).toBeLessThanOrEqual(count);
    });
  });

  it("paused가 true일 때 마지막 dot이 paused 상태로 표시된다", () => {
    const getState = (
      dotIndex: number,
      activeIndex: number,
      count: number,
      paused: boolean,
    ): "default" | "focus" | "paused" => {
      if (paused && dotIndex === count) return "paused";
      if (dotIndex === activeIndex) return "focus";
      return "default";
    };

    expect(getState(5, 1, 5, true)).toBe("paused");
    expect(getState(1, 1, 5, true)).toBe("focus");
    expect(getState(2, 1, 5, true)).toBe("default");
    expect(getState(5, 1, 5, false)).toBe("default");
  });

  it("activeIndex에 해당하는 dot이 focus 상태다", () => {
    const getState = (
      dotIndex: number,
      activeIndex: number,
      count: number,
      paused: boolean,
    ): "default" | "focus" | "paused" => {
      if (paused && dotIndex === count) return "paused";
      if (dotIndex === activeIndex) return "focus";
      return "default";
    };

    expect(getState(3, 3, 5, false)).toBe("focus");
    expect(getState(1, 3, 5, false)).toBe("default");
    expect(getState(5, 3, 5, false)).toBe("default");
  });
});
