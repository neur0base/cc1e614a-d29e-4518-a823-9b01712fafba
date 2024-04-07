import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import ViewTemplateComponent from './view';

const meta: Meta<typeof ViewTemplateComponent> = {
  title: 'Components/MyTasks/TaskDetail/TaskDetailInfo',
  component: ViewTemplateComponent,
  tags: ['autodocs'],
  argTypes: {
    recordID: {
      control: 'text',
      description: '表示するタスクのIDを指定します。URLパラメータから取得します。',
      required: true,
    },
  },
};

export default meta;

declare type Story = StoryObj<typeof ViewTemplateComponent>;

export const TaskDetailInfo: Story = {
  args: {
    recordID: '12345',
    componentID: ["MyTasks_TaskDetail_TaskDetailInfo"],
  }
};
