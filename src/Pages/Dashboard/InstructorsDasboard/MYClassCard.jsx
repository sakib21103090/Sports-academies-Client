import React from 'react';

const MYClassCard = ({Class,index}) => {
  
console.log(Class)
    return (
        
        <tr className=' text-black font-bold'>
        <th>{index+1}</th> 
       
      <td>{Class.className}</td> 
      <td><img className='w-[60px] rounded-full' src={Class.classImage} alt="" /></td> 
      <td>{Class.price}</td> 
      <td>{Class.students}</td> 
      <td>
      <button className="btn btn-outline btn-sm w-[70px] bg-slate-900 text-white ">pending</button>
        </td>
      
      <td>
      <button className="btn btn-outline btn-sm w-[60px] bg-slate-900 text-white ">Update</button>
        </td>
        
      </tr>
    );
};

export default MYClassCard;