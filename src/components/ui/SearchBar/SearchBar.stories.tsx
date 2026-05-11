import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { SearchBar } from "./SearchBar";

const meta = {
  title: "UI/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    design: {
      url: "https://www.figma.com/design/Hsg5LWRnNXefayLlE57npT/-%EC%8B%A4%EC%8A%B5-%EA%B3%B5%EC%9C%A0-%ED%8C%8C%EC%9D%BC--%EB%A9%9C%EB%A1%A0-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C--Copy-?node-id=2083-5747",
    },
  },
  args: {
    placeholder: "지금 듣고 싶은 음악이 검색해주세요",
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default (빈 상태)",
};

export const Complete: Story = {
  name: "Complete (입력된 상태)",
  args: {
    defaultValue: "아이유 좋은날",
  },
};

export const WithSearchCallback: Story = {
  name: "검색 콜백",
  args: {
    onSearch: (value) => alert(`검색: ${value}`),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    await userEvent.type(input, "아이유");
    await expect(input).toHaveValue("아이유");

    const btn = canvas.getByRole("button", { name: "검색" });
    await expect(btn).toBeInTheDocument();
  },
};
