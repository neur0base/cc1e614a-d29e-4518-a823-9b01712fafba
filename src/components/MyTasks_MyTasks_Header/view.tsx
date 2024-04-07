


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import { useUIContext, ComponentID } from '@neur0base/app-sdk-core';
import { Button } from '@neur0base/app-sdk-ui';

export declare type MyTasksHeaderProps = {
  onAddTaskClick: () => void;
  componentID: ComponentID;
};

export declare type MyTasksHeaderLabels = {
  title: string; // default: "MyTasks"
  addTaskButton: string; // default: "+"
};

export declare type MyTasksHeaderThemeColors = {
  headerBackgroundColor: string;
  headerTextColor: string;
};

export default function MyTasksHeader(props: MyTasksHeaderProps): JSX.Element {
  const { getUILabel, getThemeColor, getNewComponentID } = useUIContext<MyTasksHeaderLabels, MyTasksHeaderThemeColors>(props?.componentID);

  const styles = StyleSheet.create({
    container: {
      ...tailwind('flex flex-row items-center justify-between px-4 py-2'),
      backgroundColor: getThemeColor('headerBackgroundColor', 'backgroundColor'),
    },
    title: {
      ...tailwind('text-lg font-bold'),
      color: getThemeColor('headerTextColor', 'textColor'),
    },
    addButton: {
      ...tailwind('rounded-full w-8 h-8 flex items-center justify-center'),
      backgroundColor: getThemeColor('primaryColor', 'primaryColor'),
    },
    addButtonText: {
      ...tailwind('text-white text-xl font-bold'),
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{getUILabel('title', 'MyTasks')}</Text>
      <Button styleName="primary" onClick={props?.onAddTaskClick} componentID={getNewComponentID('addTaskButton')}>
        <View style={styles.addButton}>
          <Text style={styles.addButtonText}>{getUILabel('addTaskButton', '+')}</Text>
        </View>
      </Button>
    </View>
  );
}


export declare type ViewTemplateComponentThemeColors = MyTasksHeaderThemeColors;


export declare type ViewTemplateComponentLabels = MyTasksHeaderLabels;


export declare type ViewTemplateComponentProps = MyTasksHeaderProps;
