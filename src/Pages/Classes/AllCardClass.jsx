import React, { useContext } from 'react';
import { AuthContext } from '../../Components/Providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseCart from '../../Components/Hooks/UseCart';

const AllCardClass = ({Class}) => {
    const { className, classImage,availableSeats,price,_id } =Class;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = UseCart();

    const handleAddToCart = item => {
      console.log(item);
      if(user && user.email){
          const cartItem = {className, classImage,availableSeats, price, email: user.email}
          fetch('https://sport-academy-server-v2.vercel.app/carts', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(cartItem)
          })
          .then(res => res.json())
          .then(data => {
              if(data.insertedId){
                  refetch();
                  Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Selected  the Class',
                      showConfirmButton: false,
                      timer: 1500
                    })
              }
          })
      }
      else{
          Swal.fire({
              title: 'Please login to add classes',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Login now!'
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/login', {state: {from: location}})
              }
            })
      }
  }
    return (
    <div className= {`${availableSeats === 0 ?
      "card w-[250px] h-[340px] for-transform bg-red-400 border-separate mx-auto  shadow-xl"
      : "card card-compact hover:x-50 w-[250px] h-[350px] all-card-bg for-transform mb-4 shadow-xl  mx-auto"
      }`}>
    <figure><img className='w-[250px] h-[180px] rounded-b-3xl  ' src={classImage} alt="" /></figure>
    <div className="card-body ">
      <h2><span className='text-xl font-bold'> Name:</span> {className}</h2>
     
  <p className=' text-primary-color'><span className=' font-bold'>Available Seats: </span>{availableSeats}</p>
  <p className='text-primary-color '><span className='font-bold'>Price:$ </span>{price}</p>
      <div className="card-actions justify-end">
      <button onClick={() => handleAddToCart(Class)} className="btn btn-sm btn-outline btn-secondary">Select</button>
      </div>
    </div>
  </div>
    );
};

export default AllCardClass;