import mongoose from 'mongoose';
import { Activity } from '../models/Activity';
import { Leaderboard } from '../models/Leaderboard';
import { Team } from '../models/Team';
import { User } from '../models/User';
import { Workout } from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { name: 'Maya Chen', email: 'maya.chen@example.com', role: 'coach' },
      { name: 'Jordan Brooks', email: 'jordan.brooks@example.com', role: 'member' },
      { name: 'Sam Rivera', email: 'sam.rivera@example.com', role: 'member' },
      { name: 'Taylor Morgan', email: 'taylor.morgan@example.com', role: 'member' },
    ]);

    const teams = await Team.create([
      { name: 'Summit Striders', description: 'A balanced team focused on consistent endurance.', captain: users[0]._id },
      { name: 'Iron Circuit', description: 'Strength-minded athletes chasing their next personal best.', captain: users[1]._id },
    ]);

    await User.updateOne({ _id: users[0]._id }, { team: teams[0]._id });
    await User.updateOne({ _id: users[1]._id }, { team: teams[0]._id });
    await User.updateOne({ _id: users[2]._id }, { team: teams[1]._id });
    await User.updateOne({ _id: users[3]._id }, { team: teams[1]._id });

    await Activity.create([
      { user: users[1]._id, type: 'run', durationMinutes: 42, calories: 410, completedAt: new Date('2026-09-14T07:15:00Z') },
      { user: users[2]._id, type: 'strength', durationMinutes: 50, calories: 360, completedAt: new Date('2026-09-15T17:30:00Z') },
      { user: users[3]._id, type: 'ride', durationMinutes: 65, calories: 580, completedAt: new Date('2026-09-16T06:45:00Z') },
      { user: users[0]._id, type: 'yoga', durationMinutes: 30, calories: 120, completedAt: new Date('2026-09-16T18:00:00Z') },
    ]);

    await Leaderboard.create([
      { user: users[1]._id, team: teams[0]._id, points: 1280, rank: 1 },
      { user: users[2]._id, team: teams[1]._id, points: 1165, rank: 2 },
      { user: users[3]._id, team: teams[1]._id, points: 1040, rank: 3 },
      { user: users[0]._id, team: teams[0]._id, points: 920, rank: 4 },
    ]);

    await Workout.create([
      { name: 'Foundation Strength', focus: 'strength', difficulty: 'beginner', durationMinutes: 30, exercises: ['Bodyweight squat', 'Incline push-up', 'Glute bridge'] },
      { name: 'Tempo Builder', focus: 'cardio', difficulty: 'intermediate', durationMinutes: 35, exercises: ['Warm-up jog', 'Tempo intervals', 'Cool-down walk'] },
      { name: 'Desk Reset', focus: 'mobility', difficulty: 'beginner', durationMinutes: 15, exercises: ['Cat-cow', 'World’s greatest stretch', 'Thoracic rotation'] },
    ]);

    console.log('Seed the octofit_db database with test data');
    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
