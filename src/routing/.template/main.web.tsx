// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import {
    DynamicRouter,
} from '@neur0base/app-sdk-core';
import { initialize } from '@echopf/sdk';
import instances from '@/src/config/instances';
import themeColors from '@/src/config/themeColors';
import locales from '@/src/locales';
import * as models from '@/src/components/models';
import appConfig from './app';
import routes from './routes';
import * as components from './routes/index';

const App = () => {

    // [ToDo] Obfuscate secureDomain & appID & appKey by env variables
    const backendClient = initialize(process.env.API_ENDPOINT, process.env.API_APP_ID, process.env.API_APP_KEY);

    return (
        <DynamicRouter
            config={appConfig}
            backend={backendClient}
            models={models}
            instances={instances}
            components={components}
            routes={routes}
            theme={{
                colors: themeColors
            }}
            locales={locales}
            />
    );
};


ReactDOM.render(<App />, document.getElementById('root'));