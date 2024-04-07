import { LocaleConfig } from "@neur0base/app-sdk-core";

const locale: LocaleConfig = {
    "isPrimary": false,
    "labels": {
        "components": {
            "MyTasks_MyTasks_HeaderLabels": {},
            "MyTasks_MyTasks_TaskListLabels": {
                "taskListTitle": "Task List",
                "taskStatusNotStarted": "Not Started",
                "taskStatusInProgress": "In Progress",
                "taskStatusCompleted": "Completed"
            },
            "MyTasks_TaskDetail_TaskDetailActionsLabels": {
                "editButtonLabel": "Edit",
                "deleteButtonLabel": "Delete"
            },
            "MyTasks_TaskDetail_TaskDetailInfoLabels": {
                "taskDetailTitle": "Task Details",
                "taskNameLabel": "Task Name",
                "taskDescriptionLabel": "Description",
                "taskStatusLabel": "Status",
                "taskCreatedAtLabel": "Created At",
                "taskUpdatedAtLabel": "Updated At"
            },
            "MyTasks_TaskDetail_TaskDetailTitleLabels": {},
            "MyTasks_TaskList_TaskListLabels": {
                "taskTitleLabel": "Title",
                "taskStatusLabel": "Status",
                "taskCreatedAtLabel": "Created At"
            },
            "MyTasks_TaskList_TaskListLimitSelectorLabels": {
                "limitSelectorLabel": "Display"
            },
            "MyTasks_TaskList_TaskSearchBoxLabels": {
                "taskSearchBoxPlaceholder": "Search tasks by title or description",
                "taskSearchBoxSubmitLabel": "Search"
            },
            "MyTasks_TaskList_TaskStatusFilterLabels": {
                "allLabel": "All",
                "notStartedLabel": "Not Started",
                "inProgressLabel": "In Progress",
                "completedLabel": "Completed"
            }
        },
        "common": {},
        "error": {},
        "succeed": {}
    },
    "type": "Translate"
};

export default locale;
