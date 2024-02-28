// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import {
    DynamicRouter,
} from '@neur0base/app-sdk-core';
import { initialize } from '@echopf/sdk';

import '../../web/index.css';
import '../../web/app.css';

import instances from '../../config/instances';
import themeColors from '../../config/themeColors';
import locales from '../../locales';
import * as components from './routes/index';
import * as mockModels from '../../components/mockModels';
import * as models from '../../components/models';
import { appConfig, layout, mainRouteID } from './app';
import routes from './routes';

const App = () => {

    // [ToDo] Obfuscate secureDomain & appID & appKey by env variables
    const backendClient = initialize(process.env.API_ENDPOINT, process.env.API_APP_ID, process.env.API_APP_KEY);

    return (
        <DynamicRouter
            config={appConfig}
            layout={layout}
            backend={backendClient}
            models={process.env.ENVIRONMENT === "production" ? models : mockModels}
            instances={instances}
            components={components}
            routes={routes}
            mainRouteID={mainRouteID}
            OuterProvider={(props) => {
                return (<>{props.children}</>);
            }}
            theme={{
                colors: themeColors
            }}
            locales={locales}
        />
    );
};


ReactDOM.render(<App />, document.getElementById('root'));