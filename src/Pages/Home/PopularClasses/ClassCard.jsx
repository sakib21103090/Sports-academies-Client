import React from 'react';

const ClassCard = ({Class}) => {

const { className, classImage,availableSeats,price } =Class;
return (
<div className="card card-compact  bg-base-100 shadow-xl mx-auto">
<figure><img className='w-[300px] h-[200px] rounded ' src={classImage} alt="" /></figure>
<div className="card-body text-slate-900">
  <h2 className="card-title text-2xl"> Class Name: {className}</h2>
  <p className='text-slate-900 '>Available Seats:{availableSeats}</p>
  <p className='text-slate-900 '>Price:${price}</p>
  <div className="card-actions justify-end">
  <button className="btn btn-sm btn-outline btn-secondary">Select</button>
  </div>
</div>
</div>
    );
};

export default ClassCard;