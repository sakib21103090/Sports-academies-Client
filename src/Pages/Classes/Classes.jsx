import React, { useEffect, useState } from 'react';
import ClassCard from '../Home/PopularClasses/ClassCard';
import AllCardClass from './AllCardClass';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Classes = () => {
    const [classesData, setClassesData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setClassesData(data);
              });
    }, [])
      
    return (

        <section className='p-28'>
        <SectionTitle 
        subHeading={"The School"}
        heading={" Classes"}
        ></SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 gap-4 ">
        {
                 classesData?.map(Class => <AllCardClass
                    key={Class._id}
                  Class={Class}
                 ></AllCardClass>)
              }
       </div>
       </section>
    );
};

export default Classes;