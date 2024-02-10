import React from 'react';

const LoadDataIns = ({instructor}) => {
        const {instructorName, instructorImage,instructorEmail} =instructor;
    return (
    <div className="card card-compact hover:x-50 w-[250px] h-[350px] all-card-bg for-transform  shadow-xl mb-4  mx-aut">
    <figure><img className='w-[250px] h-[180px] rounded-b-3xl ' src={instructorImage} alt="" /></figure>
    <div className="card-body ">
      <h2> <span className='font-bold text-2xl '>Name: </span>{instructorName}</h2>
      <p className='text-primary-color'> <span className='font-bold'>Email:</span>{instructorEmail}</p>
      <div className="card-actions justify-end">
      <button className="btn btn-sm btn-outline btn-secondary">See Classes</button>
      </div>
    </div>
  </div>
    );
};

export default LoadDataIns;