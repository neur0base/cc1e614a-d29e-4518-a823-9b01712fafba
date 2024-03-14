import React from 'react';
import { View, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import { SearchBox } from '@neur0base/app-sdk-ui'; 
import { ColorCode, ComponentID, useUIContext, Label } from '@neur0base/app-sdk-core';

export declare type ViewTemplateComponentProps = {
  keywords?: string;
  onKeywordsChange: (keywords: string) => void;
  onSearchSubmit: () => void;
  onSearchBoxFocus: () => void;
  onSearchBoxBlur: () => void;
  componentID: ComponentID;
};

export declare type ViewTemplateComponentLabels = {
  KeywordsPlaceholder: Label; // default: "Search tasks by title or status"
};

export declare type ViewTemplateComponentThemeColors = {
  searchBarBackgroundColor: ColorCode; // default: "#FFFFFF" 
  searchBarBorderColor: ColorCode; // default: "#E0E0E0"
  searchBarTextColor: ColorCode; // default: "#000000"
};

export default function ViewTemplateComponent(props: ViewTemplateComponentProps): JSX.Element {
  const { getThemeColor, getUILabel, getNewComponentID } = useUIContext<ViewTemplateComponentLabels, ViewTemplateComponentThemeColors>(
    props?.componentID,
  );

  const styles = StyleSheet.create({
    searchBarContainer: {
      ...tailwind('px-4 py-2'),
      backgroundColor: getThemeColor('searchBarBackgroundColor', 'backgroundColor'),
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor('searchBarBorderColor', 'inputColor'),
    },
  });

  return (
    <View style={styles.searchBarContainer}>
      <SearchBox
        styleName="simple"
        keywords={props?.keywords ?? ''}
        onKeywordsChange={props.onKeywordsChange}
        onSubmit={props.onSearchSubmit}
        onFocus={props.onSearchBoxFocus}
        onBlur={props.onSearchBoxBlur}
        componentID={getNewComponentID('TaskListApp_TaskList_TaskSearchBar')}
      >
        {getUILabel('KeywordsPlaceholder', 'Search tasks by title or status')}
      </SearchBox>
    </View>
  );
}
