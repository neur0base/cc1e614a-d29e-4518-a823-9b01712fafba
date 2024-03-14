import React from 'react';
import {View, StyleSheet} from 'react-native';
import tailwind from 'tailwind-rn';
import {Form, Button, Text} from '@neur0base/app-sdk-ui';
import {ColorCode, ComponentID, useUIContext, Label} from '@neur0base/app-sdk-core';

export declare type ViewTemplateComponentProps = {
  onLogin: (username: string, password: string) => void;
  componentID: ComponentID;
};

export declare type ViewTemplateComponentLabels = {
  LoginFormTitle: Label; // default: "Login"
  UsernameLabel: Label; // default: "Username"
  PasswordLabel: Label; // default: "Password" 
  LoginButtonLabel: Label; // default: "Login"
  RequiredFieldError: Label; // default: "This field is required"
};

export declare type ViewTemplateComponentThemeColors = {
  formBackgroundColor: ColorCode; // default: "#FFFFFF"
  formTextColor: ColorCode; // default: "#000000"
  buttonBackgroundColor: ColorCode; // default: "#007AFF" 
  buttonTextColor: ColorCode; // default: "#FFFFFF"
  errorTextColor: ColorCode; // default: "#FF0000"
};

export default function ViewTemplateComponent(props: ViewTemplateComponentProps): JSX.Element {
  const {getThemeColor, getUILabel, getNewComponentID} = useUIContext<ViewTemplateComponentLabels, ViewTemplateComponentThemeColors>(
    props.componentID,
  );

  const styles = StyleSheet.create({
    container: {
      ...tailwind('flex-1 justify-center items-center p-4'),
      backgroundColor: getThemeColor('formBackgroundColor', 'backgroundColor'),
    },
    title: {
      color: getThemeColor('formTextColor', 'textColor'),
      ...tailwind('text-2xl font-bold mb-4'),
    },
    form: tailwind('w-full'),
    button: {
      backgroundColor: getThemeColor('buttonBackgroundColor', 'primaryColor'),
    },
    buttonText: {
      color: getThemeColor('buttonTextColor', 'textColor'),
    },
    errorText: {
      color: getThemeColor('errorTextColor', 'errorColor'),
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{getUILabel('LoginFormTitle', 'Login')}</Text>
      <Form<{username: string; password: string}, 'username' | 'password'>
        fields={{
          username: {
            type: 'text',
            label: getUILabel('UsernameLabel', 'Username'),
            required: true,
          },
          password: {
            type: 'password',
            label: getUILabel('PasswordLabel', 'Password'),
            required: true,
          },
        }}
        onSubmit={({username, password}) => {
          props.onLogin(username, password);
        }}
        componentID={getNewComponentID('LoginForm')}
      >
        {(formElements, handleSubmit) => (
          <>
            {formElements.username}
            {formElements.password}
            <Button styleName="primary" onClick={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>{getUILabel('LoginButtonLabel', 'Login')}</Text>
            </Button>
          </>
        )}
      </Form>
    </View>
  );
}
