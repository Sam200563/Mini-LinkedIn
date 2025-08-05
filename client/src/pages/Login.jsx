import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
console.log("Logging in with:", email, password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", { email, password });
    login(res.data);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border p-2" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border p-2" />
      <button className="bg-blue-600 text-white w-full py-2">Login</button>
    </form>
  );
}
