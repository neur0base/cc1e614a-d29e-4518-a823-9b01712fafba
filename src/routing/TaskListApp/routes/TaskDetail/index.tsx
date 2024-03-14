import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation, ComponentID, useUIContext } from '@neur0base/app-sdk-core';
import { TaskListApp_TaskDetail_TaskDetailView } from '@/src/components/index';

export declare type RouteComponentProps = {
  taskID: string;
  componentID: ComponentID;
};

export default function RouteComponent(props: RouteComponentProps): JSX.Element {
  const { getNewComponentID } = useUIContext<never, never>(props.componentID);
  const [naviState, naviActions] = useNavigation();

  const propsOfTaskListApp_TaskDetail_TaskDetailView = {
    taskID: props.taskID,
    componentID: getNewComponentID("TaskListApp_TaskDetail_TaskDetailView"),
  };

  return (
    <div>
      <TaskListApp_TaskDetail_TaskDetailView {...propsOfTaskListApp_TaskDetail_TaskDetailView} />
    </div>
  );
}
