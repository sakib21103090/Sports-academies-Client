import React from 'react';
import img1 from '../../../assets/bs.2.png'
import img2 from '../../../assets/bs.1.png'
import img3 from '../../../assets/bs3.png'          
import img4 from '../../../assets/bs4.png'
import img5 from '../../../assets/bs5.png'
//for import images 


const Banner = () => {
    return (
        <div className="carousel h-[600px] max-w-screen-2xl mx-auto ">
        <div id="slide1" className="carousel-item relative w-full"> {/* slider one */}
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
             <div className='text-white lg:w-50 sm:w-1/2 m-6'>
             <h3 className=' text-6xl font-bold text-yellow-300 mb-4'  >Welcome to the  Sport Academy School!</h3>
              <p className="text-2xl max-w-xl"> Bring home the joy of having pets with adorable pet-themed toys. <br /> At Premier Sport Academy School, we believe in the transformative power of sports education. Our institution is dedicated to nurturing young athletes and providing them with a holistic approach to academic excellence and athletic development. </p>
             </div>
      
      
          </div>
          <div className="absolute flex  justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide5" className="btn btn-circle  bg-green-600 mr-4">❮</a> 
            <a href="#slide2" className="btn btn-circle bg-red-600 ">❯</a>
          </div>
        </div> 

        <div id="slide2" className="carousel-item relative w-full"> {/* slider 2 */}
          <img src={img2}  className="w-full rounded-xl" />
          <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
          <div className='text-white lg:w-50 sm:w-1/2 m-6'>
          <h3 className=' text-6xl font-bold text-yellow-300 mb-4'  >Welcome to the  Sport Academy School!</h3>
              <p className="text-2xl "> Bring home the joy of having pets with adorable pet-themed toys. <br /> At Premier Sport Academy School, we believe in the transformative power of sports education. Our institution is dedicated to nurturing young athletes and providing them with a holistic approach to academic excellence and athletic development. </p>
             </div>
      
      
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle bg-green-600 mr-4">❮</a> 
            <a href="#slide3" className="btn btn-circle bg-red-600 ">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3}  className="w-full rounded-lg" />{/* slider 3 */}
          <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
          <div className='text-white lg:w-50 sm:w-1/2 m-6'>
          <h3 className=' text-6xl font-bold text-yellow-300 mb-4'  >Welcome to the  Sport Academy School!</h3>
              <p className="text-2xl "> Bring home the joy of having pets with adorable pet-themed toys. <br /> At Premier Sport Academy School, we believe in the transformative power of sports education. Our institution is dedicated to nurturing young athletes and providing them with a holistic approach to academic excellence and athletic development. </p>
             </div>
      
      
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle bg-green-600 mr-4">❮</a> 
            <a href="#slide4" className="btn btn-circle bg-red-600 ">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4}  className="w-full rounded-lg" />{/* slider 4 */}
          <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
          <div className='text-white lg:w-50 sm:w-1/2 m-6'>
          <h3 className=' text-6xl font-bold text-yellow-300 mb-4'  >Welcome to the  Sport Academy School!</h3>
              <p className="text-2xl "> Bring home the joy of having pets with adorable pet-themed toys. <br /> At Premier Sport Academy School, we believe in the transformative power of sports education. Our institution is dedicated to nurturing young athletes and providing them with a holistic approach to academic excellence and athletic development. </p>
             </div>
      
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle  bg-green-600 mr-4">❮</a> 
            <a href="#slide5" className="btn btn-circle bg-red-600 ">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5}  className="w-full rounded-lg" />{/* slider 5 */}
          <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
          <div className='text-white lg:w-50 sm:w-1/2 m-6'>
          <h3 className=' text-6xl font-bold text-yellow-300 mb-4'  >Welcome to the  Sport Academy School!</h3>
              <p className="text-2xl "> Bring home the joy of having pets with adorable pet-themed toys. <br /> At Premier Sport Academy School, we believe in the transformative power of sports education. Our institution is dedicated to nurturing young athletes and providing them with a holistic approach to academic excellence and athletic development. </p>
             </div>
      
      
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle  bg-green-600  mr-4">❮</a> 
            <a href="#slide1" className="btn btn-circle bg-red-600 ">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;