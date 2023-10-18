import React from 'react';
import { ExpandedStateComponentProps } from '@neur0base/app-sdk-core';

export declare type StyleInjectorReturnProps = {
    labels: {
        test: string;
        test2: string;
    };
};

export default function StyleInjector(props: ExpandedStateComponentProps<StyleInjectorReturnProps>): JSX.Element {
    const { children, ...restProps } = props;
    
    console.log("StyleInjector", props, children, restProps);

    return children({
        ...restProps,
        labels: {
            "test": "test",
            "test2": "test2"
        }
    });
}