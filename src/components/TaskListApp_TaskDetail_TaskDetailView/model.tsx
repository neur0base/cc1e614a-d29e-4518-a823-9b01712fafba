import React from 'react';
import { ViewTemplateComponentProps } from './view';
import { TasksRow as DataModelRow } from '@/src/config/instances.d';
import { useDatabaseRecordRow, ComponentID } from '@neur0base/app-sdk-core';
import moment, { Moment } from 'moment';

export declare type ViewModelComponentProps = {
  children: (props: ViewTemplateComponentProps) => JSX.Element;
  taskID: string;
  componentID: ComponentID;
};

export default function ViewModelComponent({
  children,
  taskID,
  componentID,
}: ViewModelComponentProps): JSX.Element {
  const [repositoryRowState, repositoryRowActions] = useDatabaseRecordRow<DataModelRow>({
    instanceId: "tasks", // Set the ID of the Data Instance to be used.
    refid: taskID,
    options: {
       preloaded: true,
    },
  });

  const task = {
    title: repositoryRowState?.data?.title || '',
    description: repositoryRowState?.data?.description || '',
    dueDate: repositoryRowState?.data?.contents?.deadline ? moment(repositoryRowState.data.contents.deadline) : undefined,
    status: repositoryRowState?.data?.contents?.status || '',
  };

  const contextProps: ViewTemplateComponentProps = {
    task,
    componentID,
  };

  return children(contextProps);
}
