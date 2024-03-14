import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import tailwind from 'tailwind-rn';
import {Button, Text} from '@neur0base/app-sdk-ui';
import {ColorCode, ComponentID, useUIContext, Label} from '@neur0base/app-sdk-core';

export declare type ViewTemplateComponentProps = {
  onTaskListClick: () => void;
  componentID: ComponentID;
};

export declare type ViewTemplateComponentLabels = {
  NavigationButtonLabel: Label; // default: "タスク一覧へ"
};

export declare type ViewTemplateComponentThemeColors = {
  wrapperBackgroundColor: ColorCode; // default: "#FFFFFF"
  navigationButtonBackgroundColor: ColorCode; // default: "#007AFF"
  navigationButtonTextColor: ColorCode; // default: "#FFFFFF"
};

export default function ViewTemplateComponent(props: ViewTemplateComponentProps): JSX.Element {
  const {getThemeColor, getUILabel, getNewComponentID} = useUIContext<ViewTemplateComponentLabels, ViewTemplateComponentThemeColors>(
    props.componentID,
  );

  const styles = StyleSheet.create({
    wrapper: {
      ...tailwind('flex-1 items-center justify-center'),
      backgroundColor: getThemeColor('wrapperBackgroundColor', 'backgroundColor'),
    },
    navigationButton: {
      backgroundColor: getThemeColor('navigationButtonBackgroundColor', 'primaryColor'),
    },
    navigationButtonText: {
      color: getThemeColor('navigationButtonTextColor', 'textColor'),
    },
  });

  return (
    <View style={styles.wrapper}>
      <Button 
        styleName="primary"
        onClick={props.onTaskListClick}
        componentID={getNewComponentID('TaskListApp_Home_NavigationButton')}
        style={styles.navigationButton}
      >
        <Text style={styles.navigationButtonText}>
          {getUILabel('NavigationButtonLabel', 'タスク一覧へ')}
        </Text>
      </Button>
    </View>
  );
}
