import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

  //useNavigate me permite navegar a otras pantallas
  const navigate = useNavigate();
  //En el authcontext está el user y el dispatch
  const {dispatch} = useContext(AuthContext);
  
  const handleLogin = () => {
    
    const action = {
      type: types.login,
      payload: {
        name:'Facu',
      }
    }
    dispatch(action);
    //Accedemos al valor lastPath del localStorage y será la ultima pagina visitada
    const lastPath = localStorage.getItem('lastPath') || "/";
    
    navigate(lastPath,{
      //reemplaza la vista actual, no crea una nueva entrada en el historial
      replace: true,
    });
  }

  return (
    <div className="container mt-5 ">
      <h1>Login</h1>
      <hr/>

      <button className="btn btn-primary"
              onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}
