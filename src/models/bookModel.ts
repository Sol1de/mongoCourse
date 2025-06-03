import { addModelToTypegoose } from "@typegoose/typegoose";
import mongoose from "mongoose";
import { bookSchema } from "#schemas/bookSchema";
import { Book } from "#interfaces/bookInterface";

export const BookModel = addModelToTypegoose(mongoose.model("Book", bookSchema), Book);