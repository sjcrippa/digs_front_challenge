import { ScrollView, Text, View } from "react-native";
import Completed from "../molecules/Completed";
import Scheduled from "../molecules/Scheduled";
import Unscheduled from "../molecules/Unscheduled";

export default function CalendarView() {
  return (
    <ScrollView>
      <View className="flex-1 bg-white">
        <View className="bg-white px-4">
          <Text className="mt-[21px] text-base font-bold leading-[19.2px] text-black/80">June 2024</Text>
          <Completed />
          <Scheduled />
          <Unscheduled />
        </View>
      </View>
    </ScrollView>
  )
}
