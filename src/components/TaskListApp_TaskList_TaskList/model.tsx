import React, { useEffect } from 'react';
import { useDatabaseRecordList, ComponentID, Condition } from '@neur0base/app-sdk-core';
import { ViewTemplateComponentProps } from './view';
import { TasksRow as DataModelRow } from '@/src/config/instances.d';
import moment, { Moment } from 'moment';

export declare type ViewModelComponentProps = {
  children: (props: ViewTemplateComponentProps) => JSX.Element;
  onTaskClick: (taskId: string) => void;
  onTaskEditClick: (taskId: string) => void;
  limit?: number;
  page?: number;
  keywords?: string;
  order?: 'dueDate' | 'createdAt';
  componentID: ComponentID;
};

export default function ViewModelComponent({
  children,
  onTaskClick,
  onTaskEditClick,
  limit,
  page,
  keywords,
  order,
  componentID,
}: ViewModelComponentProps): JSX.Element {
  const condition: Condition = {
    query: keywords || '',
    page: page || 1,
    limit: limit || 10,
    order: order === 'dueDate' ? 'contents.deadline' : order === 'createdAt' ? 'created' : undefined,
    asc: order === 'dueDate' || order === 'createdAt' ? false : undefined,
  };

  const [repositoryListState, repositoryListActions] = useDatabaseRecordList<DataModelRow>({
    instanceId: 'tasks',
    condition,
    preloaded: true,
  });

  useEffect(() => {
    repositoryListActions?.setCondition(condition);
    repositoryListActions?.refetch();
  }, [repositoryListActions, condition]);

  const tasks = repositoryListState.collection.map((task) => ({
    id: task?.refid || '',
    title: task?.title || '',
    description: task?.description || '',
    dueDate: task?.contents?.deadline ? moment(task.contents.deadline) : moment(),
    status: task?.contents?.status || 'New',
  }));

  const viewProps: ViewTemplateComponentProps = {
    tasks,
    onTaskClick,
    onTaskEditClick,
    onSearchBoxSubmit: () => repositoryListActions?.refetch(),
    onSearchBoxBlur: () => {},
    onSearchBoxFocus: () => {},
    onSearchBoxKeywordsChange: (newKeywords) => repositoryListActions?.setQuery(newKeywords),
    searchBoxKeywords: keywords || '',
    limit: limit || 10,
    page: page || 1,
    order: order || 'dueDate',
    componentID,
  };

  return <>{children(viewProps)}</>;
}
