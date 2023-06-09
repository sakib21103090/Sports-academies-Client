import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import InstructorCard from './InstructorCard';

const PopularInstructors = () => {
    const [InstructorData, setInstructorData] = useState([]);

    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())

            .then(data => (data?.map(newData=>setInstructorData(newData))));
    }, [])
      
      
    return (
        <section>
        <SectionTitle 
        subHeading={"The School"}
        heading={"Popular Instructor"}
        ></SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {
                   InstructorData?.classes?.map(Class => <InstructorCard
                    Class={Class}
                   ></InstructorCard>)
                }
         </div>
        
        </section>
    );
};

export default PopularInstructors;