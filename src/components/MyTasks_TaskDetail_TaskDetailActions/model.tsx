import React, { useState } from 'react';
import { ViewTemplateComponentProps } from './view';
import { TasksRow as DataModelRow } from '@/src/config/instances.d';
import { useDatabaseRecordRow, ComponentID, Error } from '@neur0base/app-sdk-core';

export declare type ViewModelComponentProps = {
  children: (props: ViewTemplateComponentProps) => JSX.Element;
  taskID: string;
  componentID: ComponentID;
  onDeleted?: () => void;
  disabled?: boolean;
};

export default function ViewModelComponent({
  children,
  taskID,
  componentID,
  onDeleted,
  disabled,
}: ViewModelComponentProps): JSX.Element {
    const [error, setError] = useState<Error | undefined>(undefined);

    const [repositoryRowState, repositoryRowActions] = useDatabaseRecordRow<DataModelRow>({
        instanceId: "tasks",
        refid: taskID,
        options: {
            preloaded: false,
        },
    });

    const viewProps: ViewTemplateComponentProps = {
        onEditClick: () => {
            // Navigate to the task edit screen
            // Implement the navigation logic here
        },
        onDeleteClick: () => {
            const promise = repositoryRowActions?.remove();
            promise?.then(() => {
                onDeleted?.();
            })
            .catch((error: Error) => {
                setError(error);
            });
        },
        componentID,
    };

    return children(viewProps);
}
