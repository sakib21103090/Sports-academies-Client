import React from 'react';

const InstructorCard = ({Class}) => {
    
    const { students, instructor, name,instructorImage } =Class;
    return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
    <figure><img className='w-[400px]' src={instructorImage} alt="" /></figure>
    <div className="card-body">
      <p className="card-title"> Instructor Name : {instructor}</p>
      <p className="card-title"> class Name:{name}</p>
      <p>students :{students}</p>
      <div className="card-actions justify-end">
       
      </div>
    </div>
  </div>
    );
};

export default InstructorCard;