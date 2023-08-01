import React from 'react';
import img1 from '../../../assets/bs.1.png'

const BannerSec = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
  <img src={img1} className="w-full rounded-xl" />
  <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
             <div className='text-white lg:w-50 sm:w-1/2 m-6'>
             <h3 className=' text-6xl font-bold text-yellow-300 mb-4'  >Welcome to the  Sport Academy School!</h3>
              <p className="text-2xl "> Bring home the joy of having pets with adorable pet-themed toys. <br /> At Premier Sport Academy School, we believe in the transformative power of sports education. Our institution is dedicated to nurturing young athletes and providing them with a holistic approach to academic excellence and athletic development. </p>
             </div>
             </div>
      
  </div> 
  <div id="item2" className="carousel-item w-full">
  <img src={img1} className="w-full rounded-xl" />
  <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
             <div className='text-white lg:w-50 sm:w-1/2 m-6'>
             <h3 className=' text-6xl font-bold text-yellow-300 mb-4'  >Welcome to the  Sport Academy School!</h3>
              <p className="text-2xl "> Bring home the joy of having pets with adorable pet-themed toys. <br /> At Premier Sport Academy School, we believe in the transformative power of sports education. Our institution is dedicated to nurturing young athletes and providing them with a holistic approach to academic excellence and athletic development. </p>
             </div>
             </div>
  </div> 
  <div id="item3" className="carousel-item w-full">
  <img src={img1} className="w-full rounded-xl" />
  <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
             <div className='text-white lg:w-50 sm:w-1/2 m-6'>
             <h3 className=' text-6xl font-bold text-yellow-300 mb-4'  >Welcome to the  Sport Academy School!</h3>
              <p className="text-2xl "> Bring home the joy of having pets with adorable pet-themed toys. <br /> At Premier Sport Academy School, we believe in the transformative power of sports education. Our institution is dedicated to nurturing young athletes and providing them with a holistic approach to academic excellence and athletic development. </p>
             </div>
             </div>
  </div> 
  <div id="item4" className="carousel-item w-full">
  <img src={img1} className="w-full rounded-xl" />
  <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
             <div className='text-white lg:w-50 sm:w-1/2 m-6'>
             <h3 className=' text-6xl font-bold text-yellow-300 mb-4'  >Welcome to the  Sport Academy School!</h3>
              <p className="text-2xl "> Bring home the joy of having pets with adorable pet-themed toys. <br /> At Premier Sport Academy School, we believe in the transformative power of sports education. Our institution is dedicated to nurturing young athletes and providing them with a holistic approach to academic excellence and athletic development. </p>
             </div>
             </div>
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default BannerSec;