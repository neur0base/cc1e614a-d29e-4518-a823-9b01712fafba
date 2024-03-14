import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation, ComponentID, useUIContext } from '@neur0base/app-sdk-core';
import {
  TaskListApp_Login_LoginForm,
} from '@/src/components/index';

export declare type RouteComponentProps = {
  onLoginSuccess: () => void;
  onLoginFailure: (error: Error) => void;
  componentID: ComponentID;
};

export default function RouteComponent(props: RouteComponentProps): JSX.Element {
  const { getNewComponentID } = useUIContext<never, never>(props.componentID);

  const propsOfTaskListApp_Login_LoginForm = {
    onLoginSuccess: props.onLoginSuccess,
    onLoginFailure: props.onLoginFailure,
    componentID: getNewComponentID("TaskListApp_Login_LoginForm"),
  };

  return (
    <div>
      <TaskListApp_Login_LoginForm {...propsOfTaskListApp_Login_LoginForm} />
    </div>
  );
}
