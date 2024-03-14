import { AppConfig } from "@neur0base/app-sdk-core";

export const appConfig: AppConfig = {
    "name": "タスク一覧アプリ",
    "layout": {},
    "mainRouteID": "Home",
    "menuSections": [
        {
            "name": "MainMenu",
            "items": [
                {
                    "title": "ホーム画面",
                    "routeID": "Home"
                },
                {
                    "title": "タスク一覧",
                    "routeID": "TaskList"
                },
                {
                    "title": "タスク追加",
                    "routeID": "TaskAdd"
                },
                {
                    "title": "タスク詳細",
                    "routeID": "TaskDetail"
                },
                {
                    "title": "タスク編集",
                    "routeID": "TaskEdit"
                }
            ]
        },
        {
            "name": "BeforeLogin",
            "items": [
                {
                    "title": "ログイン画面",
                    "routeID": "Login"
                }
            ]
        }
    ]
};

export default appConfig;
