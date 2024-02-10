import React from 'react';

const ManageClassTable = ({Class,index}) => {
    const { className, classImage,instructorName,instructorImage,availableSeats,price,_id } =Class;
    return (
        <tr className=' text-black font-bold'>
        <th>{index+1}</th> 
       
      <td>{className}</td> 
      <td><img className='w-[60px] h-[40px] rounded-xl' src={classImage} alt="" /></td> 
      <td>{instructorName}</td> 
      <td><img className='w-[60px] h-[40px] rounded-xl' src={instructorImage} alt="" /></td> 
      <td>{price}</td> 
      <td>{availableSeats}</td> 
      <td>
      <button className="btn btn-outline btn-sm  bg-lime-500">Approve</button>
        </td>
      <td>
      <button className="btn btn-outline btn-sm  bg-lime-500">Deny</button>
        </td>
      <td>
      <button className="btn btn-outline btn-sm  bg-lime-500">FeedBack</button>
        </td>
      
      
        
      </tr>
    );
};

export default ManageClassTable;