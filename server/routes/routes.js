import express from 'express';
import authController from '../controllers/auth.controller.js';
import userController from '../controllers/user.controller.js';
import authenticate from '../middleware/authenticate.js';

const router = express.Router();

// Ruta para la página principal
router.get('/', (req, res) => res.render('index'));

// Rutas para el inicio de sesión
router.get('/signin', (req, res) => res.render('signin'));
router.post('/signin', authController.signIn);

// Rutas para el registro
router.get('/signup', (req, res) => res.render('signup'));
router.post('/signup', userController.signup);

// Ruta para el perfil de usuario (protegida)
router.get('/profile', authenticate, userController.profile);

// Ruta para cerrar sesión
router.get('/signout', authController.signOut);

export default router;
