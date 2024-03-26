import { Request, Response, NextFunction } from "express";
import pkg from '@echopf/sdk';
const { initialize } = pkg;

export default async function useECHO(req: Request, res: Response, next: NextFunction) {

    const domain = String(process.env.ECHO_APP_DOMAIN);
    const appId = String(process.env.ECHO_APP_ID);
    const appKey = String(process.env.ECHO_APP_KEY);

    const client = initialize(domain, appId, appKey, {accessToken: req?.headers?.["X-ECHO-Access-Token"] || ""});
    res.locals.echo = client;

    next();

}