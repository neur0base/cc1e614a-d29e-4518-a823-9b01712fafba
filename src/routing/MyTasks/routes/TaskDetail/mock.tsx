import React from 'react';
import { ComponentID } from "@neur0base/app-sdk-core";

// Import all the components you use in this component from '@/src/components/views'.
import {
  MyTasks_TaskDetail_TaskDetailActions,
  MyTasks_TaskDetail_TaskDetailInfo,
  MyTasks_TaskDetail_TaskDetailTitle,
} from '@/src/components/views';

// Combine all the props of all the components here.
export declare type RouteMockComponentProps = {
  onEditClick: () => void;
  onDeleteClick: () => void;
  recordID: string;
  componentID: ComponentID;
};

export default function RouteMockComponent(props: RouteMockComponentProps): JSX.Element {

  // Set the values of props for each component.
  const propsOfMyTasks_TaskDetail_TaskDetailActions = {
    onEditClick: props.onEditClick,
    onDeleteClick: props.onDeleteClick,
    componentID: props.componentID,
  };
  const propsOfMyTasks_TaskDetail_TaskDetailInfo = {
    recordID: props.recordID,
    componentID: props.componentID,
  };
  const propsOfMyTasks_TaskDetail_TaskDetailTitle = {
    recordID: props.recordID,
    componentID: props.componentID,
  };

  // Keep the same layout as ActualRouteComponent.
  return (
    <div>
      <MyTasks_TaskDetail_TaskDetailTitle {...propsOfMyTasks_TaskDetail_TaskDetailTitle} />
      <MyTasks_TaskDetail_TaskDetailInfo {...propsOfMyTasks_TaskDetail_TaskDetailInfo} />
      <MyTasks_TaskDetail_TaskDetailActions {...propsOfMyTasks_TaskDetail_TaskDetailActions} />
    </div>
  );

}