import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Components/Providers/AuthProviders';
import MYClassCard from './MYClassCard';

const MyClasses = () => {
    const [myClasses, setMyClasses] = useState([]);
    const { user } = useContext(AuthContext);
    
    
    useEffect(() => {
        fetch(`https://sport-academy-server.vercel.app/myClass/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setMyClasses(data);
          });
      }, [user]);
       console.log(myClasses)
    return (
        <div>
        
        {/* <Helmet>
        <title>Animal-Toy-planet |My Toy</title>
      </Helmet> */}
      <div>

      </div>
      <h1 className="text-center p-4  text-4xl font-bold">My Classes</h1>
  
      <div className='m-[40px]'>
      <div className="overflow-x-auto ">
  <table className="table  w-full">
    <thead>
      <tr className="text-lime-700">
        <th>#</th>  
        <th>Class Name</th> 
        <th>Image</th> 
        <th>Price</th> 
        <th>Students</th>
        <th>Status</th>
        <th>Update</th>
        
      </tr>
    </thead> 
    <tbody>
    {myClasses?.map((Class, index) => (
                    <MYClassCard
                    Class={Class}
                    key={Class._id}
                    index={index}
                    ></MYClassCard>
            ))}
    </tbody> 
    
  </table>
</div>
      </div>
  </div>
    );
};

export default MyClasses;