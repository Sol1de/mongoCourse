import { modelOptions, prop } from "@typegoose/typegoose";
import { BookType } from "#enums/bookEnum";

@modelOptions({
    schemaOptions: {
        timestamps: true,
        collection: "books",
    },
})
export class Book {
    @prop({ type: () => [String], required: true })
    public title!: string;
  
    @prop({ type: () => [String], required: true })
    public author!: string;

    @prop({ type: () => [String] })
    public edition?: string;

    @prop({ type: () => [String], enum: BookType, required: true })
    public type!: BookType;

    @prop({ type: () => [String] })
    public lang?: string;

    @prop({ type: () => [String] })
    public summary?: string;

    @prop({ type: () => [String], required: true })
    public isbn!: string;

    @prop({ type: () => [Date] })
    public parutionDate?: Date;
}