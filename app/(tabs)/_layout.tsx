import { Tabs } from 'expo-router';
import React from 'react';
import { CalendarIcon } from "react-native-heroicons/outline";
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Header from '@/components/Header';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        header: () => <Header />,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Calendar',
          tabBarIcon: () => (
            <CalendarIcon color='#00B47D' />
          ),
        }}
      />
    </Tabs>
  );
}
