import { IconBarrierBlock, IconSquareRoundedCheck, IconArchive } from "@tabler/icons-react";
import { ProjectStatus } from "../types/project.types";

export interface StatusBadgeConfig {
  label: string;
  icon: JSX.Element;
  color: string;
}

export function getStatusBadgeConfig(status: ProjectStatus): StatusBadgeConfig {
  switch (status) {
    case "complete":
      return {
        label: 'Complete',
        icon: <IconSquareRoundedCheck size={14} className="inline-block align-middle" />,
        color: 'green',
      };
    case "inProgress":
      return {
        label: 'In Development',
        icon: <IconBarrierBlock size={14} className="inline-block align-middle" />,
        color: 'yellow',
      };
    case "archived":
      return {
        label: 'Archived',
        icon: <IconArchive size={14} className="inline-block align-middle" />,
        color: 'gray',
      };
    default:
      throw new Error(`Invalid project status: ${status}`);
  }
} 