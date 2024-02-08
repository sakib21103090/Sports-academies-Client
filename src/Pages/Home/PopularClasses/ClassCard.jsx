import React from 'react';

const ClassCard = ({Class}) => {

const { className, classImage,availableSeats,price } =Class;
return (
<div  className=" card rounded border-card hover:x-50 w-[300px] h-[350px] for-transform bg-transparent class-card-bg shadow-xl  mx-auto">
<figure><img className='w-[300px] h-[200px] rounded-2xl p-3 mt-2  border-card img-t' src={classImage} alt="" /></figure>
<div className="card-body  ">
  <h2 className="text-black"> <span className='text-blue-600 font-bold'>Class Name: </span>{className}</h2>
  <p className=' text-primary-color'><span className='text-black font-bold'>Available Seats: </span>{availableSeats}</p>
  <p className='text-primary-color '><span className='text-black font-bold'>Price:$ </span>{price}</p>
  <div className="card-actions justify-end">
 
  </div>
</div>
</div>
    );
};

export default ClassCard;