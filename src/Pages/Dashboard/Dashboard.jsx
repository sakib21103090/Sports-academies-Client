import React from 'react';
import { FaBook, FaHome, FaMoneyBill } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const isAdmin=true;
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex  bg-blue-100 flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
 <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full    text-base-content  bg-sky-400">
      {/* Sidebar content here */}
      <div>
      <h2 className='text-center mx-auto '>  <img className=' text-center mx-auto w-[120px]' src={`https://i.ibb.co/NrN9Nfc/kogo.png`} alt="" /><span className="text-white text-4xl font-bold ">Sport Academy </span></h2>
      </div>
      <div className="divider"></div>
      {
        isAdmin? <>
        
         <li className='mb-6'><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home </NavLink> </li>

         <li className='mb-6'><NavLink to="/dashboard/manageClasses"><FaBook></FaBook> Manage Classes</NavLink> </li>

        <li><NavLink to="/dashboard/manageUsers"><FaMoneyBill></FaMoneyBill>Manage Users</NavLink> </li>

  </> :
   isInstructor?<> 
        <li className='mb-6'><NavLink to="/dashboard/instructorHome"><FaHome></FaHome> Student Home </NavLink> </li>
        <li className='mb-6'><NavLink to="/dashboard/addClass"><FaBook></FaBook> Add A Class</NavLink> </li>
        <li><NavLink to="/dashboard/myClasses"><FaMoneyBill></FaMoneyBill>my Classes</NavLink> </li>
  </> :
        
        <> <li className='mb-6'><NavLink to="/dashboard/userHome"><FaHome></FaHome> Student Home </NavLink> </li>
        <li className='mb-6'><NavLink to="/dashboard/selectedClass"><FaBook></FaBook> My Selected Classes</NavLink> </li>
  
        <li><NavLink to="/dashboard/enrolledClasses"><FaMoneyBill></FaMoneyBill>My Enrolled Classes</NavLink> </li>
  </>
      }

     

      <div className="divider"></div>
      <li><NavLink className='text-black  font-bold' to="/">Home</NavLink> </li>
            <li><NavLink className='text-black  font-bold' to="/instructors">Instructors</NavLink> </li>
            <li><NavLink className='text-black  font-bold' to="/classes">Classes</NavLink> </li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;