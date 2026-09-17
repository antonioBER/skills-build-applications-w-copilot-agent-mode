import mongoose, { Schema } from 'mongoose';

export interface ActivityDocument extends mongoose.Document {
  user: mongoose.Types.ObjectId;
  type: 'run' | 'ride' | 'strength' | 'yoga';
  durationMinutes: number;
  calories: number;
  completedAt: Date;
}

const activitySchema = new Schema<ActivityDocument>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['run', 'ride', 'strength', 'yoga'], required: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    calories: { type: Number, required: true, min: 0 },
    completedAt: { type: Date, required: true },
  },
  { timestamps: true },
);

export const Activity = mongoose.models.Activity || mongoose.model<ActivityDocument>('Activity', activitySchema);