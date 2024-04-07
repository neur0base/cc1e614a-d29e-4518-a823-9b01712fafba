import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import moment from 'moment';
import { useUIContext, ComponentID } from '@neur0base/app-sdk-core';

export declare type ViewTemplateComponentProps = {
  recordID: string;
  componentID: ComponentID;
};

export declare type ViewTemplateComponentLabels = {
  taskDetailTitle: string; // default: "Task Details"
  taskNameLabel: string; // default: "Task Name"
  taskDescriptionLabel: string; // default: "Description"
  taskStatusLabel: string; // default: "Status"  
  taskCreatedAtLabel: string; // default: "Created At"
  taskUpdatedAtLabel: string; // default: "Updated At"
};

export declare type ViewTemplateComponentThemeColors = {
  taskDetailBackgroundColor: string;
  taskDetailTextColor: string;
  taskDetailLabelColor: string;
};

export default function ViewTemplateComponent(props: ViewTemplateComponentProps): JSX.Element {
  const { getUILabel, getThemeColor } = useUIContext<ViewTemplateComponentLabels, ViewTemplateComponentThemeColors>(props?.componentID);

  // Dummy data for demonstration purposes. Replace with actual data fetched based on recordID.
  const taskData = {
    name: 'Sample Task',
    description: 'This is a sample task description.',
    status: 'In Progress',
    createdAt: moment().subtract(2, 'days').toDate(),
    updatedAt: moment().subtract(1, 'hour').toDate(),
  };

  const styles = StyleSheet.create({
    container: {
      ...tailwind('p-4'),
      backgroundColor: getThemeColor('taskDetailBackgroundColor', 'backgroundColor'),
    },
    title: {
      ...tailwind('text-lg font-bold mb-4'),
      color: getThemeColor('taskDetailTextColor', 'textColor'),
    },
    row: {
      ...tailwind('mb-2'),
    },
    label: {
      ...tailwind('font-semibold'),
      color: getThemeColor('taskDetailLabelColor', 'textColor'),
    },
    value: {
      color: getThemeColor('taskDetailTextColor', 'textColor'),
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{getUILabel('taskDetailTitle', 'Task Details')}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>{getUILabel('taskNameLabel', 'Task Name')}: </Text>
        <Text style={styles.value}>{taskData.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>{getUILabel('taskDescriptionLabel', 'Description')}: </Text>
        <Text style={styles.value}>{taskData.description}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>{getUILabel('taskStatusLabel', 'Status')}: </Text>
        <Text style={styles.value}>{taskData.status}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>{getUILabel('taskCreatedAtLabel', 'Created At')}: </Text>
        <Text style={styles.value}>{moment(taskData.createdAt).format('YYYY-MM-DD HH:mm')}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>{getUILabel('taskUpdatedAtLabel', 'Updated At')}: </Text>
        <Text style={styles.value}>{moment(taskData.updatedAt).format('YYYY-MM-DD HH:mm')}</Text>
      </View>
    </View>
  );
}
