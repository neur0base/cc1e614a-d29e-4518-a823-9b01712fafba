import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import { Text, Button, SearchBox } from '@neur0base/app-sdk-ui';
import { ColorCode, ComponentID, useUIContext, Label } from '@neur0base/app-sdk-core';
import moment, { Moment } from 'moment';

export declare type ViewTemplateComponentProps = {
  tasks: Array<{
    id: string;
    title: string;
    description: string;
    dueDate: Moment;
    status: 'New' | 'InProgress' | 'Completed';
  }>;
  onTaskClick: (taskId: string) => void;
  onTaskEditClick: (taskId: string) => void;
  onSearchBoxSubmit: () => void;
  onSearchBoxBlur: () => void;
  onSearchBoxFocus: () => void;
  onSearchBoxKeywordsChange: (keywords: string) => void;
  searchBoxKeywords: string;
  limit: number;
  page: number;
  order: 'dueDate' | 'createdAt';
  componentID: ComponentID;
};

export declare type ViewTemplateComponentLabels = {
  TaskStatusNew: Label; // default: "New"
  TaskStatusInProgress: Label; // default: "In Progress"
  TaskStatusCompleted: Label; // default: "Completed"
  SearchBoxPlaceholder: Label; // default: "Search tasks..."
  EditButtonLabel: Label; // default: "Edit"
  DetailsButtonLabel: Label; // default: "Details"
};

export declare type ViewTemplateComponentThemeColors = {
  taskListBackgroundColor: ColorCode; // default: "#FFFFFF"
  taskItemBackgroundColor: ColorCode; // default: "#F0F0F0"
  taskItemBorderColor: ColorCode; // default: "#E0E0E0"
  taskTitleTextColor: ColorCode; // default: "#000000"
  taskDescriptionTextColor: ColorCode; // default: "#666666"
  taskDueDateTextColor: ColorCode; // default: "#888888"
  taskStatusTextColor: ColorCode; // default: "#000000"
};

export default function ViewTemplateComponent(props: ViewTemplateComponentProps): JSX.Element {
  const { getThemeColor, getUILabel, getNewComponentID } = useUIContext<ViewTemplateComponentLabels, ViewTemplateComponentThemeColors>(props.componentID);

  const styles = StyleSheet.create({
    container: {
      ...tailwind('flex-1 bg-white'),
      backgroundColor: getThemeColor('taskListBackgroundColor', 'backgroundColor'),
    },
    searchBoxContainer: tailwind('p-4'),
    taskList: tailwind('flex-1'),
    taskItem: {
      ...tailwind('p-4 border-b'),
      backgroundColor: getThemeColor('taskItemBackgroundColor', 'backgroundColor'),
      borderBottomColor: getThemeColor('taskItemBorderColor', 'primaryColor'),
    },
    taskHeader: tailwind('flex-row justify-between mb-2'),
    taskTitle: {
      ...tailwind('text-lg font-bold'),
      color: getThemeColor('taskTitleTextColor', 'textColor'),
    },
    taskStatus: {
      color: getThemeColor('taskStatusTextColor', 'textColor'),
    },
    taskDescription: {
      ...tailwind('mb-2'),
      color: getThemeColor('taskDescriptionTextColor', 'textColor'),
    },
    taskDueDate: {
      color: getThemeColor('taskDueDateTextColor', 'textColor'),
    },
    taskActions: tailwind('flex-row justify-end'),
    taskActionButton: tailwind('ml-2'),
  });

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
      <View style={styles.searchBoxContainer}>
        <SearchBox
          styleName="simple"
          keywords={props.searchBoxKeywords}
          onKeywordsChange={props.onSearchBoxKeywordsChange}
          onSubmit={props.onSearchBoxSubmit}
          onFocus={props.onSearchBoxFocus}
          onBlur={props.onSearchBoxBlur}
          componentID={getNewComponentID('TaskListSearchBox')}
        >
          {getUILabel('SearchBoxPlaceholder', 'Search tasks...')}
        </SearchBox>
      </View>
      <View style={styles.taskList}>
        {props.tasks.map(task => (
          <TouchableOpacity key={task.id} onPress={() => props.onTaskClick(task.id)}>
            <View style={styles.taskItem}>
              <View style={styles.taskHeader}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskStatus}>{getStatusLabel(task.status)}</Text>
              </View>
              <Text style={styles.taskDescription}>{task.description}</Text>
              <Text style={styles.taskDueDate}>Due: {moment(task.dueDate).format('YYYY-MM-DD')}</Text>
              <View style={styles.taskActions}>
                <Button 
                  styleName="link"
                  onClick={() => props.onTaskEditClick(task.id)}
                  componentID={getNewComponentID(`TaskEditButton_${task.id}`)}
                >
                  {getUILabel('EditButtonLabel', 'Edit')}
                </Button>
                <Button
                  styleName="link"
                  onClick={() => props.onTaskClick(task.id)}
                  componentID={getNewComponentID(`TaskDetailsButton_${task.id}`)}
                  style={styles.taskActionButton}
                >
                  {getUILabel('DetailsButtonLabel', 'Details')}  
                </Button>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
