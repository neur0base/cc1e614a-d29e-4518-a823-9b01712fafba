import type {Meta, StoryObj} from '@storybook/react';
import Example from './index';

const meta: Meta<typeof Example> = {
  title: 'organisms/Example',
  component: Example,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const NormalExample: StoryObj = {
  args: {
    wordTitle: 'Hello',
    pronunciation: 'həˈləʊ',
    meaning: 'xin chào',
    examples: [
      'aaa',
    ],
    onPronunciationPress: () => {
      alert('pronunciation');
    },
    onExamplePress: (example: string) => {
      alert(example);
    },
    onBackPress: () => {
      alert('back');
    },
    componentID: ['asas'],
  },
};