import { Text, View } from "react-native";
import { CheckCircleIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/solid"

import { useFetch } from "@/hooks/useFetch";

export default function Completed() {
  const { data, loading } = useFetch("https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge");

  if (loading) return <Text>Loading...</Text>;

  return (
    <View className="flex-1">
      <View className="mt-[25px] w-[343px] h-[111px] flex-row">
        <View className="w-8 flex flex-col gap-y-[5px] items-center">
          <Text className="text-[9px] text-black/60 font-black">WED</Text>
          <Text className="text-xl font-bold text-black/80">4</Text>
          <CheckCircleIcon width={16} height={16} color='#00B47D' />
        </View>
        <View className="w-[311px] bg-[#00B47D] rounded">
          <View className="w-full ml-4 mt-[9px] border-yellow-500 text-white">
            <Text className="text-white font-bold text-base leading-[19.2px]">{data?.calendar[0].actions[0].name}</Text>
            <Text className="text-white text-xs leading-[14.4px]">{data?.calendar[0].actions[0].vendor?.vendorName}</Text>
            <Text className="text-white text-xs font-bold leading-[14.4px]">{data?.calendar[0].actions[0].vendor?.phoneNumber}</Text>
            <View className="mt-[10px]">
              <View className="flex flex-row items-center gap-x-[2px]">
                <MapPinIcon width={10} height={10} color='#FFFFFF' />
                <Text className="text-white text-xs leading-[14.4px]">{data?.customer.street}</Text>
              </View>
              <Text className="text-white text-xs font-normal leading-[14.4px]">{data?.status}</Text>

            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
