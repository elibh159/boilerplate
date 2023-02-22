/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState, useContext } from "react";
import { fakeAuthProvider } from "./auth";
import { AuthContextType } from "../interface/authContextType";
import { setToken } from '../helpers/auth';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AuthContext = createContext<AuthContextType>(null!);
export function useAuth() {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<string>('');

    const signin = (username: string, password: string, callback: any) => {
        return fakeAuthProvider.signin(username, password, (res: any) => {
            setUser(res.username);
            callback(res);
            const result = res.result;
            const expires = new Date(result.access_token_expration);
            setToken(result.access_token, expires);
        });
    };

    const signout = (callback: VoidFunction) => {
        return fakeAuthProvider.signout(() => {
            setUser('');
            callback();
        });
    };

    const value = { user, signin, signout };

    return (<AuthContext.Provider value={value}> {children} </AuthContext.Provider>);
};

export default AuthProvider;