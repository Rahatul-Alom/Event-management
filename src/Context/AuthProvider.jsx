import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
       
    }
    const update = (auth, currentUser) =>{
        setLoading(true)
        return updateProfile(auth, currentUser)
       
    }

    // Google Login
    const googleLogIn =() =>{
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('use in the auth state changed', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {user, createUser, singIn, googleLogIn, logOut, loading, update}
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;