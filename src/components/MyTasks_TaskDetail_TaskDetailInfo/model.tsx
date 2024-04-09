import React from 'react';
import { ViewTemplateComponentProps } from './view';
import { TasksRow as DataModelRow } from '@/src/config/instances.d';
import { useDatabaseRecordRow, ComponentID } from '@neur0base/app-sdk-core';
import moment from 'moment';

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
  const [repositoryRowState, repositoryRowActions] =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useDatabaseRecordRow<DataModelRow>({
      instanceId: 'tasks',
      refid: recordID,
      options: {
        preloaded: true,
      },
    });

  const task = repositoryRowState?.data;

  const contextProps: ViewTemplateComponentProps = {
    // title: task?.title || '',
    // description: task?.description || '',
    // status: task?.contents?.status || '',
    // created: task?.created ? moment(task.created).format('YYYY-MM-DD HH:mm:ss') : '',
    // modified: task?.modified ? moment(task.modified).format('YYYY-MM-DD HH:mm:ss') : '',
    recordID,
    componentID,
  };

  return children(contextProps);
}
