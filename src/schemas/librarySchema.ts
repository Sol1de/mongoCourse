import { Schema } from "mongoose";
import { Library } from "#interfaces/libraryInterface";
import { buildSchema } from "@typegoose/typegoose";

export const librarySchema = buildSchema(Library);