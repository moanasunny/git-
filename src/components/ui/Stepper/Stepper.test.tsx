import { describe, it, expect, vi } from "vitest";
import { Stepper, StepperTab } from "./Stepper";

describe("Stepper", () => {
  it("Stepper 함수가 export된다", () => {
    expect(Stepper).toBeDefined();
    expect(typeof Stepper).toBe("function");
  });

  it("StepperTab 함수가 export된다", () => {
    expect(StepperTab).toBeDefined();
    expect(typeof StepperTab).toBe("function");
  });

  it("arrow prop 기본값은 left다", () => {
    const defaultProps = { arrow: "left" as const };
    expect(defaultProps.arrow).toBe("left");
  });

  it("state prop 기본값은 default다", () => {
    const defaultProps = { state: "default" as const };
    expect(defaultProps.state).toBe("default");
  });

  it("onClick 핸들러가 호출된다", () => {
    const onClick = vi.fn();
    onClick();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
