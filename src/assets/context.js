import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../components/firebase";
import firebase from "firebase";
import "firebase/auth";
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((data) => {
      console.log(data);
    });
  };


  const loginWithMail = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
 

  const logout = () => {
    auth.signOut();
  };

  useEffect(() => {
    const unsubscription = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      console.log("auth state changed", user);
      return unsubscription;
    });
  }, []);

  const values = {
    user,
    loginWithGoogle,
    logout,
    loginWithMail
  };
  return (
    <>
      <AuthContext.Provider value={values}>
        {!loading && children}
      </AuthContext.Provider>
    </>
  );
}
