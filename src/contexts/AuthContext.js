import React, { useReducer} from 'react';
import { AUTH_API } from '../helpers/constants';
import axios from "axios"

export const authContext = React.createContext();

const INIT_STATE = {

}

const reducer = (state=INIT_STATE, action) =>{
    switch(action.type){

    }
}

const AuthContextProvider = ({ children }) => {
    
     const [state, dispatch] = useReducer(reducer, INIT_STATE);
    
    async function registerUser(e, history){
        e.preventDefault()
        const newUser = {
            email: e.target[0].value,
            password: e.target[2].value
        }

        try{
            const res = await axios.post(`${AUTH_API}/api/auth/register`, newUser)
            history.push('/signin')
         }catch{
            alert("Некорректная почта или пароль")
         }
    }

    async function logInUser (e, history){
        e.preventDefault()
        const newUser = {
            email: e.target[0].value,
            password: e.target[2].value
        }

        try{
            const res = await axios.post(`${AUTH_API}/api/auth/login`, newUser)
            history.push('/')
         }catch{
            alert("Некорректная почта или пароль")
         }
    }

    function hasAccount(history) {
        history.push("/signin");
      }
    
    function hasnotAccount(history) {
        history.push("/signup");
      }

    return (
        <authContext.Provider value={{
            registerUser,
            logInUser,
            hasAccount,
            hasnotAccount
        }}>
           { children } 
        </authContext.Provider>
    );
};

export default AuthContextProvider;