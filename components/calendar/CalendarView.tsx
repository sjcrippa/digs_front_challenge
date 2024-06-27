import { ScrollView, View } from "react-native";

import CalendarItemContainer from "./content/CalendarItemContainer";

export default function CalendarView() {
  return (
    <ScrollView>
      <View className="flex-1 bg-white">
        <View className="bg-white px-4">
          <CalendarItemContainer />
        </View>
      </View>
    </ScrollView>
  )
}
