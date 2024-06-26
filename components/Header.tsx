import { Text, View } from "react-native";

export default function Header() {
  return (
    <View className="w-full h-[84px] flex items-center justify-end bg-white border-b-[0.5px] border-[#DCDCDC]">
      <Text className="text-base font-bold mb-[15px] text-black/80">Calendar</Text>
    </View>
  )
}
