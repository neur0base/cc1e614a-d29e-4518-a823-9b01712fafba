import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import RouteMockComponent, { RouteMockComponentProps } from './mock';

const meta: Meta<typeof RouteMockComponent> = {
  title: 'Route/MyTasks_TaskList',
  component: RouteMockComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

declare type Story = StoryObj<typeof RouteMockComponent>;

export const MyTasksTaskList: Story = {
  args: {
    tasks: [
      {
        id: '1',
        title: 'Task 1',
        status: '未着手',
        createdAt: '2023-04-01T12:00:00Z',
      },
      {
        id: '2',
        title: 'Task 2',
        status: '進行中',
        createdAt: '2023-04-02T12:00:00Z',
      },
    ],
    limit: 10,
    page: 1,
    order: 'createdAt desc',
    selectedLimit: 10,
    keywords: '',
    onTaskClick: (taskId: string) => {
      alert(`Task ${taskId} clicked`);
    },
    onLimitChange: (limit: number) => {
      alert(`Limit changed to ${limit}`);
    },
    onKeywordsChange: (keywords: string) => {
      alert(`Keywords changed to ${keywords}`);
    },
    onSubmit: () => {
      alert('Search submitted');
    },
    onFilterChange: (status: string) => {
      alert(`Filter changed to ${status}`);
    },
    componentID: [
      'MyTasks_TaskList_TaskList',
      'MyTasks_TaskList_TaskListLimitSelector',
      'MyTasks_TaskList_TaskSearchBox',
      'MyTasks_TaskList_TaskStatusFilter',
    ],
  },
};
