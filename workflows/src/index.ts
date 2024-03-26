import express from "express";
import { initialize } from "express-openapi";
import path from "path";
import operations from "./api/index.js";
import * as bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";

import useECHO from "./middlewares/useECHO.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(3000, () => {
	console.log("Start on port 3000");
});

const operationsWithMiddlewares = Object.fromEntries(Object.keys(operations).map(
	(operationId) => [
		operationId,
		[
			useECHO,
			operations[operationId],
		]
	]
));

initialize({
	app: app,
	apiDoc: path.resolve(__dirname, "../../schema.json"),
	validateApiDoc: true,
	operations: operationsWithMiddlewares,
    consumesMiddleware: {
        'application/json': bodyParser.json(),
        'text/text': bodyParser.text(),
    },
});
