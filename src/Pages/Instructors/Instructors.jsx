import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import LoadDataIns from './LoadDataIns';

const Instructors = () => {
    const [instructorsData, setInstructor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setInstructor(data);
              });
    }, [])
    return (
        <section>
        <SectionTitle 
        subHeading={"The School"}
        heading={" Instructors"}
        ></SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-4 gap-4">
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