import axios from "axios";
import React, { useContext, useState } from "react";

/**
 * @typedef AuthContextValues
 * @property {string | null} userId
 * @property {(userId: string) => void} setUserId
 */

/** @type {React.Context<AuthContextValues>} */
const AuthContext = React.createContext({
  setUserId: () => {
    throw new Error("AuthContext value is not set");
  },
  userId: null,
});

export const AuthContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        setUserId,
        userId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { userId } = useContext(AuthContext);

  return {
    loggedIn: userId != null,
    userId,
  };
};

export const useRegister = () => {
  const { setUserId } = useContext(AuthContext);

  const register = async () => {
    const res = await axios.get("/api/users/me");
    setUserId(res.data.id);
  };

  return register;
};
