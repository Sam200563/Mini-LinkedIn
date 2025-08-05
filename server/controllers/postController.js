import Post from '../models/Post.js';
import User from '../models/User.js';

export const createPost = async (req, res) => {
  const { content } = req.body;
  const post = new Post({ user: req.userId, content });
  await post.save();
  res.json(post);
};

export const getAllPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 }).populate('user', 'name');
  res.json(posts);
};

export const getUserPosts = async (req, res) => {
  const posts = await Post.find({ user: req.params.id }).populate('user', 'name');
  res.json(posts);
};
