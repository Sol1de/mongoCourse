import { modelOptions, prop, Ref } from "@typegoose/typegoose";
import { Book } from "#interfaces/bookInterface";
import { Library } from "#interfaces/libraryInterface";
import { BookRequestStatus } from "#enums/bookRequestEnum";

@modelOptions({
  schemaOptions: {
    timestamps: true,
    collection: "bookRequests",
  },
})
export class BookRequest {
  @prop({ ref: () => Book, required: true })
  public book!: Ref<Book>;

  @prop({ ref: () => Library, required: true })
  public library!: Ref<Library>;

  @prop({ type: () => [String], enum: BookRequestStatus, default: BookRequestStatus.PENDING })
  public status!: BookRequestStatus;

  @prop({ type: () => [Date], default: Date.now })
  public requestDate!: Date;
} 