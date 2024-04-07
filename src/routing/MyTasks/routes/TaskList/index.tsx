import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation, ComponentID, useUIContext } from '@neur0base/app-sdk-core';
import {
  MyTasks_TaskList_TaskList,
  MyTasks_TaskList_TaskListLimitSelector,
  MyTasks_TaskList_TaskSearchBox,
  MyTasks_TaskList_TaskStatusFilter,
} from '@/src/components/index';

export declare type RouteComponentProps = {
  limit?: number;
  page?: number;
  order?: string;
  status?: string;
  componentID: ComponentID;
};

export default function RouteComponent(props: RouteComponentProps): JSX.Element {
  const { componentID, limit, page, order, status } = props;
  const { getNewComponentID } = useUIContext<never, never>(componentID);
  const [naviState, naviActions] = useNavigation();

  const handleTaskClick = useCallback((taskId: string) => {
    naviActions?.navigate("TaskDetail", { taskId });
  }, [naviActions]);

  const handleSearch = useCallback((keywords: string) => {
    console.log(`Searching for: ${keywords}`);
  }, []);

  const handleLimitChange = useCallback((newLimit: number) => {
    console.log(`New limit: ${newLimit}`);
  }, []);

  return (
    <div>
      <MyTasks_TaskList_TaskSearchBox
        onSearch={handleSearch}
        componentID={getNewComponentID("MyTasks_TaskList_TaskSearchBox")}
      />
      <MyTasks_TaskList_TaskStatusFilter
        componentID={getNewComponentID("MyTasks_TaskList_TaskStatusFilter")}
      />
      <MyTasks_TaskList_TaskListLimitSelector
        onLimitChange={handleLimitChange}
        componentID={getNewComponentID("MyTasks_TaskList_TaskListLimitSelector")}
      />
      <MyTasks_TaskList_TaskList
        limit={limit}
        page={page}
        order={order}
        onTaskClick={handleTaskClick}
        componentID={getNewComponentID("MyTasks_TaskList_TaskList")}
      />
    </div>
  );
}
