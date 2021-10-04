import React, { useContext, useState} from 'react'
import { auth } from '../firebase'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children}) {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password){
        auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password)
        .then((userCre) =>{

        })

    }

    const value = {
        currentUser
    }

    return (
        <AuthContext.Provider value ={value}>
            {children}
        </AuthContext.Provider>
    )
}
