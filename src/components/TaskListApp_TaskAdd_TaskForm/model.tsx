import React, { useState, useCallback } from 'react';
import { ViewTemplateComponentProps } from './view';
import { TasksRow as DataModelRow } from '@/src/config/instances.d';
import { useDatabaseRecordRow, ComponentID, Error } from '@neur0base/app-sdk-core';
import moment, { Moment } from 'moment';

export declare type ViewModelComponentProps = {
  children: (props: ViewTemplateComponentProps) => JSX.Element;
  onSubmitSuccess?: () => void;
  componentID: ComponentID;
};

export default function ViewModelComponent({
  children,
  onSubmitSuccess,
  componentID,
}: ViewModelComponentProps): JSX.Element {
  const [errors, setErrors] = useState<{[fieldID: string]: Error} | undefined>(undefined);

  const [repositoryRowState, repositoryRowActions] = useDatabaseRecordRow<DataModelRow>({
    instanceId: "tasks", 
    options: {
      preloaded: false,
    },
  });

  const handleSubmit = useCallback((values: {title: string; description: string; dueDate: Moment}) => {
    const data: DataModelRow = {
      title: values.title,
      description: values.description,
      contents: {
        deadline: values.dueDate,
        status: 'open',
      },
    };

    repositoryRowActions?.create(data)
      .then(() => {
        setErrors(undefined);
        onSubmitSuccess?.();
      })
      .catch((error: Error) => {
        setErrors(error?.details);
      });
  }, [repositoryRowActions, onSubmitSuccess]);

  const viewProps: ViewTemplateComponentProps = {
    onSubmit: handleSubmit,
    componentID,
  };

  return children(viewProps);
}
