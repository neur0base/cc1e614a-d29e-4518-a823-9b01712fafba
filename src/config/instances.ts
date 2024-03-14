import { DataInstanceConfig } from "@neur0base/app-sdk-core";

const instances: DataInstanceConfig[] = [
    {
        "id": "tasks",
        "type": "Database",
        "name": "タスク",
        "defaultDataStatus": true,
        "accessPolicy": "public",
        "schema": {
            "refid": {
                "id": "refid",
                "name": "ID",
                "description": null,
                "dataType": "string",
                "inputType": "text",
                "notNull": false,
                "isArray": false,
                "isRange": false,
                "readOnly": false,
                "validation": null,
                "options": null,
                "relation": null
            },
            "created": {
                "id": "created",
                "name": "Created",
                "description": null,
                "dataType": "datetime",
                "inputType": "datetime",
                "notNull": false,
                "isArray": false,
                "isRange": false,
                "readOnly": true,
                "validation": null,
                "options": null,
                "relation": null
            },
            "modified": {
                "id": "modified",
                "name": "Modified",
                "description": null,
                "dataType": "datetime",
                "inputType": "datetime",
                "notNull": false,
                "isArray": false,
                "isRange": false,
                "readOnly": true,
                "validation": null,
                "options": null,
                "relation": null
            },
            "contents": [
                {
                    "id": "deadline",
                    "name": "期限",
                    "description": "タスクの期限",
                    "dataType": "date",
                    "inputType": "datetime",
                    "notNull": true,
                    "isArray": false
                },
                {
                    "id": "status",
                    "name": "ステータス",
                    "description": "タスクのステータス",
                    "dataType": "string",
                    "inputType": "select",
                    "notNull": true,
                    "isArray": false,
                    "options": {}
                }
            ],
            "title": {
                "id": "title",
                "name": "Title",
                "description": null,
                "dataType": "string",
                "inputType": "text",
                "notNull": false,
                "isArray": false,
                "isRange": false,
                "readOnly": false,
                "validation": null,
                "options": null,
                "relation": null
            },
            "description": {
                "id": "description",
                "name": "Description",
                "description": null,
                "dataType": "string",
                "inputType": "text",
                "notNull": false,
                "isArray": false,
                "isRange": false,
                "readOnly": false,
                "validation": null,
                "options": null,
                "relation": null
            }
        },
        "basalACL": {}
    },
    {
        "id": "tasks_users",
        "type": "Database",
        "name": "タスクとユーザーの関係",
        "defaultDataStatus": true,
        "accessPolicy": "private",
        "schema": {
            "refid": {
                "id": "refid",
                "name": "ID",
                "description": null,
                "dataType": "string",
                "inputType": "text",
                "notNull": false,
                "isArray": false,
                "isRange": false,
                "readOnly": false,
                "validation": null,
                "options": null,
                "relation": null
            },
            "created": {
                "id": "created",
                "name": "Created",
                "description": null,
                "dataType": "datetime",
                "inputType": "datetime",
                "notNull": false,
                "isArray": false,
                "isRange": false,
                "readOnly": true,
                "validation": null,
                "options": null,
                "relation": null
            },
            "modified": {
                "id": "modified",
                "name": "Modified",
                "description": null,
                "dataType": "datetime",
                "inputType": "datetime",
                "notNull": false,
                "isArray": false,
                "isRange": false,
                "readOnly": true,
                "validation": null,
                "options": null,
                "relation": null
            },
            "contents": [
                {
                    "id": "id",
                    "name": "ID",
                    "description": "主キー",
                    "dataType": "integer",
                    "inputType": "text",
                    "notNull": true,
                    "isArray": false,
                    "isRange": false,
                    "readOnly": false,
                    "validation": {
                        "minLength": 1
                    },
                    "options": null,
                    "relation": null
                },
                {
                    "id": "task_id",
                    "name": "タスクID",
                    "description": "タスクのID",
                    "dataType": "relation",
                    "inputType": "select",
                    "notNull": true,
                    "isArray": false,
                    "isRange": false,
                    "readOnly": false,
                    "validation": null,
                    "options": null,
                    "relation": {
                        "dataInstanceID": "tasks",
                        "filter": {},
                        "query": {}
                    }
                },
                {
                    "id": "user_id",
                    "name": "ユーザーID",
                    "description": "ユーザーのID",
                    "dataType": "relation",
                    "inputType": "select",
                    "notNull": true,
                    "isArray": false,
                    "isRange": false,
                    "readOnly": false,
                    "validation": null,
                    "options": null,
                    "relation": {
                        "dataInstanceID": "users",
                        "filter": {},
                        "query": {}
                    }
                }
            ],
            "title": {
                "id": "title",
                "name": "Title",
                "description": null,
                "dataType": "string",
                "inputType": "text",
                "notNull": false,
                "isArray": false,
                "isRange": false,
                "readOnly": false,
                "validation": null,
                "options": null,
                "relation": null
            },
            "description": {
                "id": "description",
                "name": "Description",
                "description": null,
                "dataType": "string",
                "inputType": "text",
                "notNull": false,
                "isArray": false,
                "isRange": false,
                "readOnly": false,
                "validation": null,
                "options": null,
                "relation": null
            }
        },
        "basalACL": {}
    },
    {
        "id": "users",
        "type": "Member",
        "name": "ユーザー",
        "defaultDataStatus": true,
        "accessPolicy": "private",
        "schema": {
            "refid": {
                "id": "refid",
                "name": "ID",
                "description": null,
                "dataType": "string",
                "inputType": "text",
                "notNull": false,
                "isArray": false,
                "isRange": false,
                "readOnly": false,
                "validation": null,
                "options": null,
                "relation": null
            },
            "created": {
                "id": "created",
                "name": "Created",
                "description": null,
                "dataType": "datetime",
                "inputType": "datetime",
                "notNull": false,
                "isArray": false,
                "isRange": false,
                "readOnly": true,
                "validation": null,
                "options": null,
                "relation": null
            },
            "modified": {
                "id": "modified",
                "name": "Modified",
                "description": null,
                "dataType": "datetime",
                "inputType": "datetime",
                "notNull": false,
                "isArray": false,
                "isRange": false,
                "readOnly": true,
                "validation": null,
                "options": null,
                "relation": null
            },
            "contents": [
                {
                    "id": "refid",
                    "name": "ID",
                    "description": "ユニークな識別子",
                    "dataType": "string",
                    "inputType": "text",
                    "notNull": true,
                    "isArray": false
                },
                {
                    "id": "created",
                    "name": "Created",
                    "description": "作成日時",
                    "dataType": "datetime",
                    "inputType": "datetime",
                    "notNull": true,
                    "isArray": false,
                    "readOnly": true
                },
                {
                    "id": "modified",
                    "name": "Modified",
                    "description": "更新日時",
                    "dataType": "datetime",
                    "inputType": "datetime",
                    "notNull": true,
                    "isArray": false,
                    "readOnly": true
                },
                {
                    "id": "login_id",
                    "name": "Login ID",
                    "description": "メンバーのログインID",
                    "dataType": "string",
                    "inputType": "text",
                    "notNull": false,
                    "isArray": false
                },
                {
                    "id": "password",
                    "name": "Login Password",
                    "description": "メンバーのログインパスワード",
                    "dataType": "string",
                    "inputType": "password",
                    "notNull": false,
                    "isArray": false
                },
                {
                    "id": "last_loggedin",
                    "name": "Last Loggedin",
                    "description": "最終ログイン日時",
                    "dataType": "datetime",
                    "inputType": "datetime",
                    "notNull": false,
                    "isArray": false,
                    "readOnly": true
                },
                {
                    "id": "groups",
                    "name": "Groups",
                    "description": "レコードが所属するグループ",
                    "dataType": "member_group",
                    "inputType": "select",
                    "notNull": false,
                    "isArray": true
                }
            ],
            "login_id": {
                "id": "login_id",
                "name": "Login ID",
                "description": null,
                "dataType": "string",
                "inputType": "text",
                "notNull": false,
                "isArray": false,
                "isRange": false,
                "readOnly": false,
                "validation": null,
                "options": null,
                "relation": null
            },
            "password": {
                "id": "password",
                "name": "Login Password",
                "description": null,
                "dataType": "string",
                "inputType": "password",
                "notNull": false,
                "isArray": false,
                "isRange": false,
                "readOnly": false,
                "validation": null,
                "options": null,
                "relation": null
            },
            "last_loggedin": {
                "id": "last_loggedin",
                "name": "Last Loggedin",
                "description": null,
                "dataType": "datetime",
                "inputType": "datetime",
                "notNull": false,
                "isArray": false,
                "isRange": false,
                "readOnly": true,
                "validation": null,
                "options": null,
                "relation": null
            }
        },
        "basalACL": {}
    }
];

export default instances;
