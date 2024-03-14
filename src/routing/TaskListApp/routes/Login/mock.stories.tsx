import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import RouteMockComponent from './mock';

const meta: Meta<typeof RouteMockComponent> = {
  title: 'Route/TaskListApp_Login_LoginForm',
  component: RouteMockComponent,
  tags: ['autodocs'],
  argTypes: {
    onLogin: { action: 'onLogin' },
  },
};

export default meta;

declare type Story = StoryObj<typeof RouteMockComponent>;

export const LoginForm: Story = {
  args: {
    onLogin: (username: string, password: string) => {
      console.log(`Username: ${username}, Password: ${password}`);
    },
    componentID: 'TaskListApp_Login_LoginForm', // Corrected from array to string to match expected type
  },
};

