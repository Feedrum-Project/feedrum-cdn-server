import { Response } from "express";

import { CustomError } from "@apptypes/error.type";

export function success(res: Response, data: any) {
  return res.status(200).send({ ok: true, data });
}

export function fail(res: Response, error: CustomError) {
  const errToResponse = error.toObject();

  return res
    .status(errToResponse.statusCode)
    .send({ ok: false, ...errToResponse });
}
