import { Text, View } from "react-native";

export default function Loading() {
  return (
    <View className='w-full h-screen flex justify-center place-items-center -translate-y-24'>
      <Text className="text-xl font-bold text-center">Loading...</Text>
    </View>
  )
}