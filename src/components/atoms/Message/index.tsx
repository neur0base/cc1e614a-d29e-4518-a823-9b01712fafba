import React from 'react';
import {View, StyleSheet} from 'react-native';
import tailwind from 'tailwind-rn';
import { MessageProps, Text } from '@neur0base/app-sdk-ui';

const styles = StyleSheet.create({
  wrapper: tailwind('rounded'),
});

export default function Message(props: MessageProps): JSX.Element {
  const {children, styleName, componentID} = props;

  return (
    <View style={styles.wrapper}>
      <Text styleName={styleName} componentID={componentID}>{children}</Text>
    </View>
  );
}