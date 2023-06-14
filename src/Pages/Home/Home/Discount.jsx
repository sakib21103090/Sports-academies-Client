import React from 'react';
import Marquee from "react-fast-marquee";
const Discount = () => {
    return (
         
       
        <div className='mb-12'>
            <div>
                <h2 className='text-primary-color  font-bold text-4xl text-center mb-6 mt-12'> All the Class 40% Discount</h2>
            </div>
            <Marquee>
  <div className="flex  gap-4 m-4">
        <div className="aos-item" data-aos="fade-up">
        <div className="card card-compact  bg-sky-300 shadow-xl mx-auto">
<figure><img className='w-[300px] h-[200px] p-2 rounded ' src={`https://i.ibb.co/MRX3KZ4/backetball-class.jpg`} /></figure>
<div className="card-body">
  <h2 className="card-title text-primary-color text-2xl"> backetball </h2>
  <p className=' text-primary-color'>Available Seats:49</p>
  <p className='text-primary-color '>Price:$85</p>
  <div className="card-actions justify-end">
 
  </div>
</div>
</div>
        </div>
        <div className="aos-item" data-aos="fade-up">
        <div className="card card-compact  bg-sky-300 shadow-xl mx-auto">
<figure><img className='w-[300px] h-[200px] p-2 rounded ' src={`https://i.ibb.co/5KwDjSw/mertial-arts.jpg`} /></figure>
<div className="card-body ">
  <h2 className="card-title text-primary-color text-2xl"> mertial-arts </h2>
  <p className=' text-primary-color'>Available Seats:35</p>
  <p className='text-primary-color '>Price:$65</p>
  <div className="card-actions justify-end">
 
  </div>
</div>
</div>
        </div>
        <div className="aos-item" data-aos="fade-up">
        <div className="card card-compact  bg-sky-300 shadow-xl mx-auto">
<figure><img className='w-[300px] h-[200px] p-2 rounded ' src={`https://i.ibb.co/cXQPXsd/volley2.jpg`} /></figure>
<div className="card-body ">
  <h2 className="card-title text-primary-color text-2xl"> volley </h2>
  <p className=' text-primary-color'>Available Seats :35</p>
  <p className='text-primary-color '>Price:$65</p>
  <div className="card-actions justify-end">
 
  </div>
</div>
</div>
        </div>
        <div className="aos-item" data-aos="fade-up">
        <div className="card card-compact  bg-sky-300 shadow-xl mx-auto">
<figure><img className='w-[300px] h-[200px] p-2 rounded ' src={"https://i.ibb.co/4Z8mK5V/crickets.jpg"} /></figure>
<div className="card-body ">
  <h2 className="card-title text-primary-color text-2xl"> crickets </h2>
  <p className=' text-primary-color'>Available Seats :48</p>
  <p className='text-primary-color '>Price:$65</p>
  <div className="card-actions justify-end">
 
  </div>
</div>
</div>
        </div>
        </div>
</Marquee>
        </div>
      
    );
};

export default Discount;