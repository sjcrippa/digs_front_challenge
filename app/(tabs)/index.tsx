import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native';
import { fetchData } from '../services/api';

export default function Calendar() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <ThemedText style={styles.errorText}>Error: {error.message}</ThemedText>;
  }

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.header}>Calendar</Text>
      <ThemedView style={styles.calendarContainer}>
        <ScrollView>
          <Text style={styles.h2}>June 2024</Text>
        </ScrollView>
      </ThemedView>
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
    color: '#fff',
    paddingBottom: 15,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    borderWidth: 0.5,
    borderBottomColor: '#fff'
  },
  h2: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  calendarContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  errorText: {
    color: 'red',
  },
});
