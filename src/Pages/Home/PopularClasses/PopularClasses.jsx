import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ClassCard from './ClassCard';


const PopularClasses = () => {

    const [ClassData, setClassData] = useState([]);

    useEffect(() => {
        fetch('https://sport-academy-server-v2.vercel.app/class')
            .then(res => res.json())

            .then((data) => {
                
                setClassData(data);
              });
    }, [])
    
      
    return (
        <div className='bg-body  pb-8 pt-12'>
        <section>
        <SectionTitle 
        subHeading={"The Academy"}
        heading={"Popular Classes"}
        ></SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-10 max-w-screen-xl mx-auto gap-4">
          {
                 ClassData?.map(Class => <ClassCard
                    key={Class._id}
                  Class={Class}
                 ></ClassCard>)
              }
         </div>
        
        </section>
        </div>
    );
};

export default PopularClasses;