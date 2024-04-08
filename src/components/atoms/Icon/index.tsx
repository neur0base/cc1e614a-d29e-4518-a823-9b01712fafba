import NativeIcon from 'react-native-vector-icons/dist/FontAwesome';
import { View } from 'react-native';
import React from 'react';
import { IconProps } from '@neur0base/app-sdk-ui';

export default function Icon(props: IconProps): JSX.Element {
  const { name, size, color } = props;
  const iconName = (name || '').split('_', 2)?.[1] || '';
  const sizes = { large: 26, normal: 19, small: 12 };
  console.log('iconName: ', iconName);
  return (
    <View>
      <NativeIcon name={iconName} size={sizes[size]} color={color} />
    </View>
  );
}
