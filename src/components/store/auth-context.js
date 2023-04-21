import React, { useState } from 'react'


const AuthContext = React.createContext ({
    token:'',
    isLoged: false,
    login: (token) => {},
    logout: () => {},

});

export const AuthContextProvider = (props) => {

    const tokeninitial = localStorage.getItem('token');

    const [token, setToken] = useState(tokeninitial);

    const isLoged = !!token;
   

    const logInHandler= (token) => {
        setToken(token);
        localStorage.setItem('token', token)
    
    };

    const logOutHandler= () => {
        setToken(null)
        localStorage.removeItem('token')
        
    };
    
console.log(isLoged)
    const contextValue = {
        token: token,
        isLoged: isLoged,
        login: logInHandler,
        logout: logOutHandler
    }

    return (
    <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
    );
};

export default AuthContext;
