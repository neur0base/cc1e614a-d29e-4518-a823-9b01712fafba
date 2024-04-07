import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import tailwind from 'tailwind-rn';
import moment from 'moment';
import { useUIContext, ComponentID } from '@neur0base/app-sdk-core';

export declare type ViewTemplateComponentProps = {
  tasks: TaskListViewModel[];
  limit: number;
  page: number;
  order: string;
  onTaskClick: (taskId: string) => void;
  componentID: ComponentID;
};

export declare type ViewTemplateComponentLabels = {
  taskTitleLabel: string; // default: "Title"
  taskStatusLabel: string; // default: "Status" 
  taskCreatedAtLabel: string; // default: "Created At"
};

export declare type ViewTemplateComponentThemeColors = {
  taskListBackgroundColor: string;
  taskListHeaderBackgroundColor: string;
  taskListHeaderTextColor: string;
  taskListRowBackgroundColor: string;
  taskListRowTextColor: string;
};

export type TaskListViewModel = {
  id: string;
  title: string;
  status: string;
  createdAt: string;
};

export default function ViewTemplateComponent(props: ViewTemplateComponentProps): JSX.Element {
  const { getUILabel, getThemeColor, getNewComponentID } = useUIContext<ViewTemplateComponentLabels, ViewTemplateComponentThemeColors>(props?.componentID);

  const styles = StyleSheet.create({
    container: {
      ...tailwind('w-full'),
      backgroundColor: getThemeColor('taskListBackgroundColor', 'backgroundColor'),
    },
    tableHeader: {
      ...tailwind('flex flex-row font-bold py-2'),
      backgroundColor: getThemeColor('taskListHeaderBackgroundColor', 'secondaryColor'),
    },
    tableHeaderText: {
      ...tailwind('flex-1 text-center'),
      color: getThemeColor('taskListHeaderTextColor', 'textColor'),
    },
    tableRow: {
      ...tailwind('flex flex-row py-2 border-b border-gray-200'),
      backgroundColor: getThemeColor('taskListRowBackgroundColor', 'backgroundColor'),
    },
    tableRowText: {
      ...tailwind('flex-1 text-center'),
      color: getThemeColor('taskListRowTextColor', 'textColor'),
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>{getUILabel('taskTitleLabel', 'Title')}</Text>
        <Text style={styles.tableHeaderText}>{getUILabel('taskStatusLabel', 'Status')}</Text>
        <Text style={styles.tableHeaderText}>{getUILabel('taskCreatedAtLabel', 'Created At')}</Text>
      </View>
      {props.tasks.map((task) => (
        <TouchableOpacity key={task.id} onPress={() => props.onTaskClick(task.id)}>
          <View style={styles.tableRow}>
            <Text style={styles.tableRowText}>{task.title}</Text>
            <Text style={styles.tableRowText}>{task.status}</Text>
            <Text style={styles.tableRowText}>{moment(task.createdAt).format('YYYY-MM-DD')}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
