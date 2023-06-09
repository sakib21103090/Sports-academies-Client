import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../../Firebase/firebase.config';



export const AuthContext= createContext(null);
const auth = getAuth(app);



const AuthProviders = ({children}) => {
    
    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();


const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password) ;
 
}



const SignIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}

const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}

const logOut=()=>{
    setLoading(true);
    return signOut(auth);
}

useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
     setUser(currentUser);
     setLoading(false);

    });

    return () =>{
       return unSubscribe();
    }
},[])


    const AuthInfo={

        user,
        loading,
        createUser,
        SignIn,
        logOut,
        profileUpdate,
        googleSignIn
       
       
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
    );
};


export default AuthProviders;