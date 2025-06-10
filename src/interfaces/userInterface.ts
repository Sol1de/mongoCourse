import { modelOptions, prop, Ref } from "@typegoose/typegoose";
import { Library } from "#interfaces/libraryInterface";
import { Book } from "#interfaces/bookInterface";

@modelOptions({
  schemaOptions: {
    timestamps: true,
    collection: "users",
  },
})
export class User {
  @prop({ type: () => [String], required: true })
  public firstName!: string;

  @prop({ type: () => [String], required: true })
  public lastName!: string;

  @prop({ type: () => [String], required: true, unique: true })
  public email!: string;

  @prop({ type: () => [String], required: true })
  public password!: string;

  @prop({ type: () => [Library], ref: () => Library, default: [] })
  public visitedLibraries!: Ref<Library>[];

  @prop({
    type: () => [{
      book: { type: () => Book, ref: () => Book, required: true },
      library: { type: () => Library, ref: () => Library, required: true },
      status: { type: String, enum: ['PENDING', 'APPROVED', 'REJECTED'], default: 'PENDING' },
      requestDate: { type: Date, default: Date.now }
    }],
    _id: false,
    default: []
  })
  public bookRequests!: {
    book: Ref<Book>;
    library: Ref<Library>;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    requestDate: Date;
  }[];
}
