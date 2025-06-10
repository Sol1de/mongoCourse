import { Schema } from "mongoose";
import { BookRequest } from "#interfaces/subInterfaces.ts/bookRequestSubInterface";
import { buildSchema } from "@typegoose/typegoose";

export const bookRequestSchema = buildSchema(BookRequest); 