import { useContext } from "react"
import { useLocation,Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext"

export const PrivateRoute = ({children}) => {
    
    const {user} = useContext(AuthContext);

    const location =useLocation();
    // console.log(location);

    localStorage.setItem('lastPath',(location.pathname+location.search));
    // const lastPath = (localStorage.getItem('lastPath'));
    // console.log(lastPath);

    
    return user.logged? children : <Navigate to="/login" />;
}
