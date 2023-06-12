import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Components/Providers/AuthProviders';


const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  console.log(user)
  const handleLogOut = () => {
      logOut()
          .then()
          .catch(error => console.log(error));
  }
  
    return (
        <div  className="navbar  bg-blue-900 fixed z-10 bg-opacity-30 max-w-screen-xl text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn bg-blue-100 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow font-bold bg-blue-400 z-10 bg-opacity-80 rounded-box w-52">
            <li><NavLink className='text-black  font-bold' to="/">Home</NavLink> </li>
            <li><NavLink className='text-black  font-bold' to="/instructors">Instructors</NavLink> </li>
            <li><NavLink className='text-black  font-bold' to="/classes">Classes</NavLink> </li>
            <div className=" navbar-end">
          
            
        </div>
              
            
            </ul>
          </div>
           
          <NavLink className="btn btn-ghost font-bold normal-case text-xl "> <span className="text-green-600">SPORTS </span>
          <span className="text-yellow-600"> ACADEMY</span ></NavLink>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><NavLink className='text-white  font-bold' to="/">Home</NavLink> </li>
            <li><NavLink className='text-white  font-bold' to="/instructors">Instructors</NavLink> </li>
            <li><NavLink className='text-white  font-bold' to="/classes">Classes</NavLink> </li>
           
           {user&& <li><NavLink className='text-white font-bold' to="/dashboard/selectedClass">Dashboard</NavLink> </li>}
         
         
          </ul>
        </div>
        <div>     
        </div>
        <div className=" navbar-end">
          {user && <img className='rounded-full w-[50px] md:m-4' src={user.photoURL}  /> }
           {user ? <button onClick={handleLogOut} className="btn btn-sm btn-outline bg-blue-100 h-[40px] md:m-4">Log Out</button>:<Link to="/login" className="btn btn-sm  h-[40px]  bg-blue-100 md:mx-4">Login</Link> }
        </div>
      </div>
    );
};

export default Navbar;