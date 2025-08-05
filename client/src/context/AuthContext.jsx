import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")));

  const login = (data) => {
    const flatUser = {
      ...data.user,
      token: data.token,
    };
    localStorage.setItem("user", JSON.stringify(flatUser));
    setUser(flatUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
