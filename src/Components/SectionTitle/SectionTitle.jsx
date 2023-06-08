import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
             <div className="mx-auto text-center md:w-4/12 my-8">
            <p className=" text-yellow-600 mb-2">--- {subHeading} ---</p>
            <h3 className="text-2xl uppercase text-green-600 border-y-4 py-2">{heading}</h3>
        </div>
        </div>
    );
};

export default SectionTitle;
