import { CustomError } from "@apptypes/error.type";
import { RequestFiles } from "@apptypes/files.type";
import { success } from "@helpers/response.helper";
import { Express, Request, Response, NextFunction } from "express";

export default class FileHandler {
  static async uploadFile(req: Request, res: Response, next: NextFunction) {
    try {
      const files = req.files as Express.Multer.File[];

      if (!files) {
        throw new CustomError({
          statusCode: 403,
          errorCode: "BodyValidationError",
          detail: "please select multiple files to upload"
        });
      }

      const uploadedFilesResponse = files.map((file) => {
        return {
          filename: file.filename,
          path: `/uploaded/files/${file.filename}`
        };
      });

      return success(res, uploadedFilesResponse);
    } catch (error: any) {
      return next(error);
    }
  }
}
