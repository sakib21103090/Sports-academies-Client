

import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/Login/SignUp";
import Error from "../Components/Error/Error";
import SelectedClass from "../Pages/Dashboard/StudentsDasboard/SelectedClass";
import Dashboard from "../Pages/Dashboard/Dashboard";
import EnrolledClasses from "../Pages/Dashboard/StudentsDasboard/EnrolledClasses";
import AdminHome from "../Pages/Dashboard/AdminDasboard/AdminHome";
import ManageClasses from "../Pages/Dashboard/AdminDasboard/ManageClasses";
import AddClass from "../Pages/Dashboard/InstructorsDasboard/AddClass";
import MyClasses from "../Pages/Dashboard/InstructorsDasboard/MyClasses";
import AdminRoutes from "./AdminRoutes";
import ManageUsers from "../Pages/Dashboard/AdminDasboard/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/Dashboard/StudentsDasboard/Payment";
import InstructorHome from "../Pages/Dashboard/InstructorsDasboard/InstructorHome";
import UsersHome from "../Pages/Dashboard/StudentsDasboard/UsersHome";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children :[
        {
            path : '/',
            element : <Home></Home>,
        },
        {
            path : '/instructors',
            element : <Instructors></Instructors>,
        },
        {
            path : '/classes',
            element :<Classes></Classes>,
        },
        {
          path : '/login',
            element : <Login></Login>
        },
        {
          path : '/SignUp',
            element : <SignUp></SignUp>
        },
        
       
        
    ]
    },
    {
      
        path : 'dashboard',
        element :<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children :[
          {
            path : 'selectedClass',
            element : <SelectedClass></SelectedClass>
          },
          {
            path : 'UserHome',
            element : <UsersHome></UsersHome>
          },
          {
            path : 'enrolledClasses',
            element : <EnrolledClasses></EnrolledClasses>
          },
          

          //  admin routes
          {
            path : 'adminHome',
            element : <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
          },
          {
            path : 'manageClasses',
            element : <AdminRoutes><ManageClasses></ManageClasses></AdminRoutes>
          },
          {
            path : 'manageUsers',
            element : <AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
          },
          // instructors routes
          
          {
            path : 'addClass',
            element : <AddClass></AddClass>
          },
          {
            path : 'instructor',
            element : <InstructorHome></InstructorHome>
          },
          {
            path : 'myClasses',
            element : <MyClasses></MyClasses>
          },
          // {
          //   path : 'checkOut/:id',
          //   element : <CheckOut></CheckOut>
          // },
          {
            path : 'payment/:id',
            element : <Payment></Payment>
          },
          
        ]
      
    },
    
  ]);