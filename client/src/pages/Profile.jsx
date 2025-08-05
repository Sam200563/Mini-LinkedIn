import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/axios";
import PostCard from "../components/PostCard";

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user"))?.token;
        console.log("Sending token:", token);

        const profileRes = await API.get(`/auth/profile/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const postsRes = await API.get(`/posts/user/${id}`);
        console.log("Profile data:", profileRes.data);
        console.log("User posts:", postsRes.data);

        setUser(profileRes.data);
        setPosts(postsRes.data);
      } catch (err) {
        console.error("Error fetching profile or posts:", err);
      }
    };

    fetchData();
  }, [id]);

  if (!user) return <p className="text-center mt-10">Loading profile...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-6">
      <div className="mb-6 p-4 border rounded bg-white shadow">
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-800 mt-2">{user.bio}</p>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-center">No posts found.</p>
      ) : (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      )}
    </div>
  );
}
