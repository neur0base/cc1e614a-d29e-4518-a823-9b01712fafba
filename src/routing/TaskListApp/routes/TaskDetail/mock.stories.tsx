import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import RouteMockComponent from './mock';
import moment from 'moment'; // Assuming moment is already installed

const meta: Meta<typeof RouteMockComponent> = {
  title: 'Route/TaskListApp_TaskDetail_TaskDetailView',
  component: RouteMockComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

declare type Story = StoryObj<typeof RouteMockComponent>;

export const TaskDetailView: Story = {
  args: {
    task: {
      title: 'Complete project proposal',
      description: 'Prepare a detailed project proposal for the new client.',
      dueDate: moment(new Date(2023, 4, 15)), // Adjusted for moment and month index
      status: 'InProgress',
    },
    componentID: 'TaskListApp_TaskDetail_TaskDetailView', // Adjusted to be a string
  },
};

