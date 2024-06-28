import { Text, View } from "react-native";
import { MapPinIcon } from "react-native-heroicons/solid";

import { useFormatDate } from "../hooks/useFormatDate";
import type { CalendarItemProps } from "../types/CalendarItem";

export const CalendarItem = ({ status, action, data }: CalendarItemProps) => {
  const { day } = useFormatDate(action.scheduledDate)

  switch (status) {
    case 'Completed':
      return (
        <View className="w-full ml-4 mt-[9px] text-light">
          <Text className="text-light font-bold text-base leading-[19.2px]">{action.name}</Text>
          <Text className="text-light text-xs leading-[14.4px]">{action.vendor?.vendorName}</Text>
          <Text className="text-light text-xs font-bold leading-[14.4px]">{action.vendor?.phoneNumber}</Text>
          <View className="mt-[10px]">
            <View className="flex flex-row items-center gap-x-[2px]">
              <MapPinIcon width={10} height={10} color='#FFFFFF' />
              <Text className="text-light text-xs leading-[14.4px]">{data.customer.street}</Text>
            </View>
            <Text className="text-light text-xs font-normal leading-[14.4px]">{action.status}</Text>
          </View>
        </View>
      );
    case 'Scheduled':
      return (
        <View className="w-full ml-4 mt-[9px] text-light">
          <Text className="text-light font-bold text-base leading-[19.2px]">{action.name}</Text>
          <Text className="text-light text-xs leading-[14.4px]">{action.vendor?.vendorName}</Text>
          <Text className="text-light text-xs font-bold leading-[14.4px]">{action.vendor?.phoneNumber}</Text>
          <View className="mt-[10px]">
            <View className="flex flex-row items-center gap-x-[2px]">
              <MapPinIcon width={10} height={10} color='#FFFFFF' />
              <Text className="text-light text-xs leading-[14.4px]">{data.customer.street}</Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-light text-xs font-normal leading-[14.4px]">{action.status} </Text>
              <Text className="text-light text-xs font-normal leading-[14.4px]">{action.arrivalStartWindow} - </Text>
              <Text className="text-light text-xs font-normal leading-[14.4px]">{action.arrivalEndWindow}</Text>
            </View>
          </View>
        </View>
      );
    case 'Unscheduled':
      return (
        <View className="w-full ml-4 mt-[9px] text-light">
          <Text className="text-light font-bold text-base leading-[19.2px]">{action.name}</Text>
          <View className="mt-[10px]">
            <View className="flex flex-row items-center gap-x-[2px]">
              <MapPinIcon width={10} height={10} color='#FFFFFF' />
              <Text className="text-light text-xs leading-[14.4px]">{data.customer.street}</Text>
            </View>
            <View className="mt-2 flex flex-row items-center">
              <Text className="text-xs text-light">Unscheduled </Text>
              <Text className="text-light text-xs font-normal leading-[14.4px]">{day}</Text>
            </View>
          </View>
        </View>
      );
    default:
      return null;
  }
};
