import React from 'react';

const ClassCard = ({Class}) => {

const { className, classImage,availableSeats,price } =Class;
return (
<div className="max-w-md mx-auto h-full bg-white shadow-lg rounded-lg overflow-hidden">
<figure><img className="card-Image" src={classImage} alt="" /></figure>
<div className="card-body  card-bg">
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