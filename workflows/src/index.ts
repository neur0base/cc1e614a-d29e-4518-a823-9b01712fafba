import express from "express";
import { initialize } from "express-openapi";
import path from "path";
import operations from "./api/index.js";
import * as bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(3000, () => {
	console.log("Start on port 3000");
});

initialize({
	app: app,
	apiDoc: path.resolve(__dirname, "../schema.json"),
	validateApiDoc: true,
	operations: operations,
    consumesMiddleware: {
        'application/json': bodyParser.json(),
        'text/text': bodyParser.text(),
    },
});
