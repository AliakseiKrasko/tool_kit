import {Button} from './Button.tsx';
import {Meta, StoryObj} from '@storybook/react';

const meta= {
    component: Button
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        variant: "primary",
        children: "Primary button"
    }
}