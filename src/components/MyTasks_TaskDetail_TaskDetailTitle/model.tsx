import React from 'react';
import { ViewTemplateComponentProps } from './view';
import { TasksRow as DataModelRow } from '@/src/config/instances.d';
import { useDatabaseRecordRow, ComponentID } from '@neur0base/app-sdk-core';

export declare type ViewModelComponentProps = {
  children: (props: ViewTemplateComponentProps) => JSX.Element;
  recordID: string;
  componentID: ComponentID;
};

export default function ViewModelComponent({
  children,
  recordID,
  componentID,
}: ViewModelComponentProps): JSX.Element {
  const [repositoryRowState, repositoryRowActions] = useDatabaseRecordRow<DataModelRow>({
    instanceId: "tasks", // Set the ID of the Data Instance to be used.
    refid: recordID,
    options: {
       preloaded: true,
    },
  });

  const contextProps: ViewTemplateComponentProps = {
    title: repositoryRowState?.data?.title || '',
    componentID,
  };

  return children(contextProps);
}
