import { modelOptions, prop, Ref } from "@typegoose/typegoose";
import { BookQuantity } from "#interfaces/subInterfaces.ts/bookQuantitySubInterface";
import { Book } from "./bookInterface";

@modelOptions({
  schemaOptions: {
    timestamps: true,
    collection: "libraries",
  },
})
export class Library {
  @prop({ type: () => [String], required: true })
  public name!: string;

  @prop({ type: () => [String], required: true })
  public address!: string;

  @prop({ type: () => [BookQuantity], ref: () => BookQuantity, default: [] })
  public books!: Ref<BookQuantity>[];
}