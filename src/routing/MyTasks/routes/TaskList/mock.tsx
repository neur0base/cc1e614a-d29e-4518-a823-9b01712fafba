import React from 'react';
import { ComponentID } from '@neur0base/app-sdk-core';
import { TaskListViewModel } from '@/src/components/MyTasks_TaskList_TaskList/view';

// Import all the components you use in this component from '@/src/components/views'.
import {
  MyTasks_TaskList_TaskList,
  MyTasks_TaskList_TaskListLimitSelector,
  MyTasks_TaskList_TaskSearchBox,
  MyTasks_TaskList_TaskStatusFilter,
} from '@/src/components/views';

// Combine all the props of all the components here.
export declare type RouteMockComponentProps = {
  tasks: TaskListViewModel[];
  limit: number;
  page: number;
  order: string;
  selectedLimit: number;
  keywords?: string;
  onTaskClick: (taskId: string) => void;
  onLimitChange: (limit: number) => void;
  onKeywordsChange: (keywords: string) => void;
  onSubmit: () => void;
  onFilterChange: (status: string) => void;
  componentID: ComponentID;
};

export default function RouteMockComponent(
  props: RouteMockComponentProps,
): JSX.Element {
  // Set the values of props for each component.
  const propsOfMyTasks_TaskList_TaskList = {
    tasks: props.tasks,
    limit: props.limit,
    page: props.page,
    order: props.order,
    onTaskClick: props.onTaskClick,
    componentID: props.componentID,
  };
  const propsOfMyTasks_TaskList_TaskListLimitSelector = {
    selectedLimit: props.selectedLimit,
    onLimitChange: props.onLimitChange,
    componentID: props.componentID,
  };
  const propsOfMyTasks_TaskList_TaskSearchBox = {
    keywords: props.keywords,
    onKeywordsChange: props.onKeywordsChange,
    onSubmit: props.onSubmit,
    componentID: props.componentID,
  };
  const propsOfMyTasks_TaskList_TaskStatusFilter = {
    onFilterChange: props.onFilterChange,
    componentID: props.componentID,
  };

  // Keep the same layout as ActualRouteComponent.
  return (
    <div>
      <MyTasks_TaskList_TaskSearchBox
        {...propsOfMyTasks_TaskList_TaskSearchBox}
      />
      <MyTasks_TaskList_TaskStatusFilter
        {...propsOfMyTasks_TaskList_TaskStatusFilter}
      />
      <MyTasks_TaskList_TaskListLimitSelector
        {...propsOfMyTasks_TaskList_TaskListLimitSelector}
      />
      <MyTasks_TaskList_TaskList {...propsOfMyTasks_TaskList_TaskList} />
    </div>
  );
}
