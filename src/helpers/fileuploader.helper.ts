import { createId } from "@paralleldrive/cuid2";
import { Express, Request } from "express";
import multer, { diskStorage, FileFilterCallback } from "multer";
import path from "path";
import os from "os";

type DiskStorageCallback = (error: Error | null, _: any) => void;

export const Storage = diskStorage({
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: DiskStorageCallback
  ) => cb(null, `${createId()}${path.extname(file.originalname)}`),
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: DiskStorageCallback
  ) => cb(null, path.join(os.homedir(), "files"))
});

export const FileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (
    file.mimetype != "image/jpeg" &&
    file.mimetype != "image/png" &&
    file.mimetype != "image/gif"
  ) {
    return cb(new Error("cannot upload non image format"));
  }

  if (file.size >= 7 * 1024 * 1024) {
    return cb(new Error("cannot upload a file larger than 7 megabytes"));
  }

  return cb(null, true);
};

export const FileUploader = multer({
  storage: Storage,
  fileFilter: FileFilter,
  dest: path.join(os.homedir(), "files")
});
