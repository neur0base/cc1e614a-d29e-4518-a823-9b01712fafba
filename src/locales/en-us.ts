import { LocaleConfig } from "./types";

const locale: LocaleConfig = {
    "isPrimary": false,
    "labels": {
        "common": {},
        "error": {},
        "succeed": {},
        "components": {
            "TaskListApp_Home_NavigationButtonLabels": {
                "NavigationButtonLabel": "タスク一覧へ"
            },
            "TaskListApp_Login_LoginFormLabels": {
                "LoginFormTitle": "Login",
                "UsernameLabel": "Username",
                "PasswordLabel": "Password",
                "LoginButtonLabel": "Login",
                "RequiredFieldError": "This field is required"
            },
            "TaskListApp_TaskAdd_TaskFormLabels": {
                "FormTitle": "Add New Task",
                "TitleLabel": "Title",
                "DescriptionLabel": "Description",
                "DueDateLabel": "Due Date",
                "SubmitButtonLabel": "Add"
            },
            "TaskListApp_TaskDetail_TaskDetailViewLabels": {
                "TaskStatusNew": "New",
                "TaskStatusInProgress": "In Progress",
                "TaskStatusCompleted": "Completed"
            },
            "TaskListApp_TaskList_TaskListLabels": {
                "TaskStatusNew": "New",
                "TaskStatusInProgress": "In Progress",
                "TaskStatusCompleted": "Completed",
                "SearchBoxPlaceholder": "Search tasks...",
                "EditButtonLabel": "Edit",
                "DetailsButtonLabel": "Details"
            },
            "TaskListApp_TaskList_TaskSearchBarLabels": {
                "KeywordsPlaceholder": "Search tasks by title or status"
            }
        }
    },
    "type": "Translate"
};

export default locale;

