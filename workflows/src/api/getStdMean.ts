import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/index.js";
import PythonExampleLogic, { LogicInputProps, LogicOutput} from "../../logics/PythonExampleLogic/index.js";

export default async function getStdMean(req: Request, res: Response, next: NextFunction) {

    const dataArray = req?.body?.dataArray as number[] || [];

    try {

        const input: LogicInputProps = {
            dataArray: dataArray,
        };
        const output: LogicOutput = await PythonExampleLogic(input);

        res.json(output);

    } catch (error: unknown) {

        handleError(res, error as Error);

    }

}