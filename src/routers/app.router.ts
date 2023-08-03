import { Router } from "express";
import ClientRouter from "@routers/client.router";
import FilesRouter from "@routers/files.router";

const AppRouter: Router = Router();

AppRouter.use("/clients", ClientRouter);
AppRouter.use("/files", FilesRouter);

export default AppRouter;
