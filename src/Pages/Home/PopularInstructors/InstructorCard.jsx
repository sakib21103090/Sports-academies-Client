import React from 'react';

const InstructorCard = ({instructor}) => {
  const { instructorImage, instructorName,instructorEmail} =instructor;
  return (
  <div className="card card-compact hover:x-50 w-[200px] h-[250px] for-transform bg-transparent  shadow-md bg-t  shadow-fuchsia-600 mx-auto">
  <figure><img className='w-[100px] h-[100px] rounded-full mt-4 border-4 border-yellow-400  img-t' src={instructorImage} alt="" /></figure>
  <div className="card-body ">
    <h2 className=" font-bold text-primary-color text-white"> <span className='text-black'>Name:</span> {instructorName}</h2>
    <p className='text-black'>{instructorEmail}</p>
    
  </div>
</div>
    );
};

export default InstructorCard;