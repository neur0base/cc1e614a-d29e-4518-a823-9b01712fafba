import React from 'react';
import { View, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import { Text } from '@neur0base/app-sdk-ui';
import { ColorCode, ComponentID, useUIContext, Label } from '@neur0base/app-sdk-core';
import moment, { Moment } from 'moment';

export declare type ViewTemplateComponentProps = {
  task: {
    title: string;
    description: string;
    dueDate: Moment;
    status: 'New' | 'InProgress' | 'Completed';
  };
  componentID: ComponentID;
};

export declare type ViewTemplateComponentLabels = {
  TaskStatusNew: Label; // default: "New"
  TaskStatusInProgress: Label; // default: "In Progress" 
  TaskStatusCompleted: Label; // default: "Completed"
};

export declare type ViewTemplateComponentThemeColors = {
  taskDetailBackgroundColor: ColorCode; // default: "#FFFFFF"
  taskTitleTextColor: ColorCode; // default: "#000000"
  taskDescriptionTextColor: ColorCode; // default: "#333333"
  taskDueDateTextColor: ColorCode; // default: "#666666"
  taskStatusTextColor: ColorCode; // default: "#000000"
};

export default function ViewTemplateComponent(props: ViewTemplateComponentProps): JSX.Element {
  const { getThemeColor, getUILabel } = useUIContext<ViewTemplateComponentLabels, ViewTemplateComponentThemeColors>(
    props.componentID,
  );

  const styles = StyleSheet.create({
    container: {
      ...tailwind('p-4'),
      backgroundColor: getThemeColor('taskDetailBackgroundColor', 'backgroundColor'),
    },
    titleContainer: tailwind('mb-2'),
    title: {
      ...tailwind('text-xl font-bold'),
      color: getThemeColor('taskTitleTextColor', 'textColor'),
    },
    description: {
      ...tailwind('text-base mb-4'),
      color: getThemeColor('taskDescriptionTextColor', 'textColor'),
    },
    footer: tailwind('flex-row justify-between items-center'),
    dueDate: {
      color: getThemeColor('taskDueDateTextColor', 'textColor'),
    },
    status: {
      color: getThemeColor('taskStatusTextColor', 'textColor'),
    },
  });

  const { task } = props;

  const getStatusLabel = (status: 'New' | 'InProgress' | 'Completed') => {
    switch (status) {
      case 'New':
        return getUILabel('TaskStatusNew', 'New');
      case 'InProgress':
        return getUILabel('TaskStatusInProgress', 'In Progress');
      case 'Completed':
        return getUILabel('TaskStatusCompleted', 'Completed');
      default:
        return status;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{task.title}</Text>
      </View>
      <Text style={styles.description}>{task.description}</Text>
      <View style={styles.footer}>
        <Text style={styles.dueDate}>Due: {moment(task.dueDate).format('YYYY/MM/DD')}</Text>
        <Text style={styles.status}>{getStatusLabel(task.status)}</Text>
      </View>
    </View>
  );
}
