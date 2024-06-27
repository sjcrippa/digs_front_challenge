import { ClockIcon } from "react-native-heroicons/outline";
import { CheckCircleIcon } from "react-native-heroicons/solid";

export const StatusIcon = (status: string) => {
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
