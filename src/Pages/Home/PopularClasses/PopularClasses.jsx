import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ClassCard from './ClassCard';


const PopularClasses = () => {

    const [ClassData, setClassData] = useState([]);

    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())

            .then(data => (data?.map(newData=>setClassData(newData))));
    }, [])
    
      
    return (
        <section>
        <SectionTitle 
        subHeading={"The School"}
        heading={"Popular Classes"}
        ></SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {
                   ClassData?.classes?.map(Class => <ClassCard
                    Class={Class}
                   ></ClassCard>)
                }
         </div>
        
        </section>
    );
};

export default PopularClasses;