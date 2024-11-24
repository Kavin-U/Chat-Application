import express from 'express';
import User from '../Controllers/User.controller.js';

const router = express.Router();

router.get('/createuser',User);

export default router;