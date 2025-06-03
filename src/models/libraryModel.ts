import { addModelToTypegoose } from "@typegoose/typegoose";
import mongoose from "mongoose";
import { librarySchema } from "#schemas/librarySchema";
import { Library } from "#interfaces/libraryInterface";

export const LibraryModel = addModelToTypegoose(mongoose.model("Library", librarySchema), Library);