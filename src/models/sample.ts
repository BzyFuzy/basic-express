import { Schema, model } from "mongoose";

interface ISampleDoc {
  name: string;
  some: string;
}

const schema = new Schema<ISampleDoc>({
  name: { type: String, required: true },
  some: { type: String },
});

const SampleDoc= model<ISampleDoc>('SampleDoc', schema);

export { SampleDoc }