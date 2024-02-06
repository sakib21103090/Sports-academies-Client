import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../../Firebase/firebase.config';
import axios from 'axios';



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
    console.log(currentUser)
    // get and set token
    if(currentUser){
        axios.post('https://sport-academy-server-v2.vercel.app/jwt', {email: currentUser.email})
        .then(data =>{
            // console.log(data.data.token)
            localStorage.setItem('access-token', data.data.token)
            setLoading(false);
        })
    }
    else{
        localStorage.removeItem('access-token')
    }

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