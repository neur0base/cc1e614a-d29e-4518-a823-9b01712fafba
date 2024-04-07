import { AppConfig } from "@neur0base/app-sdk-core";

export const appConfig: AppConfig = {
    "name": "MyTasks",
    "layout": {},
    "mainRouteID": "MyTasks",
    "menuSections": [
        {
            "name": "Main Menu",
            "items": [
                {
                    "title": "MyTasks",
                    "routeID": "MyTasks"
                },
                {
                    "title": "タスク一覧",
                    "routeID": "TaskList"
                }
            ]
        }
    ],
    "header": {}
};

export default appConfig;
