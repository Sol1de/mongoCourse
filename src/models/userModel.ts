import { addModelToTypegoose } from "@typegoose/typegoose";
import mongoose from "mongoose";
import { userSchema } from "#schemas/userSchema";
import { User } from "#interfaces/userInterface";

export const UserModel = addModelToTypegoose(mongoose.model("User", userSchema), User); 