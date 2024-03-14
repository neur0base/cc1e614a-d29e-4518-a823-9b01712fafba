import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import ViewTemplateComponent from './view';

const meta: Meta<typeof ViewTemplateComponent> = {
  title: 'Components/TaskListApp_TaskList_TaskSearchBar',
  component: ViewTemplateComponent,
  tags: ['autodocs'],
  argTypes: {
    keywords: {
      control: 'text',
      description: '検索するキーワード。タスクのタイトルやステータスにマッチする文字列を指定します。'
    },
    onKeywordsChange: { action: 'keywordsChanged' },
    onSearchSubmit: { action: 'searchSubmitted' },
    onSearchBoxFocus: { action: 'searchBoxFocused' },
    onSearchBoxBlur: { action: 'searchBoxBlurred' },
  },
};

export default meta;

declare type Story = StoryObj<typeof ViewTemplateComponent>;

export const TaskSearchBar: Story = {
  args: {
    keywords: '',
    onKeywordsChange: () => {},
    onSearchSubmit: () => {},
    onSearchBoxFocus: () => {},
    onSearchBoxBlur: () => {},
    componentID: ["TaskListApp_TaskList_TaskSearchBar"],
  }
};
