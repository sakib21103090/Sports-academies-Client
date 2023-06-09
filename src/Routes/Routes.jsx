

import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/Login/SignUp";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        }
        
    ]
    },
  ]);