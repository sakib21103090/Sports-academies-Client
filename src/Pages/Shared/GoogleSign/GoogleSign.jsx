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
            fetch('http://localhost:5000/users', {
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
        <div className='mb-4'>  
               <button onClick={handleGoogleSignIn} className="btn gap-2 bg-blue-600 text-black w-full mb-4"  ><FaGoogle></FaGoogle>Google</button>
                
   </div>
    );
};

export default GoogleSign;