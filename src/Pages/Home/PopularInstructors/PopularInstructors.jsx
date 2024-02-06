import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import InstructorCard from './InstructorCard';

const PopularInstructors = () => {
    const [InstructorData, setInstructorData] = useState([]);
    useEffect(() => {
        fetch('https://sport-academy-server-v2.vercel.app/instructor')
            .then(res => res.json())

            .then((data) => {
                
                setInstructorData(data);
              });
    }, [])
      
    return (
        <section className='pt-12 bg-body pb-8'>
        <SectionTitle 
        subHeading={"The Academy"}
        heading={"Popular Instructor"}
        ></SectionTitle>

          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-10 max-w-screen-xl mx-auto gap-4">
          {
                   InstructorData?.map(instructor => <InstructorCard
                    key={instructor._id}
                    instructor={instructor}
                   ></InstructorCard>)
                }
         </div>
        
        </section>
    );
};

export default PopularInstructors;