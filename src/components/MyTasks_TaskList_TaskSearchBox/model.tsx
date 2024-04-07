import React, { useState, useCallback } from 'react';
import { ViewTemplateComponentProps } from './view';
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
  const [searchKeywords, setSearchKeywords] = useState(keywords || '');

  const handleKeywordsChange = useCallback((newKeywords: string) => {
    setSearchKeywords(newKeywords);
  }, []);

  const handleSubmit = useCallback(() => {
    onSearch(searchKeywords);
  }, [searchKeywords, onSearch]);

  const viewProps: ViewTemplateComponentProps = {
    keywords: searchKeywords,
    onKeywordsChange: handleKeywordsChange,
    onSubmit: handleSubmit,
    componentID,
  };

  return <>{children(viewProps)}</>;
}
