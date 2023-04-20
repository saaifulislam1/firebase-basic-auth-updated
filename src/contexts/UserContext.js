import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut , GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

// available for everyone
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const UserContext = ({ children }) => {

  const [user, setUser] = useState({});
  const [loading, setLoading]= useState(true)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = ()=>{
    return signInWithPopup(auth, provider)

  }




  const logOut = () =>{
    return signOut(auth);
  }

  useEffect (()=>{
    const unsubscribe= onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      setLoading(false)
      console.log('auth state has been changed', currentUser)
    })
    return ()=>{
      unsubscribe();
    }
  },[])

  const authInfo = { user, createUser , signIn, logOut, signInWithGoogle, loading};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
