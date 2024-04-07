import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation, ComponentID, useUIContext } from '@neur0base/app-sdk-core';
import {
  MyTasks_MyTasks_Header,
  MyTasks_MyTasks_TaskList,
} from '@/src/components/index';

export declare type RouteComponentProps = {
  componentID: ComponentID;
  page?: number;
  limit?: number;
};

export default function RouteComponent(props: RouteComponentProps): JSX.Element {
  const { getNewComponentID } = useUIContext<never, never>(props.componentID);
  const [naviState, naviActions] = useNavigation();

  const handleAddTaskClick = useCallback(() => {
    // Logic to open add task modal or navigate to add task screen
  }, [naviActions]);

  const handleTaskClick = useCallback((taskId: string) => {
    naviActions?.navigate("TaskDetailScreen", { taskId });
  }, [naviActions]);

  const headerProps = {
    onAddTaskClick: handleAddTaskClick,
    componentID: getNewComponentID("MyTasks_MyTasks_Header"),
  };

  const taskListProps = {
    onTaskClick: handleTaskClick,
    page: props.page,
    limit: props.limit,
    componentID: getNewComponentID("MyTasks_MyTasks_TaskList"),
  };

  return (
    <div>
      <MyTasks_MyTasks_Header {...headerProps} />
      <MyTasks_MyTasks_TaskList {...taskListProps} />
    </div>
  );
}
