import { ScrollView, StyleSheet, Text } from "react-native";
import { ThemedView } from "../ThemedView";
import CalendarCard from "../molecules/CalendarCard";

export default function CalendarView() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.calendarContainer}>
        <ScrollView>
          <Text style={styles.h2}>June 2024</Text>
          <CalendarCard />
        </ScrollView>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  h2: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  calendarContainer: {
    flex: 1,
    paddingHorizontal: 16,
  }
})
