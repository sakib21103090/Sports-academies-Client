import React from 'react';

const ClassCard = ({Class}) => {

const { className, classImage,availableSeats,price } =Class;
return (
<div className="card card-compact  bg-sky-300 shadow-xl mx-auto">
<figure><img className='w-[300px] h-[200px] rounded ' src={classImage} alt="" /></figure>
<div className="card-body ">
  <h2 className="card-title text-primary-color text-2xl"> Class Name: {className}</h2>
  <p className=' text-primary-color'>Available Seats:{availableSeats}</p>
  <p className='text-primary-color '>Price:${price}</p>
  <div className="card-actions justify-end">
 
  </div>
</div>
</div>
    );
};

export default ClassCard;