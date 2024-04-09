import React from 'react';
import { ComponentID } from '@neur0base/app-sdk-core';
import { Task } from '@/src/components/MyTasks_MyTasks_TaskList/view';

// Import all the components you use in this component from '@/src/components/views'.
import {
  MyTasks_MyTasks_Header,
  MyTasks_MyTasks_TaskList,
} from '@/src/components/views';

// Combine all the props of all the components here.
export declare type RouteMockComponentProps = {
  tasks: Task[];
  onTaskClick: (taskId: string) => void;
  onPageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
  componentID: ComponentID;
};

export default function RouteMockComponent(
  props: RouteMockComponentProps,
): JSX.Element {
  // Set the values of props for each component.
  const propsOfMyTasks_MyTasks_Header = {
    onAddTaskClick: () => {
      props.onTaskClick('new');
    },
    componentID: props.componentID,
  };
  const propsOfMyTasks_MyTasks_TaskList = {
    tasks: props.tasks,
    onTaskClick: props.onTaskClick,
    onPageChange: props.onPageChange,
    currentPage: props.currentPage,
    totalPages: props.totalPages,
    componentID: props.componentID,
  };

  // Keep the same layout as ActualRouteComponent.
  return (
    <div>
      <MyTasks_MyTasks_Header {...propsOfMyTasks_MyTasks_Header} />
      <MyTasks_MyTasks_TaskList {...propsOfMyTasks_MyTasks_TaskList} />
    </div>
  );
}
