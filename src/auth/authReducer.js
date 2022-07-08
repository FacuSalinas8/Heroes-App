import { types } from "../types/types";

// const state={
//     name:'Facundo',
//     logged: true
// }

//Así luce ACTION (EJEMPLO)
/*const loginAction = {
    type: types.login,
    payload:{
        name:'Facu',
        email:'faqu.sk@gmail.com'
    }
}
*/

//Es el mimso tipo de REDUCER
//action es la que modifica el state, entonces react redibuja todo
export const authReducer = (state={},action)=>{

    switch (action.type) {
        case types.login:
            //tomo la action.payload y voy a esparciar, para quedarse como propiedades en el state
            return{
                //...action.payload,
                name: action.payload.name,
                logged: true
            }
        case types.logout:
            //Voy a borrar cualquier propiedad que tengamos en el state 
            //y dejar el logged en false
            return{
                logged: false
            }
    
        default:
            //retorno el state para que no haga ningun cambio
            return state;
    }

}