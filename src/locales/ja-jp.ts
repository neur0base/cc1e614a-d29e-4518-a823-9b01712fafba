import { LocaleConfig } from "@neur0base/app-sdk-core";

const locale: LocaleConfig = {
    "isPrimary": true,
    "labels": {
        "components": {
            "MyTasks_MyTasks_Header": {},
            "MyTasks_MyTasks_TaskList": {
                "taskListTitle": "タスクリスト",
                "taskStatusNotStarted": "未開始",
                "taskStatusInProgress": "進行中",
                "taskStatusCompleted": "完了"
            },
            "MyTasks_TaskDetail_TaskDetailActions": {
                "editButtonLabel": "編集",
                "deleteButtonLabel": "削除"
            },
            "MyTasks_TaskDetail_TaskDetailInfo": {
                "taskDetailTitle": "タスクの詳細",
                "taskNameLabel": "タスク名",
                "taskDescriptionLabel": "説明",
                "taskStatusLabel": "ステータス",
                "taskCreatedAtLabel": "作成日",
                "taskUpdatedAtLabel": "更新日"
            },
            "MyTasks_TaskDetail_TaskDetailTitle": {},
            "MyTasks_TaskList_TaskList": {
                "taskTitleLabel": "タイトル",
                "taskStatusLabel": "ステータス",
                "taskCreatedAtLabel": "作成日"
            },
            "MyTasks_TaskList_TaskListLimitSelector": {
                "limitSelectorLabel": "表示"
            },
            "MyTasks_TaskList_TaskSearchBox": {
                "taskSearchBoxPlaceholder": "タイトルまたは説明でタスクを検索",
                "taskSearchBoxSubmitLabel": "検索"
            },
            "MyTasks_TaskList_TaskStatusFilter": {
                "allLabel": "全て",
                "notStartedLabel": "未開始",
                "inProgressLabel": "進行中",
                "completedLabel": "完了"
            }
        },
        "common": {},
        "error": {},
        "succeed": {}
    },
    "type": "Translate"
};

export default locale;
