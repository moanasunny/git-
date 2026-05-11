import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { Login } from "./Login";

const meta = {
  title: "UI/Login",
  component: Login,
  tags: ["autodocs"],
  parameters: {
    design: {
      url: "https://www.figma.com/design/Hsg5LWRnNXefayLlE57npT/-%EC%8B%A4%EC%8A%B5-%EA%B3%B5%EC%9C%A0-%ED%8C%8C%EC%9D%BC--%EB%A9%9C%EB%A1%A0-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C--Copy-?node-id=2083-5749",
    },
    layout: "centered",
  },
  argTypes: {
    description: { control: "text" },
    loginLabel: { control: "text" },
    signUpLabel: { control: "text" },
    signUpActive: { control: "boolean" },
    onLoginClick: { action: "login clicked" },
    onSignUpClick: { action: "sign-up clicked" },
  },
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: "멜론을 더 안전하게 이용하세요.",
    loginLabel: "로그인",
    signUpLabel: "회원가입",
    signUpActive: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginBtn = canvas.getByRole("button", { name: "로그인" });
    await expect(loginBtn).toBeInTheDocument();
    await expect(loginBtn).not.toBeDisabled();
    await userEvent.click(loginBtn);
  },
};

export const SignUpActive: Story = {
  args: {
    description: "멜론을 더 안전하게 이용하세요.",
    loginLabel: "로그인",
    signUpLabel: "회원가입",
    signUpActive: true,
  },
};

export const CustomLabels: Story = {
  args: {
    description: "지금 바로 시작하세요.",
    loginLabel: "시작하기",
    signUpLabel: "신규 가입",
    signUpActive: false,
  },
};

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-xl)",
        alignItems: "center",
      }}
    >
      <Login
        description="기본 상태"
        loginLabel="로그인"
        signUpLabel="회원가입"
        signUpActive={false}
      />
      <Login
        description="회원가입 탭 활성 상태"
        loginLabel="로그인"
        signUpLabel="회원가입"
        signUpActive={true}
      />
    </div>
  ),
};
