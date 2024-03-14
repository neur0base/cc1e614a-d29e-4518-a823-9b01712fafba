import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation, ComponentID, useUIContext } from '@neur0base/app-sdk-core';
import { TaskListApp_TaskAdd_TaskForm } from '@/src/components/index';

export declare type RouteComponentProps = {
  componentID: ComponentID;
};

export default function RouteComponent(props: RouteComponentProps): JSX.Element {
  const { getNewComponentID } = useUIContext<never, never>(props.componentID);
  const [naviState, naviActions] = useNavigation();

  const handleSubmitSuccess = useCallback(() => {
    naviActions?.navigate("TaskList", {});
  }, [naviActions]);

  const propsOfTaskListApp_TaskAdd_TaskForm = {
    onSubmitSuccess: handleSubmitSuccess,
    componentID: getNewComponentID("TaskListApp_TaskAdd_TaskForm"),
  };

  return (
    <div>
      <TaskListApp_TaskAdd_TaskForm {...propsOfTaskListApp_TaskAdd_TaskForm} />
    </div>
  );
}
