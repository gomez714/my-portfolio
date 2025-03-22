import React from 'react';

interface LoadingPlaceholderProps {
  count?: number;
  className?: string;
  ariaLabel?: string;
}

const LoadingPlaceholder: React.FC<LoadingPlaceholderProps> = ({ 
  count = 4, 
  className = "",
  ariaLabel = "Loading content"
}) => {
  return (
    <div 
      className={`flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2`}
      role="status"
      aria-label={ariaLabel}
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`w-[32%] lg-mx:w-[46%] md-mx:w-[48%] sm-mx:w-[90%] xs-mx:w-full ${className}`}
        >
          <div className="bg-gray-700 rounded-lg border-2 border-primaryColor min-h-[480px] p-3 animate-pulse">
            {/* Image placeholder */}
            <div className="h-[200px] w-full bg-gray-600 rounded-xl mb-3"></div>
            
            {/* Title placeholder */}
            <div className="h-8 w-3/4 bg-gray-600 rounded mb-3"></div>
            
            {/* Tech badges placeholder */}
            <div className="flex gap-2 mb-3">
              <div className="h-6 w-16 bg-gray-600 rounded"></div>
              <div className="h-6 w-16 bg-gray-600 rounded"></div>
              <div className="h-6 w-16 bg-gray-600 rounded"></div>
            </div>
            
            {/* Status badge placeholder */}
            <div className="h-6 w-20 bg-gray-600 rounded mb-3"></div>
            
            {/* Description placeholder */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-600 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-600 rounded"></div>
              <div className="h-4 w-4/6 bg-gray-600 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-600 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-600 rounded"></div>
            </div>
            
            {/* Button placeholder */}
            <div className="h-8 w-24 bg-gray-600 rounded mt-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingPlaceholder; 