import React from 'react';
import {Text as NativeText} from 'react-native';
import {useUIContext} from '@neur0base/app-sdk-core';
import { TextProps } from '@neur0base/app-sdk-ui';

export default function Text(props: TextProps): JSX.Element {
  const {children, styleName, componentID} = props;
  let {color} = props;

  const {getThemeColor, getTestID} = useUIContext<never, never>(componentID ?? ['Text']);

  switch (styleName) {
    case 'primary':
      if (!color) color = getThemeColor('primaryColor');
      break;
    case 'secondary':
      if (!color) color = getThemeColor('secondaryColor');
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
    default:
      if (!color) color = getThemeColor('textColor');
      break;
  }

  return (
    <NativeText style={{color}} testID={getTestID('Text')}>
      {children}
    </NativeText>
  );
}