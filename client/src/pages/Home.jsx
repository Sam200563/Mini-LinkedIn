import { useEffect, useState, useContext } from "react";
import API from "../api/axios";
import PostCard from "../components/PostCard";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const { user } = useContext(AuthContext);

  const fetchPosts = async () => {
    const res = await API.get("/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();
    if (!content) return;
    await API.post("/posts", { content });
    setContent("");
    fetchPosts();
  };

  return (
    <div className="max-w-2xl mx-auto mt-6">
      {user && (
        <form onSubmit={handlePost} className="mb-4">
          <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="What's on your mind?" className="w-full border p-2" />
          <button className="bg-blue-600 text-white py-1 px-4 mt-2">Post</button>
        </form>
      )}
      {posts.map((post) => <PostCard key={post._id} post={post} />)}
    </div>
  );
}
