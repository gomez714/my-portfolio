import React from 'react';

const SkillsLoadingPlaceholder: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-8 lg-mx:grid-cols-1">
      {/* Frontend Section */}
      <div className="border-2 border-primaryColor rounded-lg p-6 shadow-[0_0_10px_0_#64FFDA50]">
        <div className="w-full flex justify-center mb-6">
          <div className="h-8 w-40 bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="flex items-center gap-2 bg-[#0d1117] rounded-full px-4 py-2">
              <div className="w-5 h-5 bg-gray-700 rounded-sm animate-pulse"></div>
              <div className="h-5 w-20 bg-gray-700 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Backend Section */}
      <div className="border-2 border-primaryColor rounded-lg p-6 shadow-[0_0_10px_0_#64FFDA50]">
        <div className="w-full flex justify-center mb-6">
          <div className="h-8 w-40 bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex items-center gap-2 bg-[#0d1117] rounded-full px-4 py-2">
              <div className="w-5 h-5 bg-gray-700 rounded-sm animate-pulse"></div>
              <div className="h-5 w-24 bg-gray-700 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Cloud & DevOps Section */}
      <div className="border-2 border-primaryColor rounded-lg p-6 shadow-[0_0_10px_0_#64FFDA50]">
        <div className="w-full flex justify-center mb-6">
          <div className="h-8 w-48 bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="flex items-center gap-2 bg-[#0d1117] rounded-full px-4 py-2">
              <div className="w-5 h-5 bg-gray-700 rounded-sm animate-pulse"></div>
              <div className="h-5 w-32 bg-gray-700 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Databases Section */}
      <div className="border-2 border-primaryColor rounded-lg p-6 shadow-[0_0_10px_0_#64FFDA50]">
        <div className="w-full flex justify-center mb-6">
          <div className="h-8 w-40 bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex items-center gap-2 bg-[#0d1117] rounded-full px-4 py-2">
              <div className="w-5 h-5 bg-gray-700 rounded-sm animate-pulse"></div>
              <div className="h-5 w-24 bg-gray-700 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Authentication & Security Section */}
      <div className="border-2 border-primaryColor rounded-lg p-6 shadow-[0_0_10px_0_#64FFDA50]">
        <div className="w-full flex justify-center mb-6">
          <div className="h-8 w-64 bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center gap-2 bg-[#0d1117] rounded-full px-4 py-2">
              <div className="w-5 h-5 bg-gray-700 rounded-sm animate-pulse"></div>
              <div className="h-5 w-36 bg-gray-700 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Testing & Tools Section */}
      <div className="border-2 border-primaryColor rounded-lg p-6 shadow-[0_0_10px_0_#64FFDA50]">
        <div className="w-full flex justify-center mb-6">
          <div className="h-8 w-48 bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center gap-2 bg-[#0d1117] rounded-full px-4 py-2">
              <div className="w-5 h-5 bg-gray-700 rounded-sm animate-pulse"></div>
              <div className="h-5 w-28 bg-gray-700 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsLoadingPlaceholder; 