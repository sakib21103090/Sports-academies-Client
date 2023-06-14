import React, { useContext } from 'react';
import { AuthContext } from '../Components/Providers/AuthProviders';
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return   <div>
        <h3>loading............</h3>
      </div>
    }


    
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
    
};

export default PrivateRoute;