import React from 'react';
import { ViewTemplateComponentProps } from './view';
import { ComponentID } from '@neur0base/app-sdk-core';

export declare type ViewModelComponentProps = {
  children: (props: ViewTemplateComponentProps) => JSX.Element;
  onAddTaskClick: () => void;
  componentID: ComponentID;
};

export default function ViewModelComponent({
  children,
  onAddTaskClick,
  componentID,
}: ViewModelComponentProps): JSX.Element {
  const viewProps: ViewTemplateComponentProps = {
    onAddTaskClick,
    componentID,
  };

  return children(viewProps);
}
