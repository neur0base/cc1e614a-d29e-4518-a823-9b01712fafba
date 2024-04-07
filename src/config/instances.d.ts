import { Moment } from 'moment';

export declare type TasksRow = {
    refid?: string;
    created?: Moment;
    modified?: Moment;
    contents: TasksContents;
    title?: string;
    description?: string;
};

export declare type TasksContents = {
    status: string;
};
