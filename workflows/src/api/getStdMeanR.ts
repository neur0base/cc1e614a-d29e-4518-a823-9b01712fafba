import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/index.js";
import RExampleLogic, { LogicInputProps, LogicOutput } from "../../logics/RExampleLogic/index.js";

export default async function getStdMeanR(req: Request, res: Response, next: NextFunction) {

    const dataArray = req?.body?.dataArray as number[] || [];
    
    try {

        const inputData: LogicInputProps = {
            dataArray: dataArray,
        };
        const result: LogicOutput = await RExampleLogic(inputData);

        res.json(result);

    } catch (error: unknown) {

        handleError(res, error as Error);
        
    }
}