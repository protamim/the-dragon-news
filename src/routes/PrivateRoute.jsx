import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RotatingTriangles } from "react-loader-spinner";
import PropTypes from 'prop-types'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(loading) {
        return <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
    }

    if(user){
        return children;
    }
    return <Navigate state={location} to={'/login'} />
};

PrivateRoute.propTypes = {
    children: PropTypes.node, 
}

export default PrivateRoute;