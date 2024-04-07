import React, { useState, useCallback } from 'react';
import { ViewTemplateComponentProps } from './view';
import { TasksRow as DataModelRow } from '@/src/config/instances.d';
import { ComponentID } from '@neur0base/app-sdk-core';

export declare type ViewModelComponentProps = {
  children: (props: ViewTemplateComponentProps) => JSX.Element;
  componentID: ComponentID;
};

export default function ViewModelComponent({
  children,
  componentID,
}: ViewModelComponentProps): JSX.Element {
  const [selectedStatus, setSelectedStatus] = useState<string>('すべて');

  const handleFilterChange = useCallback((status: string) => {
    setSelectedStatus(status);
  }, []);

  const viewProps: ViewTemplateComponentProps = {
    onFilterChange: handleFilterChange,
    componentID,
  };

  return children(viewProps);
}
