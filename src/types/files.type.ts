import { Express } from "express";

export type RequestFiles = {
  [fieldname: string]: Files;
};

export type Files = Express.Multer.File[];
