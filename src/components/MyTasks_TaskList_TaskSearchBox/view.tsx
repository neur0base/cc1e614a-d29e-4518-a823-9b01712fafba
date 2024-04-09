import React from 'react';
import { View, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import { useUIContext, ComponentID } from '@neur0base/app-sdk-core';
import { SearchBox } from '@neur0base/app-sdk-ui';

export declare type ViewTemplateComponentProps = {
  keywords?: string;
  onKeywordsChange: (keywords: string) => void;
  onSubmit: () => void;
  componentID: ComponentID;
};

export declare type ViewTemplateComponentLabels = {
  taskSearchBoxPlaceholder: string; // default: "Search tasks by title or description"
  taskSearchBoxSubmitLabel: string; // default: "Search"
};

export declare type ViewTemplateComponentThemeColors = Record<never, never>;

export default function ViewTemplateComponent(
  props: ViewTemplateComponentProps,
): JSX.Element {
  const { getUILabel, getNewComponentID } = useUIContext<
    ViewTemplateComponentLabels,
    ViewTemplateComponentThemeColors
  >(props?.componentID);

  const styles = StyleSheet.create({
    container: {
      ...tailwind('w-full'),
    },
  });

  return (
    <View style={styles.container}>
      <SearchBox
        styleName="simple"
        keywords={props?.keywords ?? ''}
        onKeywordsChange={props?.onKeywordsChange}
        onSubmit={props?.onSubmit}
        onFocus={() => {}}
        onBlur={() => {}}
        componentID={getNewComponentID('TaskSearchBox')}
        // placeholder={getUILabel('taskSearchBoxPlaceholder', 'Search tasks by title or description')}
        // submitLabel={getUILabel('taskSearchBoxSubmitLabel', 'Search')}
      />
    </View>
  );
}
