import type {Meta, StoryObj} from '@storybook/react';
import Text from './index';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const PrimaryText: StoryObj = {
  args: {
    children: 'テキスト',
    styleName: 'primary',
  },
};