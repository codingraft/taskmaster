import express from 'express';
import { getMe, login, logout, signup } from '../controllers/auth.controller.js';
import { protectedRoute } from '../middlewares/protectedRoute.js';
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', protectedRoute, getMe);
router.post('/logout', logout);

export default router;