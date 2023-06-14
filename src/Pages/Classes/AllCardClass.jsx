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
          fetch('http://localhost:5000/carts', {
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
      "card rounded card-compact h-full   bg-red-400  shadow-xl"
      : "card  card-compact h-full rounded   shadow-xl"
      }`}>
    <figure><img className='w-[400px]  h-[200px] rounded p-4' src={classImage} alt="" /></figure>
    <div className="card-body ">
      <h2 className="card-title text-2xl "> Name: {className}</h2>
      <p className='text-primary-color '>Available Seats:{availableSeats}</p>
      <p className='text-primary-color'>Price:${price}</p>
      <div className="card-actions justify-end">
      <button onClick={() => handleAddToCart(Class)} className="btn btn-sm btn-outline btn-secondary">Select</button>
      </div>
    </div>
  </div>
    );
};

export default AllCardClass;