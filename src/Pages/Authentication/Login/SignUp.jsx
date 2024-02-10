import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { AuthContext } from '../../../Components/Providers/AuthProviders';
import { useForm } from 'react-hook-form';
import './Background.css';
import GoogleSign from '../../Shared/GoogleSign/GoogleSign';
import { Helmet } from 'react-helmet';


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
   
    const HandelRegister = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])
      console.log(formData)
      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMG_KEY}`
        fetch(url, {
            method: 'POST',
            body: formData,
          })
            .then(res => res.json())
            .then(imageData => {
              const photoURL = imageData.data.display_url
              console.log(photoURL)

    createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            profileUpdate(data.name,photoURL)
            .then(() => {
                const saveUser = { name: data.name, email: data.email }
                fetch('https://sport-academy-server-v2.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                })
                
                .catch(error => console.log(error))
        })
        })
    })
};
    return (
        <div>
            <Helmet>
           <title>Sports-Academies | Sign Up</title>
         </Helmet>
        <div className="hero min-h-screen background">
                <div className="hero-content ">
                    <div className="w-1/2 mr-12">
                    </div>
                    <div className="card bg-blue-900 border-2 border-lime-700 bg-opacity-30 flex-shrink-0 w-full max-w-sm   shadow-1xl bg-s-100">
                        <form onSubmit={handleSubmit(HandelRegister)} className="card-body rounded mt-6 ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="font-bold text-black">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered h-10" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-black ">Photo URL</span>
                                </label>
                                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full h-10 "/>
                                {errors.photoURL && <span className="text-red-600">Photo URL required</span>}
                            </div>
              
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-black">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered h-10" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-black">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered h-10" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt  font-bold text-black  link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <input className="btn Login-bg text-black h-10" type="submit" value="Sign Up" />
                            </div>
                            <p className='my-4 text-center font-bold text-black'>Already have an account<Link className='text-green-300 font-bold' to="/login">Login</Link> </p> 
                            
                        </form>
                        <div className='ml-8 '>
                            <GoogleSign></GoogleSign>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default SignUp;