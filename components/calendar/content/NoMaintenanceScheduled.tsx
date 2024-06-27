import { Text, View } from "react-native";

export default function NoMaintenanceScheduled() {
  return (
    <View className="w-full ml-8">
      <View className="w-[311px] h-11 bg-[#848FA5] rounded">
        <Text className=" ml-4 py-2 text-base font-bold text-light">No Maintenance Scheduled</Text>
      </View>
    </View>
  )
}