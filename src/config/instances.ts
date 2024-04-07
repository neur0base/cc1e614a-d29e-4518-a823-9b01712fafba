import { DataInstanceConfig } from "@neur0base/app-sdk-core";

const instances: DataInstanceConfig[] = [
    {
        "id": "tasks",
        "type": "Database",
        "name": "タスク",
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
                    "id": "status",
                    "name": "Status",
                    "description": "タスクのステータス",
                    "dataType": "string",
                    "inputType": "select",
                    "notNull": true,
                    "isArray": false,
                    "validation": {
                        "maxLength": 50,
                        "minLength": 1
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
    }
];

export default instances;
