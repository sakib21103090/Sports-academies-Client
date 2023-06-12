

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
        element :<Dashboard></Dashboard>,
        children :[
          {
            path : 'selectedClass',
            element : <SelectedClass></SelectedClass>
          },
          {
            path : 'enrolledClasses',
            element : <EnrolledClasses></EnrolledClasses>
          },
        ]
      
    }
  ]);