import React, { useContext } from 'react';
import { AuthContext } from '../../../Components/Providers/AuthProviders';

const AdminHome = () => {
  const {user}=useContext(AuthContext);  {/* get user information which user are login*/}
console.log(user)
    return (
      <div className='pt-28  max-w-sm mx-auto'>
        <div>
          <h1 className='font-bold text-lime-600 text-4xl mb-6 font-serif'>Admin Information</h1>
        </div>
        <div>
         {user && <img className='rounded-xl w-[100px] border-4 border-blue-500  mx-auto mb-6' src={user.photoURL}  /> }  
          <h2 className=' text-black'><span className='font-bold text-lime-600'>Admin Name:</span>{user.displayName}</h2>
          <h3 className='text-black'> <span className='font-bold text-lime-600'>Email:</span>{user.email}</h3>
          
        </div>
        </div>
    );
};

export default AdminHome;