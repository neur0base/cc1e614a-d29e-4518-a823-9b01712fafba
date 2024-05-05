import type { Meta, StoryObj } from '@storybook/react';
import Icon from './index';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const SearchSmall: StoryObj = {
  args: {
    name: 'fa_search',
    size: 'small',
  },
};

export const SearchNormal: StoryObj = {
  args: {
    name: 'fa_search',
    size: 'normal',
  },
};
export const SearchLarge: StoryObj = {
  args: {
    name: 'fa_search',
    size: 'large',
  },
};
