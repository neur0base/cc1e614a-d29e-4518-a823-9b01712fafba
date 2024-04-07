import React from 'react';
import { View, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import { useUIContext, ComponentID } from '@neur0base/app-sdk-core';
import { Button } from '@neur0base/app-sdk-ui';

export declare type ViewTemplateComponentProps = {
  onEditClick: () => void;
  onDeleteClick: () => void;
  componentID: ComponentID;
};

export declare type ViewTemplateComponentLabels = {
  editButtonLabel: string; // default: "Edit"
  deleteButtonLabel: string; // default: "Delete"
};

export declare type ViewTemplateComponentThemeColors = {
  editButtonColor: string;
  deleteButtonColor: string;
};

export default function ViewTemplateComponent(props: ViewTemplateComponentProps): JSX.Element {
  const { getUILabel, getThemeColor, getNewComponentID } = useUIContext<ViewTemplateComponentLabels, ViewTemplateComponentThemeColors>(props?.componentID);

  const styles = StyleSheet.create({
    container: {
      ...tailwind('flex flex-row justify-center mt-4'),
    },
    button: {
      ...tailwind('px-6 py-2 rounded-md mx-2'),
      width: 120,
      height: 40,
    },
    editButton: {
      backgroundColor: getThemeColor('editButtonColor', 'primaryColor'),
    },
    deleteButton: {
      backgroundColor: getThemeColor('deleteButtonColor', 'errorColor'),
    },
  });

  return (
    <View style={styles.container}>
      <Button 
        styleName="primary"
        onClick={props?.onEditClick}
        componentID={getNewComponentID('EditButton')}
        color={getThemeColor('editButtonColor', 'primaryColor')}
        style={[styles.button, styles.editButton]}
      >
        {getUILabel('editButtonLabel', 'Edit')}
      </Button>
      <Button
        styleName="error"
        onClick={props?.onDeleteClick}
        componentID={getNewComponentID('DeleteButton')}
        color={getThemeColor('deleteButtonColor', 'errorColor')}
        style={[styles.button, styles.deleteButton]}
      >
        {getUILabel('deleteButtonLabel', 'Delete')}
      </Button>
    </View>
  );
}
