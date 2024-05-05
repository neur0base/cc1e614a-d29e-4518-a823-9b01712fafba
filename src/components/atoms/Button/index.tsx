import React from 'react';
import {View, Button as NativeButton, StyleSheet, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-rn';
import {useUIContext} from '@neur0base/app-sdk-core';
import { ButtonProps } from '@neur0base/app-sdk-ui';

const styles = StyleSheet.create({
  wrapper: tailwind('rounded'),
});

export default function Button(props: ButtonProps): JSX.Element {
  const {children, onClick, styleName, componentID, disabled} = props;
  let {color} = props;

  const {getThemeColor, getTestID} = useUIContext<never, never>(componentID);

  switch (styleName) {
    case 'primary':
      if (!color) color = getThemeColor('primaryColor');
      break;
    case 'secondary':
      if (!color) color = getThemeColor('secondaryColor');
      break;
    case 'link':
      if (!color) color = getThemeColor('linkColor');
      break;
    case 'success':
      if (!color) color = getThemeColor('successColor');
      break;
    case 'error':
      if (!color) color = getThemeColor('errorColor');
      break;
    case 'warning':
      if (!color) color = getThemeColor('warningColor');
      break;
  }

  if (disabled) {
    color = getThemeColor('disabledColor');
  }

  if (typeof children === 'string') {
    return (
      <View style={styles.wrapper}>
        <NativeButton
          onPress={onClick}
          title={children}
          color={color}
          disabled={disabled}
          testID={getTestID('Button')}
        />
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={onClick}
        style={styles.wrapper}
        testID={getTestID('Button')}
        >
          {children}
        </TouchableOpacity>
    );
  }
}