import type { Meta, StoryObj } from '@storybook/react';
import ColorTitle2Button from './ColorTitle2';

const meta: Meta = {
  title: 'Atoms/ColorTitle2Button',
  component: ColorTitle2Button,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export const GreenTitle: Story = {
  args: {
    color: 'green',
    size: 'md',
    textAlign: 'end',
    children: 'Greentitle'
   
  },
};
export const PinkTitle: Story = {
  args: {
    color: 'Pink',
    size: 'sm',
    textAlign: 'start',
    children: 'Pinktitle'
   
  },
};

export default meta;