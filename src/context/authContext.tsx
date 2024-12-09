import { createContext, useContext, useState } from "react";

interface AuthContextType {
    token : string | null;
    isAuthenticated: boolean;
    login: (token: string) =>void;
    logout: () => void;

}

  const AuthContext = createContext<AuthContextType>({
    token: null,
   isAuthenticated: false,
   login: () => {},
   logout: () => {}
});

// checks if the user is authenticated
const Authprovider = ({ children }: any) => {
    const [ isAuthenticated , setIsAuthenticated] = useState(  false );
    const token = localStorage.getItem("token");

    const login = (token : string) => {
        if (token){
            localStorage.setItem("token" , token);
            setIsAuthenticated(true);
        }
    };

    const logout = () => {
      localStorage.removeItem("token")
        setIsAuthenticated(false);
    };

    return(
        <AuthContext.Provider value={{ token , isAuthenticated , login , logout}}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);
export { Authprovider, AuthContext, useAuth };

//steps to create contextAPI
//create a context variable using createContect() function
//create a provider component that will wrap the entire application
//set value prop of the provider component
//export the context variable anfd the provider component
//wrap the application with the provider component
//use UseContext() hook to access the context value in any component