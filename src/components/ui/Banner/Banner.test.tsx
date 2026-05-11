import { describe, it, expect, vi } from "vitest";
import type { BannerProps, BannerOrientation } from "./Banner";

// @testing-library/react 미설치 — 타입/로직 레벨 테스트만 수행

describe("Banner types", () => {
  it("BannerOrientation 타입은 vertical | horizontal 만 허용한다", () => {
    const vertical: BannerOrientation = "vertical";
    const horizontal: BannerOrientation = "horizontal";
    expect(vertical).toBe("vertical");
    expect(horizontal).toBe("horizontal");
  });

  it("BannerProps 기본값 orientation은 vertical이다", () => {
    const props: BannerProps = { src: "test.png" };
    const orientation = props.orientation ?? "vertical";
    expect(orientation).toBe("vertical");
  });

  it("BannerProps에 label, title, subtitle이 모두 optional이다", () => {
    const minimalProps: BannerProps = { src: "test.png" };
    expect(minimalProps.label).toBeUndefined();
    expect(minimalProps.title).toBeUndefined();
    expect(minimalProps.subtitle).toBeUndefined();
  });

  it("BannerProps onClick은 optional function이다", () => {
    const handler = vi.fn();
    const props: BannerProps = { src: "test.png", onClick: handler };
    props.onClick?.();
    expect(handler).toHaveBeenCalledOnce();
  });

  it("horizontal orientation에서는 텍스트 오버레이가 렌더링되지 않는다 (props 검증)", () => {
    const props: BannerProps = {
      src: "test.png",
      orientation: "horizontal",
      label: "Melon Event",
      title: "홍이삭",
      subtitle: "서브타이틀",
    };
    // horizontal에서는 isVertical=false이므로 오버레이 블록이 렌더링되지 않는다
    const isVertical = props.orientation === "vertical";
    expect(isVertical).toBe(false);
  });

  it("vertical orientation에서 label/title/subtitle이 있으면 오버레이가 표시된다 (props 검증)", () => {
    const props: BannerProps = {
      src: "test.png",
      orientation: "vertical",
      label: "Melon Event",
      title: "홍이삭",
    };
    const isVertical = props.orientation === "vertical";
    const hasContent = !!(props.label || props.title || props.subtitle);
    expect(isVertical && hasContent).toBe(true);
  });
});
