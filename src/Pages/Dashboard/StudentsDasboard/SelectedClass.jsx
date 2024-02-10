import React, { useContext, useState } from 'react';
import UseCart from '../../../Components/Hooks/UseCart';
import {FaTrashAlt } from 'react-icons/fa';
import {MdPayment } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SelectedClass = () => {
 
   const [cart,refetch]=UseCart();
  

   const handleDelete = cart=> {
  
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://sport-academy-server-v2.vercel.app/carts/${cart?._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
        }
    })
}
    return (
        <div className='max-w-screen-lg mx-auto  mt-24'>
            <h1 className="text-center p-4  text-4xl font-bold text-lime-500">My Classes</h1>
        <div className="overflow-x-auto">
        <table className="table  border-l-2 border-lime-500 border-r-2 border-b-2 w-full ">
            {/* head */}
            <thead>
                <tr className='bg-lime-500 text-black font-bold'>
                    <th>#</th>
                    <th> Class Name</th>
                    <th>Class Image</th>
                    <th>Price</th>
                    <th>Payment</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart?.map((cart, index) => <tr key={cart._id}>
                        <th className='text-black'>{index + 1}</th>
                        <td className='text-black'>{cart.className}</td>
                        <td ><img className='w-[60px] rounded' src={cart.classImage} alt="" /></td>
                        <td className='text-black'>${cart.price}</td>
                        
                        <td>
                            <Link to={`/dashboard/payment/${cart._id}`} className="btn text-black text-2xl bg-lime-400 rounded-full "><MdPayment></MdPayment> </Link> 
                      
                            </td>
                        
                        <td><button onClick={() => handleDelete(cart)}  className="btn btn-ghost rounded-full bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                    </tr>)
                }
                
                
            </tbody>
        </table>
    
    </div>
    </div>
    );
};

export default SelectedClass;