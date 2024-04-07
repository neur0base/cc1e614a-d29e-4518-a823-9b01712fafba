import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import ViewTemplateComponent from './view';

const meta: Meta<typeof ViewTemplateComponent> = {
  title: 'Components/MyTasks_TaskList_TaskSearchBox',
  component: ViewTemplateComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

declare type Story = StoryObj<typeof ViewTemplateComponent>;

export const MyTasks_TaskList_TaskSearchBox: Story = {
  args: {
    onKeywordsChange: (keywords: string) => { alert("Keywords Changed: " + keywords) },
    onSubmit: () => { alert("Search Submitted") },
    componentID: ["MyTasks_TaskList_TaskSearchBox"],
  }
};
