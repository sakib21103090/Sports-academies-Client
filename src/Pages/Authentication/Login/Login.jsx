import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { AuthContext } from '../../../Components/Providers/AuthProviders';
import './Background.css';
import GoogleSign from '../../Shared/GoogleSign/GoogleSign';

const Login = () => {
    const [error ,setError]=useState('');
    const{SignIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
  
  
    const from =location.state?.from?.pathname || '/';
    
    const HandelLogin=event=>{
      event.preventDefault();
      const form =event.target;
      const email=form.email.value;
      const password=form.password.value;
      console.log(email,password);
      

  
      
      SignIn(email,password)
      .then(result => {
      
          const LoggedUser = result.user;
          Swal.fire('Hey', 'login successful', 'success');
          console.log(LoggedUser);
          
          
          setError('')
          form.reset();
          navigate(from,{replace :true});
         
        })
        .catch(error => {
          console.log(error);
          setError('wrong input please input valid data');
          
        });
        
    
    }
    return (
        <div className="hero min-h-screen background ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                 
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-s-100">
                    <div className="card-body rounded">
                        <h1 className="text-4xl text-center  text-black font-bold">Login Please</h1>
                        <form onSubmit={HandelLogin }>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-2xl text-black">Email</span>
                                </label>
                                <input type="text"  name='email' placeholder=" Enter email" className="input  bg-white input-bordered"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-2xl  text-black">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input bg-white input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt text-black link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-blue-600 text-black" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center text-black'>Don't have an account<Link className='text-white font-bold' to="/SignUp">Sign Up</Link> </p>
                        <div>
                        <p className=' text-black  bg-purple-400 text-center rounded border fw-bold mt-2'> <small>{error}</small></p>
                        </div>
                        <div>
                            <GoogleSign></GoogleSign>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;