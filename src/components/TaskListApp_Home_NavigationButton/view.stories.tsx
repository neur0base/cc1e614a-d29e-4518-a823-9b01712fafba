import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import ViewTemplateComponent from './view';

const meta: Meta<typeof ViewTemplateComponent> = {
  title: 'Components/TaskListApp_Home_NavigationButton',
  component: ViewTemplateComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

declare type Story = StoryObj<typeof ViewTemplateComponent>;

export const NavigationButton: Story = {
  args: {
    onTaskListClick: () => { alert("Navigating to Task List") },
    componentID: ["TaskListApp_Home_NavigationButton"],
  }
};
