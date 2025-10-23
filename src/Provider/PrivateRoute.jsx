import React, { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from './Authprovider';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext);

    if(loading){
        return <span className="loading loading-infinity loading-md mx-auto flex mt-20"></span>
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate to='/auth/login'></Navigate>
};

export default PrivateRoute;