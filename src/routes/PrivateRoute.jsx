import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if(!user){
        // Redirect to login page or show an error
        return <Navigate to="/login" />;
    } else {
        // Render the protected component
        return children;
    }
    
};

export default PrivateRoute;
