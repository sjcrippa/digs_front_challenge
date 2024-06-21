import { ScrollView, StyleSheet, Text } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { CheckCircleIcon } from "react-native-heroicons/solid";

export default function CalendarCard() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.childContainer}>
        <ThemedView style={styles.card}>
          <ThemedView style={styles.columnLeft}>
            <ThemedText>WED</ThemedText>
            <ThemedText>4</ThemedText>
            <Text>
              <CheckCircleIcon width={14} height={14} color='#00B47D' />
            </Text>
          </ThemedView>
          <ThemedView style={styles.columnRight}>
            <ThemedText>Left</ThemedText>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childContainer: {
    marginTop: 25,
  },
  card: {
    width: 343,
    height: 111,
    flex: 1,
    flexDirection: 'row',
  },
  columnLeft: {
    flex: 1,
    maxWidth: 55,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    columnGap: 5,
    alignContent: 'flex-start'
  },
  columnRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00B47D',
    borderRadius: 4,
  },
})
