import React from 'react';

const AboutLoadingPlaceholder: React.FC = () => {
  return (
    <div 
      className="flex relative overflow-hidden justify-around items-center font-mono px-10 
        py-10 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse 
        bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6 animate-fade-in"
      role="status"
      aria-label="Loading about section"
    >
      <div className="bs:ml-10 bs:w-3/5 flex flex-col gap-4 lg-mx:gap-3 bs-mx:items-center">
        {/* "Hi, I am" placeholder */}
        <div className="h-8 w-24 bg-gray-700 rounded animate-pulse"></div>
        
        {/* Name placeholder - "Luis Gomez" */}
        <div className="h-24 w-96 bg-gray-700 rounded animate-pulse lg-mx:h-20 sm-mx:h-16 xs-mx:h-12"></div>
        
        {/* "I'm a Software Engineer" placeholder */}
        <div className="h-12 w-80 bg-gray-700 rounded animate-pulse lg-mx:h-10 sm-mx:h-8"></div>
        
        {/* Bio placeholder - desktop version */}
        <div className="hidden lg:block space-y-3 w-[90%] my-8">
          <div className="h-5 w-full bg-gray-700 rounded animate-pulse"></div>
          <div className="h-5 w-[95%] bg-gray-700 rounded animate-pulse"></div>
          <div className="h-5 w-[90%] bg-gray-700 rounded animate-pulse"></div>
          <div className="h-5 w-full bg-gray-700 rounded animate-pulse"></div>
          <div className="h-5 w-[85%] bg-gray-700 rounded animate-pulse"></div>
          <div className="h-5 w-[92%] bg-gray-700 rounded animate-pulse"></div>
          <div className="h-5 w-[88%] bg-gray-700 rounded animate-pulse"></div>
          <div className="h-5 w-[94%] bg-gray-700 rounded animate-pulse"></div>
          <div className="h-5 w-[89%] bg-gray-700 rounded animate-pulse"></div>
          <div className="h-5 w-[91%] bg-gray-700 rounded animate-pulse"></div>
        </div>
        
        {/* Bio placeholder - mobile version */}
        <div className="lg:hidden h-48 w-[90%] bg-gray-700 rounded animate-pulse my-8"></div>
        
        {/* Button placeholders */}
        <div className="flex gap-6 xs-mx:w-[90%] xs-mx:justify-between">
          <div className="h-11 w-36 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-11 w-36 bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Profile image placeholder */}
      <div className="h-fit flex justify-center items-center rounded-full bs:mr-10 w-fit">
        <div className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 rounded-full bg-gray-700 animate-pulse"></div>
      </div>
    </div>
  );
};

export default AboutLoadingPlaceholder; 