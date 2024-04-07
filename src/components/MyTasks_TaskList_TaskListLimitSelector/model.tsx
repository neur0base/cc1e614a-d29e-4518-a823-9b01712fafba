import React, { useState, useCallback } from 'react';
import { ViewTemplateComponentProps } from './view';
import { TasksRow as DataModelRow } from '@/src/config/instances.d';
import { ComponentID } from '@neur0base/app-sdk-core';

export declare type ViewModelComponentProps = {
  children: (props: ViewTemplateComponentProps) => JSX.Element;
  componentID: ComponentID;
  onLimitChange: (limit: number) => void;
};

export default function ViewModelComponent({
  children,
  componentID,
  onLimitChange,
}: ViewModelComponentProps): JSX.Element {
  const [selectedLimit, setSelectedLimit] = useState<number>(10);

  const handleLimitChange = useCallback((limit: number) => {
    setSelectedLimit(limit);
    onLimitChange(limit);
  }, [onLimitChange]);

  const viewProps: ViewTemplateComponentProps = {
    selectedLimit,
    onLimitChange: handleLimitChange,
    componentID,
  };

  return (<>{children(viewProps)}</>);
}
