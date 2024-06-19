import { StyleSheet, Text } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import CalendarView from '@/components/template/CalendarView';

export default function Calendar() {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.header}>Calendar</Text>
      <CalendarView />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 84,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
    color: '#fff',
    paddingBottom: 5,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    borderWidth: 0.5,
    borderBottomColor: '#fff'
  }
});
