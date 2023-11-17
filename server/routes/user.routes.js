// server/routes/user.routes.js

import express from 'express';
import userController from '../controllers/user.controller.js';
import authenticate from '../middleware/authenticate.js'; 

const router = express.Router();

router.post('/', userController.createUser);

router.post('/signin', userController.signIn);

router.get('/', authenticate, userController.listUsers);

router.get('/:userId', authenticate, userController.readUser);

router.put('/:userId', authenticate, userController.updateUser);

router.delete('/:userId', authenticate, userController.deleteUser);

export default router;
