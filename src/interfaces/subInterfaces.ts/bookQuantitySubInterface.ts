import { modelOptions, prop, Ref } from "@typegoose/typegoose";
import { Book } from "#interfaces/bookInterface";

@modelOptions({
  schemaOptions: {
    timestamps: true,
    collection: "bookQuantities",
  },
})
export class BookQuantity {

  @prop({ type: () => [Book], ref: () => Book, default: [] })
  public books!: Ref<Book>[];

  @prop({ type: Number, required: true, min: 0 })
  public quantity!: number;
}