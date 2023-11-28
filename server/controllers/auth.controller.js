import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const signIn = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).send('Authentication failed');
        }

        const token = jwt.sign({ _id: user._id }, 'secretKey'); // Use your secret key
        return res.status(200).send({ token });
    } catch (err) {
        return res.status(500).send('Internal Server Error');
    }
};

const signOut = (req, res) => {
    // Implement your sign out logic, like clearing the token or session
    res.redirect('/');
};

export default { signIn, signOut };
