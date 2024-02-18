import { PythonShell } from "python-shell";
import { LogicTemplateReturns } from "../index.js";

export declare type LogicTemplateProps<T,U> = {
    pythonCode: string;
    libraries?: string[];
};

export default function PythonLogicTemplate<T, U>(props :LogicTemplateProps<T,U>): LogicTemplateReturns<T, U> {
    const exec = async (input: T): Promise<U> => {

        // [TODO] Dockerコンテナ内で追加のPythonライブラリをインストール（pip install）

        const libraryImportString = props.libraries?.map((libraryString) => `import ${libraryString}`).join('\n') || '';


        const pythonCode = `
        import sys,json
        import pandas as pd
        ${libraryImportString}
        
        inputData = json.loads(sys.stdin.readline())
        
        ${props.pythonCode}`;


        const options = {
            args: [JSON.stringify(input)],
        };
        const stdOutStrings = await PythonShell.runString(pythonCode, options);
        const returnData: Object = JSON.parse(stdOutStrings.join(''));

        return returnData as U;

    };
    return { exec };
}