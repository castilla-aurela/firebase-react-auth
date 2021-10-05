import React, { useContext, useState, useEffect} from 'react'
import  auth from '../firebase'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password){
        //auth = getAuth();
        console.log(email, password)
        return createUserWithEmailAndPassword(auth, email, password)
        //.then((userCredential) =>{
        //    const user = userCredential.user;
      //  })
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged( user =>{
            setCurrentUser(user)
            setLoading(false)
            
        })
        return unsubscribe
    }, [])
 

    const value = {
        currentUser,
        signup,
    }

    return (
        <AuthContext.Provider value ={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
