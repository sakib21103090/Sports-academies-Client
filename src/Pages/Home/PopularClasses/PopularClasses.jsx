import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ClassCard from './ClassCard';


const PopularClasses = () => {

    const [ClassData, setClassData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())

            .then((data) => {
                
                setClassData(data);
              });
    }, [])
    
      
    return (
        <section>
        <SectionTitle 
        subHeading={"The School"}
        heading={"Popular Classes"}
        ></SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-4 gap-4">
          {
                 ClassData?.map(Class => <ClassCard
                    key={Class._id}
                  Class={Class}
                 ></ClassCard>)
              }
         </div>
        
        </section>
    );
};

export default PopularClasses;