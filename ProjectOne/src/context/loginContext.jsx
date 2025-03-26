import React, { createContext, useState } from "react";

export const LoginContext = createContext();
export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const login = (username, password) => {
        return fetch('http://localhost:3004/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then((response) => {
            if(!response.ok) throw new Error('Login failed');
            return response.json();
    })
    .then((data) => {
        console.log('Login successful:', data);
        if(data && data.data) {
            setUser(data.data);
            return data.data;
        }else{
            throw new Error('Login failed');
        }
    })
};

    
    const logout = () => {
        setUser(null);
    };
    
    return (
        <LoginContext.Provider value={{ user, login, logout }}>
        {children}
        </LoginContext.Provider>
    );
    }