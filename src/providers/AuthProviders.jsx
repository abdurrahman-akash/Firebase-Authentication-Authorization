import { useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
import { AuthContext } from "../contexts/AuthContext";
import { useEffect } from "react";

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    return () => unsubscribe();
}, []);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logoutUser = () => {
        return signOut(auth);
    }

    const authInfo = { 
        user,
        createUser, 
        loginUser,
        logoutUser
    };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
};

export default AuthProviders;