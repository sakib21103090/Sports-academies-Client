import React, { useEffect, useState } from 'react';
import ManageClassTable from './ManageClassTable';

const ManageClasses = () => {
    const [classesData, setClassesData] = useState([]);

    useEffect(() => {
        fetch('https://sport-academy-server-v2.vercel.app/classes')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setClassesData(data);
              });
    }, [])
      
    return (

        <table className="table w-full border-l-2 border-lime-500 border-r-2 border-b-2 mt-10">
        <thead>
          <tr className="text-black   bg-lime-500 font-extrabold">
            <th>#</th>  
            <th>Class Name</th> 
            <th>classImage</th> 
            <th>instructorName</th> 
            <th>instructorImage</th>
            <th>availableSeats</th>
            <th>price</th>
            <th>Approve</th>
            <th>Deny </th>
            
            <th>feedBack</th>
            
          </tr>
        </thead> 
        <tbody>
        {classesData?.map((Class, index) => (
                        <ManageClassTable
                        Class={Class}
                        key={Class._id}
                        index={index}
                        ></ManageClassTable>
                ))}
        </tbody> 
        
      </table>
       
    );
};

export default ManageClasses;