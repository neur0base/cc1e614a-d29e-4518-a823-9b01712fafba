import React from 'react';
import { useAppContext, useUserContext } from '@neur0base/app-sdk-core';

export default ({children}) => {
    const [ { config } ] = useAppContext();
    const userContext = useUserContext();

    return (<div>
        <h1># {config?.name}</h1>
        <>{children}</>
    </div>);
};