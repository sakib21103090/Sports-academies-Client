import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
             <div className="mx-auto text-center  md:w-4/12 ">
            <p className=" text-lime-600  font-bold text-2xl mb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase text-purple-700 border-y-4 py-2">{heading}</h3>
        </div>
        </div>
    );
};

export default SectionTitle;
