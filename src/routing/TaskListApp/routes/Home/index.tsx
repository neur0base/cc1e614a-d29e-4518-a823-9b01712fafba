import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation, ComponentID, useUIContext } from '@neur0base/app-sdk-core';
import { TaskListApp_Home_NavigationButton } from '@/src/components/index';

export declare type RouteComponentProps = {
  componentID: ComponentID;
};

export default function RouteComponent(props: RouteComponentProps): JSX.Element {
  const { getNewComponentID } = useUIContext<never, never>(props.componentID);
  const [naviState, naviActions] = useNavigation();

  const handleTaskListClick = useCallback(() => {
    naviActions?.navigate("TaskList");
  }, [naviActions]);

  const propsOfTaskListApp_Home_NavigationButton = {
    onTaskListClick: handleTaskListClick,
    componentID: getNewComponentID("TaskListApp_Home_NavigationButton"),
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <TaskListApp_Home_NavigationButton {...propsOfTaskListApp_Home_NavigationButton} />
    </div>
  );
}
