import { CustomError } from "@apptypes/error.type";
import db from "@database";
import { NextFunction, Request, Response } from "express";

export default class ClientHandler {
  // TODO: make mechanism for authorizing new clients
  static async createClient(req: Request, res: Response, next: NextFunction) {
    try {
      throw new CustomError({
        statusCode: 501,
        errorCode: "NotImlemented",
        detail: "this method not implemented"
      });
    } catch (error: any) {
      return next(error);
    }
  }
}
