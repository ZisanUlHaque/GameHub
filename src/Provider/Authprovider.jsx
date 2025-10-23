import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth(app);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);

  //create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  
  const authData = {
    user,
    setUser,
    auth,
    createUser,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default Authprovider;
