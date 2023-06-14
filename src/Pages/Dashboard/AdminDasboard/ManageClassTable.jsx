import React from 'react';

const ManageClassTable = ({Class,index}) => {
    const { className, classImage,instructorName,instructorImage,availableSeats,price,_id } =Class;
    return (
        <tr className=' text-black font-bold'>
        <th>{index+1}</th> 
       
      <td>{className}</td> 
      <td><img className='w-[60px] h-[40px] rounded-full' src={classImage} alt="" /></td> 
      <td>{instructorName}</td> 
      <td><img className='w-[60px] h-[40px] rounded-full' src={instructorImage} alt="" /></td> 
      <td>{price}</td> 
      <td>{availableSeats}</td> 
      <td>
      <button className="btn btn-outline btn-sm w-[70px] bg-blue-400">Approve</button>
        </td>
      <td>
      <button className="btn btn-outline btn-sm w-[60px] bg-blue-400">Deny</button>
        </td>
      <td>
      <button className="btn btn-outline btn-sm w-[70px] bg-blue-400">FeedBack</button>
        </td>
      
      
        
      </tr>
    );
};

export default ManageClassTable;