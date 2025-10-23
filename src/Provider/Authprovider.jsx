import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);

  //create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //logout
  const logOut =() =>{
    return signOut(auth);
  }

  //login
  const signIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

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
    logOut,
    signIn,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default Authprovider;
