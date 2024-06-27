import { ActivityIndicator, Text, View } from "react-native";

export default function Loading() {
  return (
    <View className='w-full h-screen flex flex-col gap-y-2 justify-center place-items-center -translate-y-24'>
      <Text className="text-base font-bold text-center">Loading...</Text>
      <ActivityIndicator size='large' color='#011638' />
    </View>
  )
}