// middleware/authenticate.js
import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
      return res.status(401).json({ error: 'A token is required for authentication' });
  }
  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
  } catch (err) {
      return res.status(401).json({ error: 'Invalid Token' });
  }
};

export default authenticate;