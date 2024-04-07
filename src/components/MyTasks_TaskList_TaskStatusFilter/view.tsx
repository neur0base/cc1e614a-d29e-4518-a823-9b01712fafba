import React from 'react';
import { View, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import { useUIContext, ComponentID } from '@neur0base/app-sdk-core';
import { Form } from '@neur0base/app-sdk-ui';

export declare type ViewTemplateComponentProps = {
  onFilterChange: (status: string) => void;
  componentID: ComponentID;
};

export declare type ViewTemplateComponentLabels = {
  allLabel: string; // default: "All"
  notStartedLabel: string; // default: "Not Started" 
  inProgressLabel: string; // default: "In Progress"
  completedLabel: string; // default: "Completed"
};

export declare type ViewTemplateComponentThemeColors = Record<never, never>;

export default function ViewTemplateComponent(props: ViewTemplateComponentProps): JSX.Element {
  const { getUILabel, getThemeColor, getNewComponentID } = useUIContext<ViewTemplateComponentLabels, ViewTemplateComponentThemeColors>(props?.componentID);

  const styles = StyleSheet.create({
    container: {
      ...tailwind('mb-4'),
    },
  });

  const statusOptions = [
    { label: getUILabel('allLabel', 'All'), value: 'all' },
    { label: getUILabel('notStartedLabel', 'Not Started'), value: 'notStarted' },
    { label: getUILabel('inProgressLabel', 'In Progress'), value: 'inProgress' },
    { label: getUILabel('completedLabel', 'Completed'), value: 'completed' },
  ];

  return (
    <View style={styles.container}>
      <Form
        fields={{
          status: {
            type: 'radiobuttons',
            label: '',
            options: statusOptions,
          },
        }}
        onSubmit={(values) => {
          props?.onFilterChange(values.status);
        }}
        initialValues={{ status: 'all' }}
        componentID={getNewComponentID('TaskStatusFilter')}
      >
        {(formElements, handleSubmit) => (
          <>
            {formElements.status}
            {handleSubmit()}
          </>
        )}
      </Form>
    </View>
  );
}
