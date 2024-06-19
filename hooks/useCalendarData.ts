import { fetchData } from "@/app/services/api";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

export default async function useCalendarData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err) {
        setError(err as any); // TODO: Add safe typing here
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  /* if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <ThemedText style={styles.errorText}>Error: {error.message}</ThemedText>
    );
  } */
}