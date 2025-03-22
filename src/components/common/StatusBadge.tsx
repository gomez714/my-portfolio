import { Badge, useMatches } from "@mantine/core";
import { ProjectStatus } from "../../types/project.types";

import { getStatusBadgeConfig } from "@/utils/statusUtils";

interface StatusBadgeProps {
  status: ProjectStatus;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const size = useMatches({
    xsm: "sm" as const, 
    md: "md" as const, 
    lg: "lg" as const
  });

  const config = getStatusBadgeConfig(status);

  return (
    <Badge 
      className="!px-1 min-w-[100px] text-center flex items-center gap-1.5" 
      size={size} 
      color={config.color} 
      leftSection={config.icon}
    >
      {config.label}
    </Badge>
  );
};

export default StatusBadge; 