import React from 'react';
import TaskListApp_TaskAdd_TaskForm from '@/src/components/views/TaskListApp_TaskAdd_TaskForm';
import { Moment } from 'moment';
import { ComponentID } from '@neur0base/app-sdk-core';

export declare type RouteMockComponentProps = {
  onSubmit: (values: {title: string; description: string; dueDate: Moment}) => void;
  componentID: ComponentID;
};

export default function RouteMockComponent(props: RouteMockComponentProps): JSX.Element {
  const propsOfTaskListApp_TaskAdd_TaskForm = {
    onSubmit: props.onSubmit,
    componentID: props.componentID,
  };

  return (
    <div>
      <TaskListApp_TaskAdd_TaskForm {...propsOfTaskListApp_TaskAdd_TaskForm} />
    </div>
  );
}

