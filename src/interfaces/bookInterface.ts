import { modelOptions, prop } from "@typegoose/typegoose";
import { BookType } from "#enums/bookEnum";

@modelOptions({
    schemaOptions: {
        timestamps: true,
        collection: "books",
    },
})
export class Book {
    @prop({ required: true })
    public title!: string;
  
    @prop({ required: true })
    public author!: string;

    @prop()
    public edition?: string;

    @prop({ enum: BookType, required: true })
    public type!: BookType;

    @prop()
    public lang?: string;

    @prop()
    public summary?: string;

    @prop({ required: true })
    public isbn!: string;

    @prop()
    public parutionDate?: Date;
}