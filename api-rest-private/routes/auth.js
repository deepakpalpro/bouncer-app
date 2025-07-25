import express from 'express';
import { authUser, logoutUser } from '../controllers/authController.js';    


const router = express.Router();

router.post('/auth', authUser);
router.post('/logout', logoutUser);

export default router;