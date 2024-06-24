import { View } from 'react-native';

import CalendarView from '@/components/template/CalendarView';

export default function Calendar() {
  return (
    <View className='flex-1'>
      <View className='flex-1 items-center justify-center bg-white'>
        <CalendarView />
      </View>
    </View>
  );
}
