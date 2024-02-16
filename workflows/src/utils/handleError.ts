import { Response } from "express";

export default function handleError(res: Response, error: Error) {
    
    console.log(error);

    res.status(404).json({
        error_code: 999999,
        error_message: "Unknown Error",
    });
    
}
