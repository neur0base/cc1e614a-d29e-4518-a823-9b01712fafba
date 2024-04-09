import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import MyTasksHeader, { ViewTemplateComponentProps } from './view';

const meta: Meta<typeof MyTasksHeader> = {
  title: 'Components/MyTasksHeader',
  component: MyTasksHeader,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

declare type Story = StoryObj<typeof MyTasksHeader>;

export const Default: Story = {
  args: {
    onAddTaskClick: () => {
      alert('Add Task Clicked');
    },
    componentID: ['MyTasks_MyTasks_Header'],
  },
};
