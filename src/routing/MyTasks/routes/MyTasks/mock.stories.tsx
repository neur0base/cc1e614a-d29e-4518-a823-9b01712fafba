import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import RouteMockComponent from './mock';

const meta: Meta<typeof RouteMockComponent> = {
  title: 'Route/MyTasks_MyTasks',
  component: RouteMockComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

declare type Story = StoryObj<typeof RouteMockComponent>;

export const MyTasks_MyTasks: Story = {
  args: {
    tasks: [],
    onTaskClick: (taskId: string) => { alert(`Task ${taskId} clicked`) },
    onPageChange: (page: number) => { alert(`Page ${page} selected`) },
    currentPage: 1,
    totalPages: 1,
    componentID: ["MyTasks_MyTasks_Header", "MyTasks_MyTasks_TaskList"],
  }
};
