import express from 'express';
import { createTeam, joinTeam } from '../controllers/team.controller.js';
import { protectedRoute } from '../middlewares/protectedRoute.js';

const router = express.Router();

router.post('/', protectedRoute, createTeam);
router.post('/:id/join', protectedRoute, joinTeam);

export default router;
