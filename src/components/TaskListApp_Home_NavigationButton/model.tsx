import React, { useCallback } from 'react';
import { ViewTemplateComponentProps } from './view';
import { ComponentID } from '@neur0base/app-sdk-core';

export declare type ViewModelComponentProps = {
  children: (props: ViewTemplateComponentProps) => JSX.Element;
  onTaskListClick: () => void;
  componentID: ComponentID;
};

export default function ViewModelComponent({
  children,
  onTaskListClick,
  componentID,
}: ViewModelComponentProps): JSX.Element {
  const handleTaskListClick = useCallback(() => {
    onTaskListClick();
  }, [onTaskListClick]);

  const contextProps: ViewTemplateComponentProps = {
    onTaskListClick: handleTaskListClick,
    componentID,
  };

  return children(contextProps);
}
