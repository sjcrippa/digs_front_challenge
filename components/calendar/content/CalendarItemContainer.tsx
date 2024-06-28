import { Text, View } from "react-native";

import Loading from "@/components/Loading";
import { useFetch } from "@/hooks/useFetch";
import { useStatusBg } from "../hooks/useStatusBg";
import { monthsNames } from "../constants/Months";
import { StatusIcon } from "./StatusIcon";
import { CalendarItem } from "./CalendarItem";
import { useFormatDate } from "../hooks/useFormatDate";
import NoMaintenanceScheduled from "./NoMaintenanceScheduled";

export default function CalendarItemContainer() {
  const { data, loading } = useFetch("https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge");

  if (loading) return <Loading />;

  return (
    <View className="w-full">
      {data?.calendar.map((value) => (
        <View key={value.month} className="mt-[21px] flex flex-col">
          <View className="flex flex-row gap-2 mb-[21px]">
            <Text className="text-base font-bold leading-[19.2px] text-black/80">
              {`${value.month === 0 ? 'December' : monthsNames[value.month - 1]} ${value.year}`}
            </Text>
          </View>

          {value.actions.length === 0 ? <NoMaintenanceScheduled /> : ''}

          {value.actions.map((action) => {
            const actionBg = useStatusBg(action.status);
            const { day, shortWeekDay } = useFormatDate(action.scheduledDate)

            return (
              <View key={action.id} className={`mt-1 w-[343px] h-[111px] ${action.status === 'Unscheduled' ? 'h-[88px]' : 'h-[111px]'} flex-row`}>
                <View className="w-8 flex flex-col gap-y-[5px]">
                  <Text className="text-[9px] text-black/60 font-black uppercase">{shortWeekDay}</Text>
                  <Text className={` ${day === 'TBD' ? 'text-[9px] font-black text-black/60' : 'text-xl font-bold text-black/80'}`}>{day}</Text>
                  <StatusIcon status={action.status} />
                </View>
                <View className={`w-[311px] ${actionBg} rounded`}>
                  <CalendarItem action={action} data={data} status={action.status} />
                </View>
              </View>
            )
          })}
        </View>
      ))}
    </View>
  )
}
