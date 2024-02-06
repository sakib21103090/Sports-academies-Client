import React from 'react';

const LoadDataIns = ({instructor}) => {
        const {instructorName, instructorImage,instructorEmail} =instructor;
    return (
    <div className="max-w-md rounded-lg overflow-hidden  shadow-xl ">
    <figure><img className='card-Image' src={instructorImage} alt="" /></figure>
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