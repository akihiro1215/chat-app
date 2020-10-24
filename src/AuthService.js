import React, { createContext, useEffect, useState } from 'react'
import firebase from './config/firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user);
        }); 
    });

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}