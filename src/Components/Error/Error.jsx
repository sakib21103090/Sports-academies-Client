import React from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const Error = () => {
    return (
        <div className="hero min-h-screen bg-blue-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    <TransitionGroup>
          <CSSTransition
            appear
            classNames="fade"
            timeout={1000}
          >
            <h1 className="text-4xl font-bold text-sky-900 mt-8 animate-bounce">
                ------------------------------------------ <br />
              -----------404 - Page Not Found------ <br />
              ------------------------------------------
            </h1>
          </CSSTransition>
        </TransitionGroup>
    <TransitionGroup>
          <CSSTransition
            appear
            classNames="fade"
            timeout={1000}
          >
            <p className="mt-4  mb-4 text-black text-center animate-fade">
              Oops! The page you are looking for does not exist. <br />
              Please check the URL or return to the homepage. <br />
              <h4 className='m-6'><Link to="/" className="bg-sky-500 text-white px-4 py-2 rounded-md">
        Go Back to Home
      </Link></h4>
              
            </p>
          </CSSTransition>
        </TransitionGroup>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      
      <TransitionGroup>
          <CSSTransition
            appear
            classNames="fade"
            timeout={1000}
          >
            <img
              src={`https://i.ibb.co/LxybD55/A-40ion.jpg`} 
              alt="404 Animation"
              className="mt-8 animate-bounce rounded"
            />
          </CSSTransition>
        </TransitionGroup>
        </div>
      </div>
    </div>
 

      
      
    );
};

export default Error;