import React from 'react';

const MYClassCard = ({Class,index}) => {
  
console.log(Class)
    return (
        
        <tr className=' text-black '>
        <th>{index+1}</th> 
       
      <td>{Class.className}</td> 
      <td><img className='w-[60px] rounded-xl' src={Class.classImage} alt="" /></td> 
      <td>{Class.price}</td> 
      <td>{Class.students}</td> 
      <td>
      <button className="btn btn-outline btn-sm 
       bg-lime-500">pending</button>
        </td>
      
      <td>
      <button className="btn btn-outline btn-sm  bg-lime-500">Update</button>
        </td>
        
      </tr>
    );
};

export default MYClassCard;