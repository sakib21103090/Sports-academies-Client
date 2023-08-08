import React from 'react';

const InstructorCard = ({instructor}) => {
  const { instructorImage, instructorName,instructorEmail} =instructor;
  return (
  <div className="max-w-md  w-full mx-auto h-full bg-white shadow-lg rounded-lg overflow-hidden">
  <figure><img className="I-card-Image" src={instructorImage} alt="" /></figure>
  <div className="card-body  card-bg">
    <h2 className="card-title text-2xl text-primary-color"> Name: {instructorName}</h2>
    <p className='text-primary-color'>Email: {instructorEmail}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-sm btn-outline btn-secondary">See Classes</button>
    </div>
  </div>
</div>
    );
};

export default InstructorCard;