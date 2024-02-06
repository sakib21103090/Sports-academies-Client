import React from 'react';

const InstructorCard = ({instructor}) => {
  const { instructorImage, instructorName,instructorEmail} =instructor;
  return (
  <div className="card card-compact hover:x-50 w-[300px] h-[350px] for-transform bg-card bg-transparent  shadow-xl border-separate mx-auto">
  <figure><img className='w-[300px] h-[300px] rounded  img-t' src={instructorImage} alt="" /></figure>
  <div className="card-body ">
    <h2 className="card-title text-2xl text-primary-color"> Name: {instructorName}</h2>
    <p className='text-primary-color'> <span className='font-bold'>Email: </span>{instructorEmail}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-sm btn-outline btn-primary">See Classes</button>
    </div>
  </div>
</div>
    );
};

export default InstructorCard;