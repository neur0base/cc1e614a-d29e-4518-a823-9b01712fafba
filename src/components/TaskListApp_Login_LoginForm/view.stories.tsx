import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import ViewTemplateComponent from './view';

const meta: Meta<typeof ViewTemplateComponent> = {
  title: 'Components/TaskListApp_Login_LoginForm',
  component: ViewTemplateComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

declare type Story = StoryObj<typeof ViewTemplateComponent>;

export const LoginForm: Story = {
  args: {
    onLogin: (username: string, password: string) => {
      console.log(`Logging in with username: ${username}, password: ${password}`);
    },
    componentID: ["TaskListApp_Login_LoginForm"],
  }
};
