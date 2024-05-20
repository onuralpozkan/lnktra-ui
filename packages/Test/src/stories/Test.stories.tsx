import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import Test from "../Test";

const meta: Meta<typeof Test> = {
    title: "Components/Test",
    component: Test,
    argTypes: {
        role: {
            control: { type: "text" },
        }
    }
}

export default meta;
type Story = StoryObj<typeof  Test>;

export const Default: Story = {
    args: {
        role: "test"
    }
};