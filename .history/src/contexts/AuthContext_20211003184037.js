import React from 'react'

const AuthContext = React.createContext()

export function useA

export function AuthProvider({ children}) {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
