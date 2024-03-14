import React from 'react';
import TaskListApp_Home_NavigationButton from '@/src/components/TaskListApp_Home_NavigationButton';

export declare type RouteMockComponentProps = {
  onTaskListClick: () => void;
  componentID: string;
};

// Assuming the error message indicates a mismatch in expected props for TaskListApp_Home_NavigationButton,
// we need to ensure the props passed match the expected 'ComponentProps' of TaskListApp_Home_NavigationButton.
// Without the exact definition of 'ComponentProps', I'll assume it expects 'onTaskListClick' and 'componentID'.
// If 'ComponentProps' requires additional or different props, adjustments will be necessary.

export default function RouteMockComponent(props: RouteMockComponentProps): JSX.Element {
  // Directly passing props to TaskListApp_Home_NavigationButton assuming it expects 'RouteMockComponentProps'.
  // This change assumes TaskListApp_Home_NavigationButton is designed to accept the same props as RouteMockComponent.
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <TaskListApp_Home_NavigationButton {...props} />
    </div>
  );
}


