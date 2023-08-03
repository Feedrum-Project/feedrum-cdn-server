import { CustomError } from "@apptypes/error.type";
import { NextFunction, Request, Response } from "express";

export default function notFoundMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  throw new CustomError({
    statusCode: 404,
    errorCode: "NotFound",
    detail: "route not found. read the API documentaton for more information"
  });
}
