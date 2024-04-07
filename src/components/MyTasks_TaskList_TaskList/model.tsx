import React from 'react';
import { ViewTemplateComponentProps } from './view';
import { TasksRow as DataModelRow } from '@/src/config/instances.d';
import { useDatabaseRecordList, ComponentID } from '@neur0base/app-sdk-core';
import moment from 'moment';

export declare type ViewModelComponentProps = {
  children: (props: ViewTemplateComponentProps) => JSX.Element;
  limit?: number;
  page?: number;
  order?: string;
  onTaskClick: (taskId: string) => void;
  componentID: ComponentID;
};

export default function ViewModelComponent({
  children,
  limit = 10,
  page = 1,
  order = 'created desc',
  onTaskClick,
  componentID,
}: ViewModelComponentProps): JSX.Element {

  const [repositoryListState, repositoryListActions] = useDatabaseRecordList<DataModelRow>({
    instanceId: "tasks",
    condition: {
      limit,
      page,
      order,
    },
    preloaded: true,
  });

  const tasks = repositoryListState.collection.map((task: DataModelRow) => ({
    id: task?.refid || '',
    title: task?.title || '',
    status: task?.contents?.status || '',
    createdAt: moment(task?.created).format('YYYY-MM-DD HH:mm:ss'),
  }));

  const viewProps: ViewTemplateComponentProps = {
    tasks,
    limit,
    page,
    order,
    onTaskClick,
    componentID,
  };

  return children(viewProps);
}
