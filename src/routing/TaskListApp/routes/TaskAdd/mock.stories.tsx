import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import RouteMockComponent from './mock';
import moment from 'moment';

const meta: Meta<typeof RouteMockComponent> = {
  title: 'Route/TaskListApp_TaskAdd_TaskForm',
  component: RouteMockComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

declare type Story = StoryObj<typeof RouteMockComponent>;

export const TaskForm: Story = {
  args: {
    onSubmit: (values) => {
      console.log(`Title: ${values.title}, Description: ${values.description}, Due Date: ${values.dueDate.format('YYYY-MM-DD')}`);
    },
    componentID: ['TaskListApp_TaskAdd_TaskForm'],
  }
};
