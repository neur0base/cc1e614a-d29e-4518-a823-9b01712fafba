import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ViewTemplateComponent from './view';

const meta: Meta<typeof ViewTemplateComponent> = {
  title: 'Components/MyTasks_TaskList_TaskStatusFilter',
  component: ViewTemplateComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

declare type Story = StoryObj<typeof ViewTemplateComponent>;

export const MyTasks_TaskList_TaskStatusFilter: Story = {
  args: {
    onFilterChange: (status: string) => {
      alert(`Filter changed to: ${status}`);
    },
    componentID: ['MyTasks_TaskList_TaskStatusFilter'],
  },
};
