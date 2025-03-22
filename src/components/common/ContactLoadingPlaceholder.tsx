import React from 'react';

const ContactLoadingPlaceholder: React.FC = () => {
  return (
    <div className="w-[95%] lg-mx:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto border border-primaryColor rounded-[2rem] p-8 sm-mx:p-4">
      <div className="rounded-2xl p-8 sm-mx:p-4">
        {/* "Let's Connect" title with icon */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-10 w-48 bg-gray-700 rounded animate-pulse"></div>
          <div className="w-8 h-8 bg-gray-700 rounded animate-pulse"></div>
        </div>

        {/* Input fields with floating labels */}
        <div className="space-y-6">
          {/* Name input */}
          <div className="relative">
            <div className="absolute -top-2 left-4 px-2">
              <div className="h-4 w-12 bg-gray-700 rounded animate-pulse"></div>
            </div>
            <div className="h-14 w-full bg-gray-700 rounded-lg animate-pulse"></div>
          </div>

          {/* Email input */}
          <div className="relative">
            <div className="absolute -top-2 left-4 px-2">
              <div className="h-4 w-14 bg-gray-700 rounded animate-pulse"></div>
            </div>
            <div className="h-14 w-full bg-gray-700 rounded-lg animate-pulse"></div>
          </div>

          {/* Phone input */}
          <div className="relative">
            <div className="absolute -top-2 left-4 px-2">
              <div className="h-4 w-14 bg-gray-700 rounded animate-pulse"></div>
            </div>
            <div className="h-14 w-full bg-gray-700 rounded-lg animate-pulse"></div>
          </div>

          {/* Message input - taller than others */}
          <div className="relative">
            <div className="absolute -top-2 left-4 px-2">
              <div className="h-4 w-20 bg-gray-700 rounded animate-pulse"></div>
            </div>
            <div className="h-32 w-full bg-gray-700 rounded-lg animate-pulse"></div>
          </div>

          {/* Send button with arrows */}
          <div className="flex items-center justify-center">
            <div className="h-12 w-full bg-gray-700 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLoadingPlaceholder; 