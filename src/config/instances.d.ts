import { Moment } from 'moment';

export declare type TasksRow = {
    refid?: string;
    created?: Moment;
    modified?: Moment;
    title?: string;
    description?: string;
    contents: TasksContents;
};

export declare type TasksContents = {
    deadline: Moment;
    status: string;
};

export declare type TasksUsersRow = {
    refid?: string;
    created?: Moment;
    modified?: Moment;
    title?: string;
    description?: string;
    contents: TasksUsersContents;
};

export declare type TasksUsersContents = {
    id: number;
    task_id: TasksRow;
    user_id: UsersRow;
};

export declare type UsersRow = {
    refid?: string;
    created?: Moment;
    modified?: Moment;
    login_id?: string;
    password?: string;
    last_loggedin?: Moment;
    contents: UsersContents;
    groups?: UsersGroupRow[];
};

export declare type UsersContents = {
    refid: string;
    created: Moment;
    modified: Moment;
    login_id?: string;
    password?: string;
    last_loggedin?: Moment;
};

export declare type UsersGroupRow = {
    refid: string;
    name: string;
    description?: string;
};
