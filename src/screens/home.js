import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Button, ScrollView } from "react-native";
import axios from "axios";
import { BASE_API_URL } from "../utils/config";

export default function HomeScreen({ navigation }) {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/home`);
        setHomeData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen</Text>
      <Text style={styles.description}>This is a dummy screen with some text and a button.</Text>

      {loading ? <Text>Loading...</Text> : error ? <Text>Error: {error}</Text> : <Text style={styles.description}>{JSON.stringify(homeData)}</Text>}

      <Button title="Go to Another Screen" onPress={() => navigation.navigate("Genres")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
});
