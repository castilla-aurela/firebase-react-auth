import React from 'react'

const AuthContext = React.createContext()

export 

export function AuthProvider({ children}) {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
