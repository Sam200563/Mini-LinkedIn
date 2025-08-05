export default function PostCard({ post }) {
  return (
    <div className="border p-4 rounded mb-4 shadow-sm bg-white">
      <div className="font-bold text-gray-700">{post.user?.name}</div>
      <div className="text-sm text-gray-400">{new Date(post.createdAt).toLocaleString()}</div>
      <p className="mt-2 text-gray-800">{post.content}</p>
    </div>
  );
}
