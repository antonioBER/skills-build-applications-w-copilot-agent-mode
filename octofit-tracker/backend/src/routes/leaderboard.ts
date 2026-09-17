import { Router } from 'express';
import { Leaderboard } from '../models/Leaderboard';

const router = Router();

router.get('/', async (_request, response, next) => {
  try {
    const leaderboard = await Leaderboard.find().sort({ rank: 1 }).populate('user', 'name').populate('team', 'name').lean();
    response.json(leaderboard);
  } catch (error) {
    next(error);
  }
});

export default router;