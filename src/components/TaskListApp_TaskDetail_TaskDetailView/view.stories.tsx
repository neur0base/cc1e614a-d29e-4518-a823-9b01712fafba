import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import ViewTemplateComponent from './view';
import moment from 'moment';

const meta: Meta<typeof ViewTemplateComponent> = {
  title: 'Components/TaskListApp_TaskDetail_TaskDetailView',
  component: ViewTemplateComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

declare type Story = StoryObj<typeof ViewTemplateComponent>;

export const TaskDetailView: Story = {
  args: {
    task: {
      title: 'タスクのタイトル',
      description: 'タスクの詳細な説明文',
      dueDate: moment().add(1, 'week'),
      status: 'InProgress',
    },
    componentID: ['TaskListApp_TaskDetail_TaskDetailView'],
  }
};
