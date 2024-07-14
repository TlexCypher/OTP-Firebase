import { auth } from "@/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

type AuthContextType = {
  user: User | null;
};

//Higher order component to provide authentication context
const AuthContext = createContext<AuthContextType>({ user: null });

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //Updates the user state when the user logs in or not.
      setUser(user || null);
    });
    //cleanup
    return () => unsubscribe();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
