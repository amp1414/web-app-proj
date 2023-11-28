import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
        const decoded = jwt.verify(token, 'secretKey'); // Use your secret key
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).send('Acceso no autorizado');
    }
};

export default authenticate;
