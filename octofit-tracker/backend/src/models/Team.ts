import mongoose, { Schema } from 'mongoose';

export interface TeamDocument extends mongoose.Document {
  name: string;
  description: string;
  captain: mongoose.Types.ObjectId;
}

const teamSchema = new Schema<TeamDocument>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    captain: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true },
);

export const Team = mongoose.models.Team || mongoose.model<TeamDocument>('Team', teamSchema);