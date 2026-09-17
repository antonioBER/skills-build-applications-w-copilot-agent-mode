import mongoose, { Schema } from 'mongoose';

export interface WorkoutDocument extends mongoose.Document {
  name: string;
  focus: 'strength' | 'cardio' | 'mobility' | 'recovery';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  durationMinutes: number;
  exercises: string[];
}

const workoutSchema = new Schema<WorkoutDocument>(
  {
    name: { type: String, required: true, trim: true },
    focus: { type: String, enum: ['strength', 'cardio', 'mobility', 'recovery'], required: true },
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    exercises: { type: [String], required: true },
  },
  { timestamps: true },
);

export const Workout = mongoose.models.Workout || mongoose.model<WorkoutDocument>('Workout', workoutSchema);