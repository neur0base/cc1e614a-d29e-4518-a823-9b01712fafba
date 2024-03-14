import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation, ComponentID, useUIContext } from '@neur0base/app-sdk-core';
import moment, { Moment } from 'moment';
import {
  TaskListApp_TaskList_TaskList,
  TaskListApp_TaskList_TaskSearchBar,
} from '@/src/components/index';

export declare type RouteComponentProps = {
  limit?: number;
  page?: number;
  keywords?: string;
  order?: 'dueDate' | 'createdAt';
  componentID: ComponentID;
};

export default function RouteComponent(props: RouteComponentProps): JSX.Element {
  const { getNewComponentID } = useUIContext<never, never>(props.componentID);
  const [naviState, naviActions] = useNavigation();

  const handleTaskClick = useCallback((taskId: string) => {
    naviActions?.navigate("TaskDetail", { taskId });
  }, [naviActions]);

  const handleTaskEditClick = useCallback((taskId: string) => {
    naviActions?.navigate("TaskEdit", { taskId });
  }, [naviActions]);

  const handleSearch = useCallback((keywords: string) => {
    naviActions?.navigate("TaskList", { keywords });
  }, [naviActions]);

  const propsOfTaskList = {
    onTaskClick: handleTaskClick,
    onTaskEditClick: handleTaskEditClick,
    limit: props.limit,
    page: props.page,
    keywords: props.keywords,
    order: props.order,
    componentID: getNewComponentID("TaskListApp_TaskList_TaskList"),
  };

  const propsOfTaskSearchBar = {
    onSearch: handleSearch,
    keywords: props.keywords,
    componentID: getNewComponentID("TaskListApp_TaskList_TaskSearchBar"),
  };

  return (
    <div>
      <TaskListApp_TaskList_TaskSearchBar {...propsOfTaskSearchBar} />
      <TaskListApp_TaskList_TaskList {...propsOfTaskList} />
    </div>
  );
}
