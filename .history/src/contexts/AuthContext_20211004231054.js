import React, { useContext, useState, useEffect} from 'react'
import  auth from '../firebase'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword } from "firebase/auth";

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
        return createUserWithEmailAndPassword(auth, email, password)//In case I wan to use another server just change this line
        //.then((userCredential) =>{
        //    const user = userCredential.user;
      //  })
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password) //In case I wan to use another server just change this line
    }

    function logout(){
        return signOut(auth)
    }

    function resetPassword(email){
        return sendPasswordResetEmail(auth, email)

    }

    function updateUserEmail (email){
        return updateEmail(auth.currentUser, email)
    }

    function updateUserPassword (password){
        return updatePassword(auth.currentUser, password)
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
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value ={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
