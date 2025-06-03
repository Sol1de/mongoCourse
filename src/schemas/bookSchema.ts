import { Schema } from "mongoose";
import { Book } from "#interfaces/bookInterface";
import { buildSchema } from "@typegoose/typegoose";

export const bookSchema = buildSchema(Book);