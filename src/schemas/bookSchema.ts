import { Schema } from "mongoose";
import { Book } from "#interfaces/bookInterface";
import { buildSchema } from "@typegoose/typegoose";

const bookSchema = buildSchema(Book);