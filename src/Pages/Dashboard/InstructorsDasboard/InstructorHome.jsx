import React, { useContext } from 'react';
import { AuthContext } from '../../../Components/Providers/AuthProviders';

const InstructorHome = () => {
    const {user}=useContext(AuthContext);  {/* get user information which user are login*/}

    return (
      <div className='pt-28  max-w-sm mx-auto'>
        <div>
          <h1 className='font-bold text-lime-600 text-3xl mb-6 font-serif'>Instructor Information</h1>
        </div>
        <div>
         {user && <img className='rounded-xl w-[100px] border-4 border-blue-500  mx-auto mb-6' src={user.photoURL}  /> }  
          <h2 className=' text-center text-black'><span className='font-bold text-lime-600'>Instructor Name:</span>{user.displayName}</h2>
          <h3 className='text-black text-center'> <span className='font-bold text-lime-600'>Email:</span>{user.email}</h3>
          
        </div>
        </div>
    );
};

export default InstructorHome;