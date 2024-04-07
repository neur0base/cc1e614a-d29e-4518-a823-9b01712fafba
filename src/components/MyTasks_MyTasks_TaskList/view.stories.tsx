import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import ViewTemplateComponent from './view';

const meta: Meta<typeof ViewTemplateComponent> = {
  title: 'Components/MyTasks_MyTasks_TaskList',
  component: ViewTemplateComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

declare type Story = StoryObj<typeof ViewTemplateComponent>;

export const MyTasks_MyTasks_TaskList: Story = {
  args: {
    tasks: [
      {
        id: '1',
        title: 'Task 1',
        status: 'notStarted',
        createdAt: '2023-01-01',
      },
      {
        id: '2',
        title: 'Task 2',
        status: 'inProgress',
        createdAt: '2023-01-02',
      },
      {
        id: '3',
        title: 'Task 3',
        status: 'completed',
        createdAt: '2023-01-03',
      },
    ],
    onTaskClick: (taskId: string) => { alert(`Task ${taskId} clicked`) },
    onPageChange: (page: number) => { alert(`Page ${page} selected`) },
    currentPage: 1,
    totalPages: 3,
    componentID: ["MyTasks_MyTasks_TaskList"],
  }
};
