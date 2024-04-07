import React from 'react';
import { View, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import { useUIContext, ComponentID } from '@neur0base/app-sdk-core';
import { Form } from '@neur0base/app-sdk-ui';

export declare type ViewTemplateComponentProps = {
  selectedLimit: number;
  onLimitChange: (limit: number) => void;
  componentID: ComponentID;
};

export declare type ViewTemplateComponentLabels = {
  limitSelectorLabel: string; // default: "Display"
};

export declare type ViewTemplateComponentThemeColors = Record<never, never>;

export default function ViewTemplateComponent(props: ViewTemplateComponentProps): JSX.Element {
  const { getUILabel, getThemeColor, getNewComponentID } = useUIContext<ViewTemplateComponentLabels, ViewTemplateComponentThemeColors>(props?.componentID);

  const limitOptions = [
    { label: '10', value: 10 },
    { label: '50', value: 50 },
    { label: '100', value: 100 },
  ];

  const styles = StyleSheet.create({
    container: {
      ...tailwind('flex flex-row items-center'),
    },
    label: {
      ...tailwind('mr-2'),
    },
    select: {
      ...tailwind('border border-gray-300 rounded py-1 px-2'),
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.label}>
        {getUILabel('limitSelectorLabel', 'Display')}
      </View>
      <View style={styles.select}>
        <Form
          fields={{
            limit: {
              type: 'radiobuttons',
              label: '',
              options: limitOptions,
            },
          }}
          initialValues={{ limit: props.selectedLimit }}
          onSubmit={(values) => {
            props.onLimitChange(values.limit);
          }}
          componentID={getNewComponentID('TaskListLimitSelector')}
        >
          {(formElements) => (
            <>
              {formElements.limit}
            </>
          )}
        </Form>
      </View>
    </View>
  );
}
