import {Button} from './Button.tsx';
import {Meta, StoryObj} from '@storybook/react';

const meta= {
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

export const Primary1: Story = {
    args: {
        variant: "primary",
        children: "Primary button"
    }
}

/** Primary variant. Used as 'default'*/
export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
    },
}

export const Secondary2: Story = {
    args: {
        ...Primary.args,
        variant: "secondary",
        children: "Secondary2 button"
    }
}

export const PrimeriOutlined: Story = {
    args: {
        variant: "outlined",
        children: "Primary button"
    }
};

export const ButtonAsLink: Story = {
    args: {
        variant: "primary",
        asChild: true,
        children: <a href={'htpps://it-incubator.io'}>it-incubator</a>
    }
};
