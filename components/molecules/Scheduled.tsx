import { Text, View } from "react-native";
import { MapPinIcon } from "react-native-heroicons/solid";
import { ClockIcon } from "react-native-heroicons/outline";

export default function Scheduled() {
  return (
    <View className='flex-1'>
      <View className="mt-1 w-[343px] h-[111px] flex-row">
        <View className="w-8 flex flex-col gap-y-[5px] items-center">
          <Text className="text-[9px] text-black/60 font-black">TUE</Text>
          <Text className="text-xl font-bold text-black/80">25</Text>
          <ClockIcon width={16} height={16} color='#00B47D' />
        </View>
        <View className="w-[311px] bg-[#006A4B] rounded">
          <View className="w-full ml-4 mt-[9px] border-yellow-500 text-white">
            <Text className="text-white font-bold text-base leading-[19.2px]">Window Cleaning</Text>
            <Text className="text-white text-xs leading-[14.4px]">Aqua Pressure and Soft Wash LLC</Text>
            <Text className="text-white text-xs font-bold leading-[14.4px]">404-964-9329</Text>
            <View className="mt-[10px]">
              <View className="flex flex-row items-center gap-x-[2px]">
                <MapPinIcon width={10} height={10} color='#FFFFFF' />
                <Text className="text-white text-xs leading-[14.4px]">4332 Northeast 22nd Avenue</Text>
              </View>
              <Text className="text-white text-xs font-normal leading-[14.4px]">Completed</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}