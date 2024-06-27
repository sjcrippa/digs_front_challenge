import { Text, View } from "react-native";

import Loading from "@/components/Loading";
import { useFetch } from "@/hooks/useFetch";
import { monthsNames } from "../constants/Months";
import { StatusIcon } from "./StatusIcon";
import { CalendarItem } from "./CalendarItem";
import { useStatusClassName } from "../hooks/useStatusClassName";

export default function CalendarListContainer() {
  const { data, loading } = useFetch("https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge");

  if (loading) return <Loading />;

  return (
    <View className="w-full">
      {
        data?.calendar.map((value) => (
          <View key={value.month} className="mt-[21px] flex flex-col">
            <View className="flex flex-row gap-2">
              <Text className="text-base font-bold leading-[19.2px] text-black/80">
                {`${value.month === 0 ? 'December' : monthsNames[value.month - 1]} ${value.year}`}
              </Text>
            </View>
            {
              value.actions.map((action) => {
                const actionClassName = useStatusClassName(action.status);
                const actionIcon = StatusIcon(action.status)
                const statusContent = CalendarItem(action.status, action, data)

                return (
                  <View key={action.id} className={`mt-[25px] w-[343px] h-[111px] ${action.status === 'Unscheduled' ? 'h-[88px]' : 'h-[111px]'} flex-row`}>
                    <View className="w-8 flex flex-col gap-y-[5px] items-center">
                      <Text className="text-[9px] text-black/60 font-black">WED</Text>
                      <Text className="text-xl font-bold text-black/80">4</Text>
                      {actionIcon}
                    </View>
                    <View className={`w-[311px] ${actionClassName} rounded`}>
                      {statusContent}
                    </View>
                  </View>
                )
              })
            }
          </View>
        ))
      }
    </View>
  )
}
