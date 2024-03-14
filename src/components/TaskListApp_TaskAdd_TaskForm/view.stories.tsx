import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import ViewTemplateComponent from './view';
import moment from 'moment';

const meta: Meta<typeof ViewTemplateComponent> = {
  title: 'Components/TaskListApp_TaskAdd_TaskForm',
  component: ViewTemplateComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

declare type Story = StoryObj<typeof ViewTemplateComponent>;

export const TaskForm: Story = {
  args: {
    onSubmit: (values) => {
      console.log('New task:', values);
    },
    componentID: ["TaskListApp_TaskAdd_TaskForm"],
  }
};
