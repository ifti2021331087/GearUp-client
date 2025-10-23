// import { getApp } from 'firebase/app';
import React, { createContext } from 'react';
// import app from '../firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext=createContext();
// const auth=getApp(app);
const AuthProvider = ({children}) => {

    const authInfo={

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;