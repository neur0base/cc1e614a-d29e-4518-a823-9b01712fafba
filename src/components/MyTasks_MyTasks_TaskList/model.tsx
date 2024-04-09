import React, { useState, useCallback } from 'react';
import {
  useDatabaseRecordList,
  ComponentID,
  Condition,
} from '@neur0base/app-sdk-core';
import { ViewTemplateComponentProps } from './view';
import { TasksRow as DataModelRow } from '@/src/config/instances.d';
import moment from 'moment';

export declare type ViewModelComponentProps = {
  children: (props: ViewTemplateComponentProps) => JSX.Element;
  onTaskClick: (taskId: string) => void;
  page?: number;
  limit?: number;
  componentID: ComponentID;
};

export default function ViewModelComponent({
  children,
  onTaskClick,
  page,
  limit,
  componentID,
}: ViewModelComponentProps): JSX.Element {
  const condition: Condition = {
    page: page || 1,
    limit: limit || 10,
    order: 'created',
    asc: false,
  };

  const [repositoryListState, repositoryListActions] =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useDatabaseRecordList<DataModelRow>({
      instanceId: 'tasks',
      condition,
      preloaded: true,
    });

  const tasks = repositoryListState.collection.map((task: DataModelRow) => ({
    id: task?.refid || '',
    title: task?.title || '',
    status: task?.contents?.status as 'notStarted' | 'inProgress' | 'completed',
    createdAt: task?.created ? moment(task.created).format('YYYY-MM-DD') : '',
  }));

  const handlePageChange = useCallback(
    (newPage: number) => {
      repositoryListActions.setPage(newPage);
    },
    [repositoryListActions],
  );

  const viewProps: ViewTemplateComponentProps = {
    tasks,
    onTaskClick,
    onPageChange: handlePageChange,
    currentPage: repositoryListState.pagination.page,
    totalPages: repositoryListState.pagination.pageCount,
    componentID,
  };

  return children(viewProps);
}
