import React from 'react';

const ClassCard = ({Class}) => {

    const { students, image, instructor, name } =Class;
    return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
    <figure><img className='w-[400px]' src={image} alt="" /></figure>
    <div className="card-body">
      <h2 className="card-title"> class Name: {name}</h2>
      <p>students :{students}</p>
      <div className="card-actions justify-end">
       
      </div>
    </div>
  </div>
    );
};

export default ClassCard;