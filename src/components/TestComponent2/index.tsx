import React from 'react';
import { composeViewAndStates, StateComponentProps } from '@neur0base/app-sdk-core';
import StyleInjector, { StyleInjectorReturnProps } from './styles';
import LocaleInjector, { LocaleInjectorReturnProps } from './locales';

function ViewTemplate(props: StateComponentProps & StyleInjectorReturnProps & LocaleInjectorReturnProps) {
    console.log(props);
    return (
        <p>In TestComponent2</p>
    );
}

export default ({
    attributes
}: any) => {
    return composeViewAndStates(attributes, ViewTemplate, [
        StyleInjector,
        LocaleInjector
    ]);
}