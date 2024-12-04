import express from 'express';
import createRoom from '../Controllers/createRoom.controller.js';
import findRoom from '../Controllers/FindRoom.controller.js';
import findActiveRoom from '../Controllers/Findoneroom.controller.js';
import deleteRoom from '../Controllers/DeleteRoom.controller.js';

const router = express.Router();

router.post('/create',createRoom);
router.get('/findrooms',findRoom);
router.post('/findactiveroom',findActiveRoom);
router.delete('/deleteroom/:roomId',deleteRoom);

export default router;