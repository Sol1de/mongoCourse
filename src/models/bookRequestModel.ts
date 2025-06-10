import { addModelToTypegoose } from "@typegoose/typegoose";
import mongoose from "mongoose";
import { bookRequestSchema } from "#schemas/bookRequestSchema";
import { BookRequest } from "#interfaces/subInterfaces.ts/bookRequestSubInterface";

export const BookRequestModel = addModelToTypegoose(mongoose.model("BookRequest", bookRequestSchema), BookRequest); 