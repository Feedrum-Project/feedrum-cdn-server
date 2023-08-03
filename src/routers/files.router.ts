import { Router } from "express";

import { FileUploader } from "@helpers/fileuploader.helper";
import FileHandler from "@handlers/files.handler";

const FilesRouter: Router = Router();

FilesRouter.all(
  "/upload",
  FileUploader.array("files", 10),
  FileHandler.uploadFile
);

export default FilesRouter;
