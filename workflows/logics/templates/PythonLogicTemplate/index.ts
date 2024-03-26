import { execSync } from "child_process";
import { PythonShell } from "python-shell";
import { LogicTemplateReturns } from "../index.js";

export declare type LogicTemplateProps<T,U> = {
    pythonCode: string;
    libraries?: string[];
};

function isPipPackageInstalled(packageName: string): boolean {
    try {
        execSync(`pip3 show ${packageName}`);
        return true;
    } catch (error) {
        return false;
    }
}

export default function PythonLogicTemplate<T, U>(props :LogicTemplateProps<T,U>): LogicTemplateReturns<T, U> {
    const exec = async (input: T): Promise<U> => {

        const libraryImportString = props.libraries?.map((libraryName) => {
            if (!isPipPackageInstalled(libraryName)) {
                execSync(`pip3 install ${libraryName}`);
            }
            if (!isPipPackageInstalled(libraryName)) {
                throw new Error(`pip package install failed: ${libraryName}`);
            }
            
            return `import ${libraryName}`;
        }).join('\n') || '';

        const pythonCode = `
import sys,json
import pandas as pd
${libraryImportString}

inputData = json.loads(sys.argv[1])


${props.pythonCode}
`;

        const options = {
            args: [JSON.stringify(input)],
        };
        const stdOutStrings: string[] = await PythonShell.runString(pythonCode, options);

        const jsonString: string = stdOutStrings.join('').replace(/'/g, '"');
        const resultData: Object = JSON.parse(jsonString);

        return resultData as U;

    };
    return { exec };
}