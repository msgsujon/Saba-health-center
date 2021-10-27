import React, { createContext } from 'react';
import useFirebase from '../Hook/useFirebase';

export const AuthContext = createContext();

// api context here
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;