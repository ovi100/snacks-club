import { useState } from "react";
// import { getStorage } from "../utils/storage";
import { API_URL } from "../config/env";

const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);

    const logout = async () => {
        try {
            await fetch(`${API_URL}/auth/logout`, {
                method: "POST",
                credentials: "include",
            });
        } finally {
            setUser(null);
        }
    };

    const fetchUser = async () => {
        console.log("fetching user");
        setIsLoading(true)
        try {
            const res = await fetch(`${API_URL}/auth/me`, {
                credentials: "include",
            });
            if (res.ok) {
                const data = await res.json();

                setUser(data);
                
            } else {
                console.log(res);
                setUser(null);
                
            }
        } catch {
            setUser(null);
            
        }finally{
            setIsLoading(false)
        }
    };

    const authInfo = {
        user,
        setUser,
        logout,
        isLoading,
        fetchUser,
    };

    return authInfo;
};

export default useAuth;
