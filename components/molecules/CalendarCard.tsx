import { ScrollView, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

export default function CalendarCard() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.childContainer}>
        <View style={styles.card}>
          <View>
            <ThemedText>Col 1</ThemedText>
          </View>
          <View>
          <ThemedText>Col 2</ThemedText>
          </View>
        </View>
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
    borderWidth: 0.5,
    borderColor: '#fff',
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
  }
})
