import { Router } from 'express';
import { Workout } from '../models/Workout';

const router = Router();

router.get('/', async (_request, response, next) => {
  try {
    const workouts = await Workout.find().sort({ difficulty: 1, name: 1 }).lean();
    response.json(workouts);
  } catch (error) {
    next(error);
  }
});

export default router;