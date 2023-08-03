import { CustomError } from "@apptypes/error.type";
import { Request, Response, NextFunction } from "express";

import db from "@database";

export default async function clientAuthorized(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { clientId, clientSecret } = req.query;

    if (!(clientId && clientSecret)) {
      throw new CustomError({
        statusCode: 401,
        errorCode: "UnauthorizedAccess",
        detail:
          "you try to access without client authorizing. you must have signed as client in first"
      });
    }

    const existClient = await db.client.findFirst({
      where: {
        id: clientId.toString(),
        secret: clientSecret.toString()
      }
    });

    if (!existClient) {
      throw new CustomError({
        statusCode: 401,
        errorCode: "UnauthorizedAccess",
        detail:
          "your client credentials is invalid. please check data and try againg"
      });
    }

    return next();
  } catch (error: any) {
    return next(error);
  }
}
