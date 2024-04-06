import type {Meta, StoryObj} from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const SearchButton: StoryObj = {
  args: {
    children: '検索',
    styleName: 'primary',
  },
};