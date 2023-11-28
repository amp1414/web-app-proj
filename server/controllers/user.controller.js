import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

const signup = async (req, res) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        const user = new User({ ...req.body, password: hashedPassword });
        await user.save();
        res.redirect('/signin');
    } catch (err) {
        res.status(500).send('Error al crear el usuario');
    }
};

const profile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id); // Assuming req.user is set by the authenticate middleware
        if (!user) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.render('profile', { user });
    } catch (err) {
        res.status(500).send('Error interno del servidor');
    }
};

export default { signup, profile };