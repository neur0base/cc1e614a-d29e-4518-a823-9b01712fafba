import React, { useState, useCallback } from 'react';
import { ViewTemplateComponentProps } from './view';
import { useMemberLogin, ComponentID, Error } from '@neur0base/app-sdk-core';
import { UsersRow as DataModelRow } from '@/src/config/instances.d';

export declare type ViewModelComponentProps = {
  children: (props: ViewTemplateComponentProps) => JSX.Element;
  onLoginSuccess: () => void;
  onLoginFailure: (error: Error) => void;
  componentID: ComponentID;
};

export default function ViewModelComponent({
  children,
  onLoginSuccess,
  onLoginFailure,
  componentID,
}: ViewModelComponentProps): JSX.Element {
  const [memberLoginState, memberLoginActions] = useMemberLogin<DataModelRow>({
    instanceId: "users",
  });

  const [errors, setErrors] = useState<{[fieldID: string]: Error} | undefined>(undefined);

  const handleLogin = useCallback(async (username: string, password: string) => {
    try {
      await memberLoginActions.login(username, password);
      onLoginSuccess();
    } catch (error) {
      onLoginFailure(error as Error);
      setErrors((error as Error)?.details);
    }
  }, [memberLoginActions, onLoginSuccess, onLoginFailure]);

  const viewProps: ViewTemplateComponentProps = {
    onLogin: handleLogin,
    componentID,
  };

  return children(viewProps);
}
