import { Schema } from "mongoose";
import { BookQuantity } from "#interfaces/subInterfaces.ts/bookQuantitySubInterface";
import { buildSchema } from "@typegoose/typegoose";

export const bookQuantitySchema = buildSchema(BookQuantity); 