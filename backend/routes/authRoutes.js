import express from 'express';
import { 
  login, 
  register, 
  getCurrentUser 
} from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/me', protect, getCurrentUser);

export default router;