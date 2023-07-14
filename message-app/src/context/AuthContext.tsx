import React, { createContext, useEffect, useState } from "react";
import { registerProp, AuthContexProps, loginProp } from "../interfaces/interface";
import axios from "axios";
import { routeapi } from "../routhpath";

export const AuthContext = createContext<AuthContexProps>({
    user: [],
    login: () => { },
    registerUser: () => { },
});

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const [user, setuser] = useState<registerProp[]>([]);

    const login = (data : loginProp) => {
        axios.post(routeapi.login, data)
                .then(function(res){
                    console.log(res);
                })
                .catch(function(error){
                    console.log(error);
                })
    }

    const registerUser = (data: registerProp) => {
        axios.post(routeapi.register,data)
                .then(function(res){
                    console.log(res);
                })
                .catch(function(error){
                    console.log(error);
                })
    }

    let valueContex = {
        user,
        login,
        registerUser,
    }
    return (
        <AuthContext.Provider value={valueContex}>
            {children}
        </AuthContext.Provider>
    );
}