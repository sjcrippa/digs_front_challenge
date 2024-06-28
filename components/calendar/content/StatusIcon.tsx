import { ClockIcon } from "react-native-heroicons/outline";
import { CheckCircleIcon } from "react-native-heroicons/solid";

import type { StatusIconProps } from "../types/CalendarItem";

export const StatusIcon = ({ status }: StatusIconProps) => {
  switch (status) {
    case 'Completed':
      return <CheckCircleIcon width={16} height={16} color='#00B47D' />;
    case 'Scheduled':
      return <ClockIcon width={16} height={16} color='#00B47D' />;
    case 'Unscheduled':
      return null;
    default:
      return null;
  }
};
