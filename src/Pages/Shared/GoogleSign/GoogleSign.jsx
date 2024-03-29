import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Components/Providers/AuthProviders';
const GoogleSign = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result=>{
            const user=result.user;
            const saveUser = { name: user.displayName, email: user.email }
            fetch('https://sport-academy-server-v2.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {
                    navigate(from, { replace: true });
                })
          })
        }
    
   
    return (
        <div>  
               <button onClick={handleGoogleSignIn} className="btn gap-2 w-[300px] Login-bg text-black mb-4"  ><FaGoogle></FaGoogle>Google</button>
                
   </div>
    );
};

export default GoogleSign;