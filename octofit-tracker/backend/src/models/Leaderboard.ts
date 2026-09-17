import mongoose, { Schema } from 'mongoose';

export interface LeaderboardDocument extends mongoose.Document {
  user: mongoose.Types.ObjectId;
  team: mongoose.Types.ObjectId;
  points: number;
  rank: number;
}

const leaderboardSchema = new Schema<LeaderboardDocument>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    points: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
  },
  { timestamps: true },
);

export const Leaderboard = mongoose.models.Leaderboard || mongoose.model<LeaderboardDocument>('Leaderboard', leaderboardSchema);