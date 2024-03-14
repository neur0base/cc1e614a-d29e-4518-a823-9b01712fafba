import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import ViewTemplateComponent from './view';
import moment from 'moment';

const meta: Meta<typeof ViewTemplateComponent> = {
  title: 'Components/TaskListApp_TaskList_TaskList',
  component: ViewTemplateComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

declare type Story = StoryObj<typeof ViewTemplateComponent>;

export const TaskList: Story = {
  args: {
    tasks: [
      {
        id: '1',
        title: 'Task 1',
        description: 'This is the description for Task 1',
        dueDate: moment().add(1, 'days'),
        status: 'New',
      },
      {
        id: '2',
        title: 'Task 2',
        description: 'This is the description for Task 2',
        dueDate: moment().add(2, 'days'),
        status: 'InProgress',
      },
      {
        id: '3',
        title: 'Task 3',
        description: 'This is the description for Task 3',
        dueDate: moment().add(3, 'days'),
        status: 'Completed',
      },
    ],
    onTaskClick: (taskId: string) => { alert(`Clicked on task ${taskId}`) },
    onTaskEditClick: (taskId: string) => { alert(`Edit task ${taskId}`) },
    onSearchBoxSubmit: () => { alert("Search submitted") },
    onSearchBoxBlur: () => { alert("Search box blurred") },
    onSearchBoxFocus: () => { alert("Search box focused") },
    onSearchBoxKeywordsChange: (keywords: string) => { alert(`Search keywords changed to ${keywords}`) },
    searchBoxKeywords: '',
    limit: 10,
    page: 1,
    order: 'dueDate',
    componentID: ["TaskListApp_TaskList_TaskList"],
  }
};
