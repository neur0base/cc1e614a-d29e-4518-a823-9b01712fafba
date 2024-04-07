import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation, ComponentID, useUIContext } from '@neur0base/app-sdk-core';
import {
  MyTasks_TaskDetail_TaskDetailActions,
  MyTasks_TaskDetail_TaskDetailInfo,
  MyTasks_TaskDetail_TaskDetailTitle,
} from '@/src/components/index';

export declare type RouteComponentProps = {
  id: string;
  componentID: ComponentID;
};

export default function RouteComponent(props: RouteComponentProps): JSX.Element {
  const { getNewComponentID } = useUIContext<never, never>(props.componentID);
  const [naviState, naviActions] = useNavigation();

  const handleDeleted = useCallback(() => {
    // Assuming there's a route to navigate after deletion
    naviActions?.navigate("TaskList");
  }, [naviActions]);

  return (
    <div>
      <MyTasks_TaskDetail_TaskDetailTitle
        recordID={props.id}
        componentID={getNewComponentID("MyTasks_TaskDetail_TaskDetailTitle")}
      />
      <MyTasks_TaskDetail_TaskDetailInfo
        recordID={props.id}
        componentID={getNewComponentID("MyTasks_TaskDetail_TaskDetailInfo")}
      />
      <MyTasks_TaskDetail_TaskDetailActions
        taskID={props.id}
        onDeleted={handleDeleted}
        componentID={getNewComponentID("MyTasks_TaskDetail_TaskDetailActions")}
      />
    </div>
  );
}
