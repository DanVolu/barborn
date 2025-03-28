import mongoose, { Schema, Document } from "mongoose";

export interface DetailLink {
  url: string;
  image?: string;
  text?: string;
  price?: number;
}

export interface ICardDescription {
  text: string;
  difficulty?: number;
  usefulness?: number;
  exercises?: string[];
}

export interface ICard extends Document {
  name: string;
  link: string;
  image: string;
  category?: string;
  description?: ICardDescription;
  detailLinks?: DetailLink[];
}

const LinkSchema: Schema = new Schema({
  url: { type: String, required: true },
  image: { type: String },
  text: { type: String },
  price: { type: Number },
});

const EquipmentDescriptionSchema: Schema = new Schema({
  text: { type: String, required: true },
  difficulty: { type: Number },
  usefulness: { type: Number },
  exercises: { type: [String] },
});

const CardSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: false },
    description: { type: EquipmentDescriptionSchema },
    detailLinks: { type: [LinkSchema] },
  },
  { timestamps: true }
);

export default mongoose.model<ICard>("Card", CardSchema);
