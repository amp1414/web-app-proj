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



router.get('/', authenticate, userController.listUsers);

router.get('/:userId', authenticate, userController.readUser);

router.put('/:userId', authenticate, userController.updateUser);

router.delete('/:userId', authenticate, userController.deleteUser);

// Unprotected route
router.post('/signin', userController.signIn);

// Protected routes
router.use(authenticate); // Apply authentication middleware to all routes below

router.get('/profile', userController.getLoggedInUser);
router.get('/signout', userController.signOut);

export default router;
