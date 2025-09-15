import { createContext, useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

interface AuthContextType {
  user: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem("user"));
  const navigate = useNavigate();

  const login = (username: string, password: string) => {
    if (password === "test123") {
      setUser(username);
      localStorage.setItem("user", username);
      navigate("/dashboard");
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
