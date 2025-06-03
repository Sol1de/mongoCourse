import { addModelToTypegoose } from "@typegoose/typegoose";
import mongoose from "mongoose";
import { bookQuantitySchema } from "#schemas/bookQuantitySchema";
import { BookQuantity } from "#interfaces/subInterfaces.ts/bookQuantitySubInterface";

export const BookQuantityModel = addModelToTypegoose(mongoose.model("BookQuantity", bookQuantitySchema), BookQuantity); 