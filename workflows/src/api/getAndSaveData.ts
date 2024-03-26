import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/index.js";

export default async function getAndSaveData(req: Request, res: Response, next: NextFunction) {

    const ECHO = res?.locals?.echo;
    const text = req?.body?.text as string;

    try {

        const unixTimestamp = String(Math.floor(new Date().getTime() / 1000));

        const newRecord = new ECHO.Databases.RecordObject("test");
        newRecord.put("title", text);
        newRecord.put("refid", unixTimestamp);
        
        await newRecord.push();

        res.json({
            id: unixTimestamp,
        });
        
    } catch (error: unknown) {

        handleError(res, error as Error);

    }
    
}