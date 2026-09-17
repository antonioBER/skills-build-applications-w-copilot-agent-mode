import { Router } from 'express';
import { Activity } from '../models/Activity';

const router = Router();

router.get('/', async (_request, response, next) => {
  try {
    const activities = await Activity.find().sort({ completedAt: -1 }).populate('user', 'name email').lean();
    response.json(activities);
  } catch (error) {
    next(error);
  }
});

export default router;