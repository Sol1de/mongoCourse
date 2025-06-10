import { Schema } from "mongoose";
import { User } from "#interfaces/userInterface";
import { buildSchema } from "@typegoose/typegoose";

export const userSchema = buildSchema(User); 