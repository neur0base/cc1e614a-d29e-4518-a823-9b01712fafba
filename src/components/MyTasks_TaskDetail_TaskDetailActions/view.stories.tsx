import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ViewTemplateComponent from './view';

const meta: Meta<typeof ViewTemplateComponent> = {
  title: 'Components/MyTasks/TaskDetail/TaskDetailActions',
  component: ViewTemplateComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

declare type Story = StoryObj<typeof ViewTemplateComponent>;

export const MyTasks_TaskDetail_TaskDetailActions: Story = {
  args: {
    onEditClick: () => {
      alert('Edit Clicked');
    },
    onDeleteClick: () => {
      alert('Delete Clicked');
    },
    componentID: ['MyTasks', 'TaskDetail', 'TaskDetailActions'],
  },
};
