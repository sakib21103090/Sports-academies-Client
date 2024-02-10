import React from 'react';
import Marquee from "react-fast-marquee";
const Discount = () => {
    return (
         
       
        <div className='mb-12'>
            <div>
                <h2 className='text-primary-color  font-bold text-4xl text-center mb-12 mt-14'> All the Class 40% Discount</h2>
            </div>
            <Marquee>
  <div className="flex  gap-4 m-4">
        <div>
        <div className="card card-compact  shadow-xl mx-auto  C-body">
<figure><img className='w-[230px] h-[180px] rounded-b-3xl ' src={`https://i.ibb.co/MRX3KZ4/backetball-class.jpg`} /></figure>
<div className="card-body text-blue-800">
  <h2 className="card-title "> <span className='font-bold text-black'>Name:</span> Backetball </h2>
  <p className=' text-primary-color'><span className='font-bold text-black'>Available Seats: </span>31</p>
  <p className='text-primary-color '><span className='font-bold text-black'>Price:</span>$85</p>
   
  <div className="card-actions justify-end">
 
  </div>
</div>
</div>
        </div>
        <div>
        <div className="card card-compact   shadow-xl mx-auto  C-body">
<figure><img className='w-[230px] h-[180px] rounded-b-3xl   ' src={`https://i.ibb.co/cXQPXsd/volley2.jpg`} /></figure>
<div className="card-body text-blue-800">
  <h2 className="card-title  text-2xl"><span className='font-bold text-black'>Name:</span> Volley </h2>
  <p className=' text-primary-color'><span className='font-bold text-black'>Available Seats : </span>54</p>
  <p className='text-primary-color '><span className='font-bold text-black'>Price:</span>$65</p> 
  <div className="card-actions justify-end">
 
  </div>
</div>
</div>
        </div>
        <div>
        <div className="card card-compact  shadow-xl mx-auto  C-body">
<figure><img className='w-[230px] h-[180px] rounded-b-3xl   ' src={"https://i.ibb.co/4Z8mK5V/crickets.jpg"} /></figure>
<div className="card-body text-blue-800">
  <h2 className="card-title  text-2xl"><span className='font-bold text-black'>Name:</span> Crickets </h2>
  <p className=' text-primary-color'><span className='font-bold text-black'>Available Seats : </span>8</p>
  <p className='text-primary-color '><span className='font-bold text-black'>Price:</span>$65</p> 
  <div className="card-actions justify-end">
 
  </div>
</div>
</div>
        </div>
        <div>
        <div className="card card-compact   shadow-xl mx-auto C-body">
<figure><img className='w-[230px] h-[180px] rounded-b-3xl   ' src={`https://i.ibb.co/KNGYZcW/yoga.jpg`} /></figure>
<div className="card-body  text-blue-800">
  <h2 className="card-title  text-2xl"><span className='font-bold text-black'>Name:</span>arts </h2>
  <p className=' text-primary-color'><span className='font-bold text-black'>Available Seats : </span>54</p>
  <p className='text-primary-color '><span className='font-bold text-black'>Price:</span>$65</p> 
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