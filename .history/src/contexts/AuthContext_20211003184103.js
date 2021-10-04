import React from 'react'

const AuthContext = React.createContext()

export function useAuth() {
    return usec
}

export function AuthProvider({ children}) {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
