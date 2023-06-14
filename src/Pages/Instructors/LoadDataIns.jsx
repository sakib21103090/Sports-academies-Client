import React from 'react';

const LoadDataIns = ({instructor}) => {
        const {instructorName, instructorImage,instructorEmail} =instructor;
    return (
    <div className="card card-compact   shadow-xl mx-auto">
    <figure><img className='w-[160px]  h-[200px] rounded p-2' src={instructorImage} alt="" /></figure>
    <div className="card-body ">
      <h2 className="card-title  text-primary-color text-2xl">Name: {instructorName}</h2>
      <p className='text-primary-color'>Email:{instructorEmail}</p>
      <div className="card-actions justify-end">
      <button className="btn btn-sm btn-outline btn-secondary">See Classes</button>
      </div>
    </div>
  </div>
    );
};

export default LoadDataIns;