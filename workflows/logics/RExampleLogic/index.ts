import RLogicTemplate, { LogicTemplateProps } from "../templates/RLogicTemplate/index.js";

const RCode = `
data <- list(
    mean = mean(inputData$dataArray),
    std = sd(inputData$dataArray)
)

json_string <- toJSON(data, auto_unbox = TRUE)
cat(json_string)
`;

export declare type LogicInputProps = {
    dataArray: number[];
};
export declare type LogicOutput = {
    mean: number;
    std: number;
};

export default async function (input: LogicInputProps): Promise<LogicOutput> {

    const props: LogicTemplateProps<LogicInputProps, LogicOutput> = {
        RCode: RCode,
        packages: ['jsonlite'],
    };
    
    const { exec } = RLogicTemplate(props);
    const output: LogicOutput = await exec(input);

    return output;
}