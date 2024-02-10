import React from 'react';
import { FaBook, FaHome, FaMoneyBill, FaHouseUser, FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import UseAdmin from '../../Components/Hooks/UseAdmin';
import UseInstructor from '../../Components/Hooks/UseInstructor';
import UseCart from '../../Components/Hooks/UseCart';
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { Helmet } from 'react-helmet';


const Dashboard = () => {
  const [isAdmin]=UseAdmin();
  const [isInstructor]=UseInstructor();
  const[cart]=UseCart();
 console.log(cart)
    return (
      <div>
        <Helmet>
           <title>Sports-Academies | Dashboard</title>
         </Helmet>
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex field-bg flex-col   items-start  ">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn card-bg mb-4 mt-2  bg-lime-300  drawer-button lg:hidden">Open drawer</label>
 <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4  w-72 h-full    text-base-content  card-bg">
      {/* Sidebar content here */}
      <div>
      <h2 className='text-center mx-auto '>  <img className=' text-start mx-auto w-[120px]' src={`https://i.ibb.co/NrN9Nfc/kogo.png`} alt="" /><span className="text-lime-600 text-4xl font-bold ">Sport Academy </span></h2>
      </div>
      <div className="divider"></div>
      {
        isAdmin? <>
        
         <li className='mb-6 w-full  font-bold'><NavLink to="/dashboard/adminHome"><span className='text-lime-500 text-2xl'><FaHome></FaHome></span> Admin Home </NavLink> </li>

         <li className='mb-6  w-full font-bold'><NavLink to="/dashboard/manageClasses"><span className='text-lime-500 text-2xl'><FaBook></FaBook></span> Manage Classes</NavLink> </li>

        <li className='mb-6 w-full  font-bold'><NavLink to="/dashboard/manageUsers"><span className='text-lime-500 text-2xl'><FaUser></FaUser></span>Manage Users</NavLink> </li>

  </> :
   isInstructor?<> 
   <li className='mb-6 w-full font-bold text-black'><NavLink to="/dashboard/instructor"><span className='text-lime-500 text-2xl'><GiTeacher></GiTeacher></span>Instructor Home </NavLink> </li>
        <li className='mb-6 text-black font-bold'><NavLink to="/dashboard/addClass"><span className='text-lime-500 text-2xl'><FaBook></FaBook></span> Add A Class</NavLink> </li>
        <li className='text-black font-bold'><NavLink to="/dashboard/myClasses"><span className='text-lime-500 text-2xl'><SiGoogleclassroom></SiGoogleclassroom></span>my Classes</NavLink> </li>
  </> :
        
        <> 
        <li className='mb-6 w-full font-bold'><NavLink to="/dashboard/UserHome"><span className='text-lime-500 text-2xl'><FaHouseUser></FaHouseUser></span>User Home</NavLink> </li>
        {/* <li className='mb-6'><NavLink to="/dashboard/selectedClass"><FaBook></FaBook> My Selected Classes </NavLink> </li> */}
         <li className='mb-4 w-full font-bold'><NavLink to="/dashboard/selectedClass"><span className='text-lime-500 text-2xl'><FaBook></FaBook></span> My Selected Classes<span>      <div className="badge badge-primary">+{cart?.length || 0}</div>
           </span></NavLink> </li>
        <li className='mb-6 w-full font-bold'><NavLink to="/dashboard/enrolledClasses"><span className='text-lime-500 text-2xl'><FaMoneyBill></FaMoneyBill></span>My Enrolled Classes</NavLink> </li>
  </>
      }

     

      <div className="divider"></div>
      <li><NavLink className='text-black w-44  font-bold' to="/">Home</NavLink> </li>
            <li><NavLink className='text-black w-44  font-bold' to="/instructors">Instructors</NavLink> </li>
            <li><NavLink className='text-black w-44  font-bold' to="/classes">Classes</NavLink> </li>
    </ul>
  
  </div>
  </div>
  </div>

    );
};

export default Dashboard;