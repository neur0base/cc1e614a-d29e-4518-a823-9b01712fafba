import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import RouteMockComponent from './mock';

const meta: Meta<typeof RouteMockComponent> = {
  title: 'Route/TaskListApp_Home_NavigationButton',
  component: RouteMockComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

declare type Story = StoryObj<typeof RouteMockComponent>;

export const TaskListApp_Home_NavigationButton: Story = {
  args: {
    onTaskListClick: () => { alert("onTaskListClick") },
    componentID: "TaskListApp_Home_NavigationButton", // Corrected from array to string to match expected type
  }
};

