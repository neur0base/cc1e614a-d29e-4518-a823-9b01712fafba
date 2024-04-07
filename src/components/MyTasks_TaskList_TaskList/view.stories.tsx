import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import ViewTemplateComponent from './view';

const meta: Meta<typeof ViewTemplateComponent> = {
  title: 'Components/MyTasks_TaskList_TaskList',
  component: ViewTemplateComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

declare type Story = StoryObj<typeof ViewTemplateComponent>;

export const MyTasks_TaskList_TaskList: Story = {
  args: {
    tasks: [
      {
        id: '1',
        title: 'Task 1',
        status: 'In Progress',
        createdAt: '2023-04-01T09:00:00Z',
      },
      {
        id: '2',
        title: 'Task 2',
        status: 'Completed',
        createdAt: '2023-04-02T10:00:00Z',
      },
    ],
    limit: 10,
    page: 1,
    order: 'createdAt desc',
    onTaskClick: (taskId: string) => { alert(`Task ${taskId} clicked`) },
    componentID: ["MyTasks_TaskList_TaskList"],
  }
};
