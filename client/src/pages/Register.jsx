import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", bio: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full border p-2" />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border p-2" />
      <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full border p-2" />
      <textarea name="bio" placeholder="Bio" value={form.bio} onChange={handleChange} className="w-full border p-2" />
      <button className="bg-blue-600 text-white w-full py-2">Register</button>
    </form>
  );
}
