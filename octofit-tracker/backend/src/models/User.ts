import mongoose, { Schema } from 'mongoose';

export interface UserDocument extends mongoose.Document {
  name: string;
  email: string;
  role: 'member' | 'coach';
  team?: mongoose.Types.ObjectId;
}

const userSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    role: { type: String, enum: ['member', 'coach'], default: 'member' },
    team: { type: Schema.Types.ObjectId, ref: 'Team' },
  },
  { timestamps: true },
);

export const User = mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);