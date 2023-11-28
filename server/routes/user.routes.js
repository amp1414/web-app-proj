// server/routes/user.routes.js

import express from 'express';
import userController from '../controllers/user.controller.js';
import authenticate from '../middleware/authenticate.js'; 

const router = express.Router();
//render the home page
router.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'views', 'index');
    res.sendFile(indexPath);
});
router.post('/', userController.createUser);

router.post('/signin', userController.signIn);

router.get('/', authenticate, userController.listUsers);

router.get('/:userId', authenticate, userController.readUser);

router.put('/:userId', authenticate, userController.updateUser);

router.delete('/:userId', authenticate, userController.deleteUser);
// Add the authenticate middleware to routes that require authentication
router.get('/me', authenticate, userController.getLoggedInUser);
export default router;
