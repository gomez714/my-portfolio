import React from 'react';
import { Timeline, useMatches } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";

const ExperienceLoadingPlaceholder: React.FC = () => {
  const size = useMatches({
    xs: 15,
    md: 20,
  });

  const dot = useMatches({
    xs: 25,
    md: 30,
  });

  return (
    <Timeline color="primaryColor" active={5} bulletSize={dot} lineWidth={2}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Timeline.Item 
          key={index} 
          bullet={<IconBriefcaseFilled className="!text-bgColor" size={size} />}
          className="!pt-12 !mb-2 sm-mx:!p-1"
        >
          <div className="border shadow-[0_0_10px_0_#64FFDA50] border-primaryColor p-4 rounded-2xl sm-mx:p-2">
            {/* Company header */}
            <div className="flex gap-2 items-center mb-4">
              {/* Company logo */}
              <div className="w-20 h-20 md-mx:w-16 md-mx:h-16 bg-gray-700 rounded-lg animate-pulse"></div>
              <div className="flex flex-col gap-2">
                {/* Role */}
                <div className="h-8 w-64 bg-gray-700 rounded animate-pulse sm-mx:h-6"></div>
                {/* Company and date */}
                <div className="h-6 w-48 bg-gray-700 rounded animate-pulse sm-mx:h-4"></div>
              </div>
            </div>
            
            {/* Description */}
            <div className="space-y-2 mb-4">
              <div className="h-4 w-full bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-[95%] bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-[90%] bg-gray-700 rounded animate-pulse"></div>
            </div>
            
            {/* Skills */}
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-gray-700 rounded animate-pulse"></div>
              <div className="flex flex-wrap gap-2">
                <div className="h-6 w-20 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-6 w-24 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-6 w-16 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-6 w-20 bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </Timeline.Item>
      ))}
      <Timeline.Item bullet={<IconBriefcaseFilled className="!text-bgColor" size={size} />}></Timeline.Item>
    </Timeline>
  );
};

export default ExperienceLoadingPlaceholder; 