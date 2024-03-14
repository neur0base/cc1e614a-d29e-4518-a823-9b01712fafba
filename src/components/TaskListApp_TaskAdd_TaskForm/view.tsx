import React from 'react';
import {View, StyleSheet} from 'react-native';
import tailwind from 'tailwind-rn';
import {Form, Button} from '@neur0base/app-sdk-ui'; 
import {ColorCode, ComponentID, useUIContext, Label} from '@neur0base/app-sdk-core';
import moment, {Moment} from 'moment';

export declare type ViewTemplateComponentProps = {
  onSubmit: (values: {title: string; description: string; dueDate: Moment}) => void;
  componentID: ComponentID;
};

export declare type ViewTemplateComponentLabels = {
  FormTitle: Label; // default: "Add New Task"
  TitleLabel: Label; // default: "Title"  
  DescriptionLabel: Label; // default: "Description"
  DueDateLabel: Label; // default: "Due Date"
  SubmitButtonLabel: Label; // default: "Add"
};

export declare type ViewTemplateComponentThemeColors = {
  formBackgroundColor: ColorCode; // default: "#FFFFFF" 
  labelColor: ColorCode; // default: "#000000"
  inputBackgroundColor: ColorCode; // default: "#FFFFFF"
  inputBorderColor: ColorCode; // default: "#CCCCCC" 
  buttonBackgroundColor: ColorCode; // default: "#007AFF"
  buttonTextColor: ColorCode; // default: "#FFFFFF"
};

export default function ViewTemplateComponent(props: ViewTemplateComponentProps): JSX.Element {
  const {getThemeColor, getUILabel, getNewComponentID} = useUIContext<ViewTemplateComponentLabels, ViewTemplateComponentThemeColors>(
    props.componentID,
  );

  const styles = StyleSheet.create({
    container: {
      ...tailwind('p-4'),
      backgroundColor: getThemeColor('formBackgroundColor', 'backgroundColor'),
    },
    title: {
      ...tailwind('text-lg font-bold mb-4'),
      color: getThemeColor('labelColor', 'textColor'),
    },
    button: tailwind('mt-4'),
  });

  return (
    <View style={styles.container}>
      <Form<{title: string; description: string; dueDate: Moment}, 'title' | 'description' | 'dueDate'>
        fields={{
          title: {
            type: 'text',
            label: getUILabel('TitleLabel', 'Title'),
            required: true,
          },
          description: {
            type: 'textarea',
            label: getUILabel('DescriptionLabel', 'Description'),
            rows: 3,
          },
          dueDate: {
            type: 'date',
            label: getUILabel('DueDateLabel', 'Due Date'),
          },
        }}
        onSubmit={props.onSubmit}
        componentID={getNewComponentID('TaskForm')}
      >
        {(fields, handleSubmit) => (
          <>
            <View style={styles.title}>{getUILabel('FormTitle', 'Add New Task')}</View>
            {fields.title}
            {fields.description}
            {fields.dueDate}
            <Button 
              styleName="primary"
              onClick={handleSubmit}
              componentID={getNewComponentID('SubmitButton')}
              style={styles.button}
            >
              {getUILabel('SubmitButtonLabel', 'Add')}
            </Button>
          </>
        )}
      </Form>
    </View>
  );
}
