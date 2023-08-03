import { Request, Response, NextFunction } from "express";

import { CustomError } from "@apptypes/error.type";
import { fail } from "@helpers/response.helper";

export default function errMiddleware(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log(error);

    if (error instanceof CustomError) {
      throw error;
    }

    throw new CustomError({
      statusCode: 500,
      errorCode: "ServerInternal",
      detail: "some error occured"
    });
  } catch (error: any) {
    return fail(res, error);
  }
}
