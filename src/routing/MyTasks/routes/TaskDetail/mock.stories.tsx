import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import RouteMockComponent from './mock';

const meta: Meta<typeof RouteMockComponent> = {
  title: 'Route/MyTasks_TaskDetail',
  component: RouteMockComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

declare type Story = StoryObj<typeof RouteMockComponent>;

export const MyTasks_TaskDetail: Story = {
  args: {
    onEditClick: () => { alert("Edit Clicked") },
    onDeleteClick: () => { alert("Delete Clicked") },
    recordID: "123",
    componentID: ["MyTasks_TaskDetail_TaskDetailTitle", "MyTasks_TaskDetail_TaskDetailInfo", "MyTasks_TaskDetail_TaskDetailActions"],
  }
};
