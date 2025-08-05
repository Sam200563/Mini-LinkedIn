import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  console.log("User in Header:", user);

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-700">MiniLinkedIn</Link>
      <div className="flex items-center gap-4">
        
        {user ? (
          <>
            <Link to={`/profile/${user.id}`} className="text-blue-600">{user.name}</Link>
            <button onClick={logout} className="text-red-500">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </header>
  );
}
