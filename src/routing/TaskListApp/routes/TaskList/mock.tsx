import React from 'react';
// Assuming the correct way to import the components is individually
import TaskListApp_TaskList_TaskList from '@/src/components/views/TaskListApp_TaskList_TaskList';
import TaskListApp_TaskList_TaskSearchBar from '@/src/components/views/TaskListApp_TaskList_TaskSearchBar';
// Assuming Moment and ComponentID are types that need to be imported
import { Moment } from 'moment'; // This assumes Moment is from the 'moment' library
import { ComponentID } from '@/src/types'; // Assuming ComponentID is a custom type defined elsewhere in the project

export declare type RouteMockComponentProps = {
  tasks: Array<{
    id: string;
    title: string;
    description: string;
    dueDate: Moment;
    status: 'New' | 'InProgress' | 'Completed';
  }>;
  onTaskClick: (taskId: string) => void;
  onTaskEditClick: (taskId: string) => void;
  onSearchBoxSubmit: () => void;
  onSearchBoxBlur: () => void;
  onSearchBoxFocus: () => void;
  onSearchBoxKeywordsChange: (keywords: string) => void;
  searchBoxKeywords: string;
  limit: number;
  page: number;
  order: 'dueDate' | 'createdAt';
  componentID: ComponentID;
  keywords?: string;
  onKeywordsChange: (keywords: string) => void;
  onSearchSubmit: () => void;
};

export default function RouteMockComponent(props: RouteMockComponentProps): JSX.Element {
  const propsOfTaskList = {
    tasks: props.tasks,
    onTaskClick: props.onTaskClick,
    onTaskEditClick: props.onTaskEditClick,
    onSearchBoxSubmit: props.onSearchBoxSubmit,
    onSearchBoxBlur: props.onSearchBoxBlur,
    onSearchBoxFocus: props.onSearchBoxFocus,
    onSearchBoxKeywordsChange: props.onSearchBoxKeywordsChange,
    searchBoxKeywords: props.searchBoxKeywords,
    limit: props.limit,
    page: props.page,
    order: props.order,
    componentID: props.componentID,
  };

  const propsOfTaskSearchBar = {
    keywords: props.keywords,
    onKeywordsChange: props.onKeywordsChange,
    onSearchSubmit: props.onSearchSubmit,
    onSearchBoxFocus: props.onSearchBoxFocus,
    onSearchBoxBlur: props.onSearchBoxBlur,
    componentID: props.componentID,
  };

  return (
    <div>
      <TaskListApp_TaskList_TaskSearchBar {...propsOfTaskSearchBar} />
      <TaskListApp_TaskList_TaskList {...propsOfTaskList} />
    </div>
  );
}
