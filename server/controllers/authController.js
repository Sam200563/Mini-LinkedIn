import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { name, email, password, bio } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = new User({ name, email, password: hashedPassword, bio });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(400).json({ error: 'User already exists' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.json({ token, user: { id: user._id, name: user.name, email: user.email, bio: user.bio } });
};

export const getProfile = async (req, res) => {
  const user = await User.findById(req.userId);
  res.json(user);
};
