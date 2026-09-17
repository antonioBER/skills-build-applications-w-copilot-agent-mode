import { Router } from 'express';
import { Team } from '../models/Team';

const router = Router();

router.get('/', async (_request, response, next) => {
  try {
    const teams = await Team.find().populate('captain', 'name email').lean();
    response.json(teams);
  } catch (error) {
    next(error);
  }
});

export default router;