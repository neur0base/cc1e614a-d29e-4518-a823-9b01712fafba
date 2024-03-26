export declare type LogicTemplateReturns<T, U> = {
    exec: (input: T) => Promise<U>;
};