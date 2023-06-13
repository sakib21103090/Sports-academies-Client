import React from 'react';
import UseAuth from '../Components/Hooks/UseAuth';
import UseAdmin from '../Components/Hooks/UseAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = ({children}) => {
    const { user, loading } = UseAuth();
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress bg-green-400 w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};


export default AdminRoutes;