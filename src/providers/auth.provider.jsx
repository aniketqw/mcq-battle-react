import { useEffect, useState } from "react";
import AuthContext from "../contexts/auth.context";
import AuthService from "../services/api/auth/authService.jsx";

const AuthProvider = ({ children }) => {
  const [isLoggedInUser, setIsLoggedInUser] = useState(null);

  const checkIfUserIsLoggedIn = async () => {
    try {
      const response = await AuthService.protectedResource();// changed here
      setIsLoggedInUser(true);
    } catch (err) {
      setIsLoggedInUser(false);
    }
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedInUser, setIsLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
