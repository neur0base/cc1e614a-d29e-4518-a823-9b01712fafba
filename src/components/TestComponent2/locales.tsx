import React from 'react';
import { ExpandedStateComponentProps } from '@neur0base/app-sdk-core';

export declare type LocaleInjectorReturnProps = {
    labels: {
        test: string;
        test2: string;
    };
};

export default function LocaleInjector(props: ExpandedStateComponentProps<LocaleInjectorReturnProps>): JSX.Element {
    const { children, ...restProps } = props;
    console.log("LocaleInjector", props, children, restProps);

    return children({
        ...restProps,
        labels: {
            "test": "test",
            "test2": "test2"
        }
    });
}
