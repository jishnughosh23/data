import React,{ createContext} from 'react'
import App from '../App';

const AppContext = createContext();

const AppProvider = ({children}) =>{
    const userData = {
        name:"Jishnu"
    }
    return <AppContext.Provider value={userData}>{children}</AppContext.Provider>
}

export {AppContext,AppProvider}
// context
// provider
// useContext