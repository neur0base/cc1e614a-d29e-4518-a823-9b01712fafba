import { RouteConfig } from "@neur0base/app-sdk-core";

const screens: RouteConfig[] = [
    {
        "id": "MyTasks",
        "title": "MyTasks",
        "component": {
            "component": {
                "componentID": "MyTasks"
            }
        },
        "needLogin": false,
        "native": {
            "header": {
                "centerMode": null,
                "theme": null,
                "title": "MyTasks",
                "native": null,
                "web": null
            },
            "toolbar": null
        },
        "web": {
            "url": "/",
            "header": true
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
            "header": {
                "centerMode": null,
                "theme": null,
                "title": "タスク一覧",
                "native": null,
                "web": null
            },
            "toolbar": null
        },
        "web": {
            "url": "/tasks",
            "header": true
        },
        "stacks": [
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
                    "header": {
                        "centerMode": null,
                        "theme": null,
                        "title": "タスク詳細",
                        "native": null,
                        "web": null
                    },
                    "toolbar": null
                },
                "web": {
                    "url": "/tasks/:id",
                    "header": true
                },
                "stacks": []
            }
        ]
    }
];

export default screens;
