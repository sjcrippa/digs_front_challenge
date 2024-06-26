import { ScrollView, Text, View } from "react-native";
import { CheckCircleIcon, MapPinIcon } from "react-native-heroicons/solid";

import { useFetch } from "@/hooks/useFetch";

export default function CalendarListContainer() {
  const { data, loading } = useFetch("https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge");

  if (loading) return <Text>Loading...</Text>;

  const monthsNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ]

  return (
    <View className="w-full">
      {
        data?.calendar.map((value) => (
          <View className="flex flex-col border">
            <View className="flex flex-row gap-2">
              <Text key={value.month} className="mt-[21px] text-base font-bold leading-[19.2px] text-black/80">
                {`${value.month === 0 ? 'December' : monthsNames[value.month - 1]} ${value.year}`}
              </Text>
            </View>
            {value.actions.map((action) => (
              <View key={action.id} className="mt-[25px] w-[343px] h-[111px] flex-row">
                <View className="w-8 flex flex-col gap-y-[5px] items-center">
                  <Text className="text-[9px] text-black/60 font-black">WED</Text>
                  <Text className="text-xl font-bold text-black/80">4</Text>
                  <CheckCircleIcon width={16} height={16} color='#00B47D' />
                </View>
                <View className="w-[311px] bg-[#00B47D] rounded">
                  <View className="w-full ml-4 mt-[9px] border-yellow-500 text-white">
                    <Text className="text-white font-bold text-base leading-[19.2px]">{action.name}</Text>
                    <Text className="text-white text-xs leading-[14.4px]">{action.vendor?.vendorName}</Text>
                    <Text className="text-white text-xs font-bold leading-[14.4px]">{action.vendor?.phoneNumber}</Text>
                    <View className="mt-[10px]">
                      <View className="flex flex-row items-center gap-x-[2px]">
                        <MapPinIcon width={10} height={10} color='#FFFFFF' />
                        <Text className="text-white text-xs leading-[14.4px]">{data.customer.street}</Text>
                      </View>
                      <Text className="text-white text-xs font-normal leading-[14.4px]">{action.status}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))
      }
    </View>
  )
}
