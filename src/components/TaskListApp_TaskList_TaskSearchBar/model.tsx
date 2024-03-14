import React, { useState, useCallback } from 'react';
import { ViewTemplateComponentProps } from './view';
import { TasksRow as DataModelRow } from '@/src/config/instances.d';
import { ComponentID } from '@neur0base/app-sdk-core';

export declare type ViewModelComponentProps = {
    children: (props: ViewTemplateComponentProps) => JSX.Element;
    onSearch: (keywords: string) => void;
    keywords?: string;
    componentID: ComponentID;
};

export default function ViewModelComponent({
  children,
  onSearch,
  keywords,
  componentID,
}: ViewModelComponentProps): JSX.Element {
  const [searchKeywords, setSearchKeywords] = useState(keywords ?? '');

  const handleKeywordsChange = useCallback((newKeywords: string) => {
    setSearchKeywords(newKeywords);
  }, []);

  const handleSearchSubmit = useCallback(() => {
    onSearch(searchKeywords);
  }, [searchKeywords, onSearch]);

  const viewProps: ViewTemplateComponentProps = {
    keywords: searchKeywords,
    onKeywordsChange: handleKeywordsChange,
    onSearchSubmit: handleSearchSubmit,
    onSearchBoxFocus: () => {},
    onSearchBoxBlur: () => {},
    componentID,
  };

  return (<>{children(viewProps)}</>);
}
