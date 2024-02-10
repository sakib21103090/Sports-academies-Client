import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import LoadDataIns from './LoadDataIns';
import { Helmet } from 'react-helmet';

const Instructors = () => {
    const [instructorsData, setInstructor] = useState([]);

    useEffect(() => {
        fetch('https://sport-academy-server-v2.vercel.app/instructors')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setInstructor(data);
              });
    }, [])
    return (
        <section className='p-28 '>
             <Helmet>
           <title>Sports-Academies | Instructors</title>
         </Helmet>
        <SectionTitle 
        subHeading={"The School"}
        heading={" Instructors"}
        ></SectionTitle>
        

        <div className="grid   max-w-screen-xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-4 gap-4  lg:ml-20 ">
        {
                 instructorsData?.map(instructor => <LoadDataIns
                    key={instructor._id}
                    instructor={instructor}
                 ></LoadDataIns>)
              }
       </div>
       </section>
    );
};

export default Instructors;