import { useEffect, useState } from "react";
import { getStorage, multiRemove } from "../utils/storage";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    isLoggedIn();
  }, []);

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let storedUser = await getStorage("user");
      let storedToken = await getStorage("token");
      setUser(storedUser);
      setToken(storedToken);

      if (storedUser) {
        setUser(storedUser);
        setToken(storedToken);
      } else {
        setUser(null);
        setToken(null);
      }
    } catch (error) {
      // Message('customError', error.message);
      console.log("Error in useAuth:", error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    multiRemove(["user", "token"]);
  };

  const authInfo = {
    user,
    setUser,
    token,
    setToken,
    logout,
    isLoading,
  };

  return authInfo;
};

export default useAuth;
