import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import { useUIContext, ComponentID } from '@neur0base/app-sdk-core';

export declare type ViewTemplateComponentProps = {
  recordID: string;
  componentID: ComponentID;
};

export declare type ViewTemplateComponentLabels = Record<never, never>;

export declare type ViewTemplateComponentThemeColors = Record<never, never>;

export default function ViewTemplateComponent(props: ViewTemplateComponentProps): JSX.Element {
  const { getThemeColor, getNewComponentID } = useUIContext<ViewTemplateComponentLabels, ViewTemplateComponentThemeColors>(props?.componentID);

  // Fetch task title from database using props.recordID
  const taskTitle = 'Sample Task Title'; // Replace with actual data fetching logic

  const styles = StyleSheet.create({
    container: {
      ...tailwind('px-4 pt-6 pb-4'),
    },
    title: {
      ...tailwind('text-2xl font-bold text-center mb-4'),
      color: getThemeColor('textColor', 'textColor'),
    },
    separator: {
      ...tailwind('border-b border-gray-200'),
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{taskTitle}</Text>
      <View style={styles.separator} />
    </View>
  );
}
