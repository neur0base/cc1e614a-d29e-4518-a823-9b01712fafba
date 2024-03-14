import { RouteConfig } from "@neur0base/app-sdk-core";

const screens: RouteConfig[] = [
    {
        "id": "Home",
        "title": "ホーム画面",
        "component": {
            "component": {
                "componentID": "Home"
            }
        },
        "needLogin": false,
        "native": {
            "header": null,
            "toolbar": null
        },
        "web": {
            "url": "/",
            "header": null
        },
        "stacks": []
    },
    {
        "id": "Login",
        "title": "ログイン画面",
        "component": {
            "component": {
                "componentID": "Login"
            }
        },
        "needLogin": false,
        "native": {
            "header": null,
            "toolbar": null
        },
        "web": {
            "url": "/login",
            "header": null
        },
        "stacks": []
    },
    {
        "id": "TaskAdd",
        "title": "タスク追加",
        "component": {
            "component": {
                "componentID": "TaskAdd"
            }
        },
        "needLogin": false,
        "native": {
            "header": null,
            "toolbar": null
        },
        "web": {
            "url": "/tasks/add",
            "header": null
        },
        "stacks": []
    },
    {
        "id": "TaskDetail",
        "title": "タスク詳細",
        "component": {
            "component": {
                "componentID": "TaskDetail"
            }
        },
        "needLogin": false,
        "native": {
            "header": null,
            "toolbar": null
        },
        "web": {
            "url": "/tasks/:taskId",
            "header": null
        },
        "stacks": []
    },
    {
        "id": "TaskEdit",
        "title": "タスク編集",
        "component": {
            "component": {
                "componentID": "TaskEdit"
            }
        },
        "needLogin": false,
        "native": {
            "header": null,
            "toolbar": null
        },
        "web": {
            "url": "/tasks/edit/:taskId",
            "header": null
        },
        "stacks": []
    },
    {
        "id": "TaskList",
        "title": "タスク一覧",
        "component": {
            "component": {
                "componentID": "TaskList"
            }
        },
        "needLogin": false,
        "native": {
            "header": null,
            "toolbar": null
        },
        "web": {
            "url": "/tasks",
            "header": null
        },
        "stacks": []
    }
];

export default screens;
