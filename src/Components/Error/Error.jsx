import React from 'react';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>

      <TransitionGroup>
        <CSSTransition
          appear
          classNames="fade"
          timeout={1000}
        >
          <img
            src="/path/to/animated-image.gif" // Replace with the path to your animated image
            alt="404 Animation"
            className="mt-8 animate-bounce"
          />
        </CSSTransition>
      </TransitionGroup>

      <p className="mt-4 text-gray-600">Oops! The page you are looking for does not exist.</p>
    </div>
    );
};

export default Error;