import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

const init = ()=>{
  //si no existe en el localStorage, entonces Logged:false
  //el parse, es convertir el string a un objeto json
  return JSON.parse(localStorage.getItem('user') )||{logged:false};
}

export const HeroesApp = () => {
  
  const [user, dispatch] = useReducer(authReducer,{},init);

  //Grabo el usuario en el localStorage
  useEffect(() => {
    if(!user) return;

    //acá grabo en el localStorage, como solo guarda strings se necesita el JSON.stringify
    localStorage.setItem('user',JSON.stringify(user));
  }, [user])
  

  return (
    //necesito que AuthContext provea informacion a todos sus hijos, la info que ponemos
    //en el provider está disponible para toda la app
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter/>
    </AuthContext.Provider>
  )
}
