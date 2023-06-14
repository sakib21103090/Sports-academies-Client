import React, { useContext, useState } from 'react';
import UseCart from '../../../Components/Hooks/UseCart';
import { FaCcAmazonPay, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

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
            fetch(`http://localhost:5000/carts/${cart?._id}`, {
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
        <div className="overflow-x-auto">
        <table className="table  w-full ">
            {/* head */}
            <thead>
                <tr className='bg-sky-400 text-black font-bold'>
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
                        <td className='text-black'>{cart.price}</td>
                        {/* onClick={() => handleMakeAdmin(user)} */}
                        {/* onClick={() => handleDelete(user)} */}
                        <td>
                            <button   className="btn text-black text-2xl bg-blue-100 rounded-full "><FaCcAmazonPay></FaCcAmazonPay></button> 
                            </td>
                        
                        <td><button onClick={() => handleDelete(cart)}  className="btn btn-ghost rounded-full bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                    </tr>)
                }
                
                
            </tbody>
        </table>
    
    </div>
    );
};

export default SelectedClass;