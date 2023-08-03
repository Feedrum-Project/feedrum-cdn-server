import express, { Application } from "express";
import path from "path";
import os from "os";

import AppRouter from "@routers/app.router";
import clientAuthorized from "@middlewares/clientAuthorized.middleware";
import notFoundMiddleware from "@middlewares/404.middleware";
import errMiddleware from "@middlewares/error.middleware";

// for running scenarious in src/database/index.ts
import "@database";

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploaded/files", express.static(path.join(os.homedir(), "files")));
app.use(clientAuthorized, AppRouter);

app.use(notFoundMiddleware);
app.use(errMiddleware);

app.listen(3000);
