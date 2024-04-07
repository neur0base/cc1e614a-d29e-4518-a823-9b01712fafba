import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';
import moment from 'moment';
import { useUIContext, ComponentID } from '@neur0base/app-sdk-core';

export declare type ViewTemplateComponentProps = {
  tasks: Task[];
  onTaskClick: (taskId: string) => void;
  onPageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
  componentID: ComponentID;
};

export declare type ViewTemplateComponentLabels = {
  taskListTitle: string; // default: "Task List"
  taskStatusNotStarted: string; // default: "Not Started" 
  taskStatusInProgress: string; // default: "In Progress"
  taskStatusCompleted: string; // default: "Completed"
};

export declare type ViewTemplateComponentThemeColors = {
  taskNotStartedColor: string;
  taskInProgressColor: string; 
  taskCompletedColor: string;
};

type Task = {
  id: string;
  title: string;
  status: 'notStarted' | 'inProgress' | 'completed';
  createdAt: string;
};

export default function ViewTemplateComponent(props: ViewTemplateComponentProps): JSX.Element {
  const { getUILabel, getThemeColor, getNewComponentID } = useUIContext<ViewTemplateComponentLabels, ViewTemplateComponentThemeColors>(props?.componentID);

  const styles = StyleSheet.create({
    container: {
      ...tailwind('w-full'),
    },
    title: {
      ...tailwind('text-lg font-bold mb-4'),
    },
    taskItem: {
      ...tailwind('mb-2 p-4 border border-gray-200 rounded'),
    },
    taskTitle: {
      ...tailwind('font-semibold mb-1'),
    },
    taskStatus: {
      ...tailwind('text-sm mb-1'),
    },
    taskDate: {
      ...tailwind('text-xs text-gray-500'),
    },
    pagination: {
      ...tailwind('flex flex-row justify-center mt-4'),
    },
    pageButton: {
      ...tailwind('mx-1 px-3 py-1 rounded'),
    },
    currentPage: {
      ...tailwind('font-bold'),
      backgroundColor: getThemeColor('primaryColor', 'primaryColor'),
      color: '#fff',
    },
  });

  const renderTaskStatus = (status: Task['status']) => {
    let label = '';
    let color = '';

    switch (status) {
      case 'notStarted':
        label = getUILabel('taskStatusNotStarted', 'Not Started');
        color = getThemeColor('taskNotStartedColor', 'warningColor');
        break;
      case 'inProgress':
        label = getUILabel('taskStatusInProgress', 'In Progress');
        color = getThemeColor('taskInProgressColor', 'primaryColor');
        break;
      case 'completed':
        label = getUILabel('taskStatusCompleted', 'Completed');
        color = getThemeColor('taskCompletedColor', 'successColor');
        break;
    }

    return <Text style={{...styles.taskStatus, color}}>{label}</Text>;
  };

  const renderPagination = () => {
    const pageButtons = [];

    for (let i = 1; i <= props.totalPages; i++) {
      pageButtons.push(
        <TouchableOpacity
          key={i}
          style={{...styles.pageButton, ...(i === props.currentPage && styles.currentPage)}}
          onPress={() => props.onPageChange(i)}
        >
          <Text>{i}</Text>
        </TouchableOpacity>
      );
    }

    return <View style={styles.pagination}>{pageButtons}</View>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{getUILabel('taskListTitle', 'Task List')}</Text>
      {props.tasks.map((task) => (
        <TouchableOpacity
          key={task.id}
          style={styles.taskItem}
          onPress={() => props.onTaskClick(task.id)}
        >
          <Text style={styles.taskTitle}>{task.title}</Text>
          {renderTaskStatus(task.status)}
          <Text style={styles.taskDate}>{moment(task.createdAt).format('YYYY-MM-DD')}</Text>
        </TouchableOpacity>
      ))}
      {renderPagination()}
    </View>
  );
}
