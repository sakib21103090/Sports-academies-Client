import React from 'react';

const InstructorCard = ({instructor}) => {
  const { instructorImage, instructorName,instructorEmail} =instructor;
  return (
  <div className="card card-compact  bg-base-100 shadow-xl mx-auto">
  <figure><img className='w-[200px] h-[200px] rounded' src={instructorImage} alt="" /></figure>
  <div className="card-body text-slate-900">
    <h2 className="card-title text-2xl text-slate-900"> Name: {instructorName}</h2>
    <p className='text-slate-900'>Email: {instructorEmail}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-sm btn-outline btn-secondary">See Classes</button>
    </div>
  </div>
</div>
    );
};

export default InstructorCard;