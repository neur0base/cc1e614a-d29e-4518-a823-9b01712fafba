import { execSync } from "child_process";
import { LogicTemplateReturns } from "../index.js";
import { v4 as uuid } from "uuid";
import fs from "fs";

export declare type LogicTemplateProps<T,U> = {
    RCode: string;
    packages: string[];
};

function isRPackageInstalled(packageName: string): boolean {
    const checkCode = `cat('${packageName}' %in% rownames(installed.packages()))`;
    const installed = execSync(`Rscript -e "${checkCode}"`).toString().includes('TRUE');
    return installed;
}

export default function RLogicTemplate<T, U>(props :LogicTemplateProps<T,U>): LogicTemplateReturns<T, U> {
    const exec = async (input: T): Promise<U> => {
        const fileId = uuid();
        const fileDir = '/tmp/jenify_script';
        const filePath = `${fileDir}/${fileId}.R`;

        try {

            const libraryImportString = props.packages.map((packageName) => {
                if (!isRPackageInstalled(packageName)) {
                    execSync(`Rscript -e "install.packages('${packageName}', repos='http://cran.ism.ac.jp/')"`);
                }
                if (!isRPackageInstalled(packageName)) {
                    throw new Error(`R package install failed: ${packageName}`);
                }
                return `library('${packageName}')\n`;
            }).join() || '';

            const RCode = `
${libraryImportString}
library('jsonlite') # Default library

inputData <- fromJSON(commandArgs(trailingOnly = TRUE))

${props.RCode}
`;

            fs.mkdirSync(fileDir, { recursive: true });
            fs.writeFileSync(filePath, RCode, 'utf-8');

            const results = execSync(`Rscript ${filePath} '${JSON.stringify(input)}'`).toString();
            const resultData = JSON.parse(results);

            return resultData as U;

        } catch (error: unknown) {
            return {} as U;
        } finally {
            if (fs.existsSync(filePath)) {
                fs.rmSync(filePath);
            }
        }
    };
    return { exec };
}
