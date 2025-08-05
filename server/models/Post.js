import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
}, { timestamps: true });

export default mongoose.model('Post', PostSchema);
