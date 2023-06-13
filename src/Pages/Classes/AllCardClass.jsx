import React from 'react';

const AllCardClass = ({Class}) => {
    const { className, classImage,availableSeats,price } =Class;
    return (
    <div className="card card-compact  bg-base-100 shadow-xl mx-auto">
    <figure><img className='w-[400px]  h-[200px]' src={classImage} alt="" /></figure>
    <div className="card-body text-slate-900">
      <h2 className="card-title text-3xl "> Name: {className}</h2>
      <p className='text-2xl '>Available Seats:{availableSeats}</p>
      <p className='text-2xl '>Price:${price}</p>
      <div className="card-actions justify-end">
      <button className="btn btn-sm btn-outline btn-secondary">Select</button>
      </div>
    </div>
  </div>
    );
};

export default AllCardClass;