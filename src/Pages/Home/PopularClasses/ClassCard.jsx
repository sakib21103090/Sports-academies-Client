import React from 'react';

const ClassCard = ({Class}) => {

const { className, classImage,availableSeats,price } =Class;
return (
<div className="card card-compact hover:x-50 w-[300px] h-[350px] for-transform bg-transparent  bg-card shadow-xl border-separate mx-auto">
<figure><img className='w-[300px] h-[300px] rounded  img-t' src={classImage} alt="" /></figure>
<div className="card-body ">
  <h2 className="card-title text-primary-color text-2xl"> <span className='text-blue-600'>Class Name: </span>{className}</h2>
  <p className=' text-primary-color'><span className='text-purple-400 font-bold'>Available Seats: </span>{availableSeats}</p>
  <p className='text-primary-color '><span className='text-purple-400 font-bold'>Price:$ </span>{price}</p>
  <div className="card-actions justify-end">
 
  </div>
</div>
</div>
    );
};

export default ClassCard;