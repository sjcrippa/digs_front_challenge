import { ScrollView, Text, View } from "react-native";

import CalendarListContainer from "./content/CalendarListContainer";

export default function CalendarView() {
  return (
    <ScrollView>
      <View className="flex-1 bg-white">
        <View className="bg-white px-4">
          <CalendarListContainer />
        </View>
      </View>
    </ScrollView>
  )
}
