import PythonLogicTemplate, { LogicTemplateProps } from "../templates/PythonLogicTemplate/index.js";

const pythonCode = `
dataArray = inputData['dataArray']

result = {
    'mean': numpy.mean(dataArray),
    'std': numpy.std(dataArray)
}
print(result)
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
        pythonCode: pythonCode,
        libraries: ['numpy', 'pyarrow'],
    };
    
    const { exec } = PythonLogicTemplate(props);
    const output: LogicOutput = await exec(input);

    return output;
}