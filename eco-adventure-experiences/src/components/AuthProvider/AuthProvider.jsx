import React, { createContext, useEffect, useRef, useState } from "react";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";


import { auth } from "../../Firebase/firebase-init";
import toast from "react-hot-toast";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [emailValue1,setEmailValue1] = useState('');
  const [emailValue2, setEmailValue2] = useState('');
  const emailRef = useRef();



  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;


const userForgetPassword = (email) => {
    return sendPasswordResetEmail(auth,email);
}


  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (updatedData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedData)
      .then(() => {
        // Manually update the user state with the new information
        setUser({
          ...auth.currentUser,
          displayName: updatedData.displayName,
          photoURL: updatedData.photoURL,
        });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User signed in:", result.user);
        toast.success("Successful");
        return result;
      })
      .catch((error) => {
        // Handle Errors here
        console.error("Error during sign-in:", error);
        toast.error("Something is wrong");
        throw error;
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("currently Logged user", currentUser);
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    regex,
    emailRef,
    emailValue2,
    emailValue1,
    setEmailValue1,
    setEmailValue2,
    createUser,
    signInUser,
    signOutUser,
    updateUserProfile,
    userForgetPassword,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
