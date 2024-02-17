import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { BASE_API_URL } from "../utils/config";
import axios from "axios";

export default function HomeCard() {
  const [homeData, setHomeData] = useState({ complete_anime: [], ongoing_anime: [] });
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

  const renderCard = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToAnimeDetails(item.otakudesu_url)}>
      <View style={styles.card}>
        <Image source={{ uri: item.poster }} style={styles.poster} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>Current Episode: {item.current_episode}</Text>
        <Text style={styles.subtitle}>Release Day: {item.release_day}</Text>
        <Text style={styles.subtitle}>Newest Release Date: {item.newest_release_date}</Text>
      </View>
    </TouchableOpacity>
  );

  const navigateToAnimeDetails = (url) => {
    // Implement navigation logic to anime details screen
    // For example, you can use React Navigation
    // navigation.navigate('AnimeDetails', { url });
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const allAnime = [...homeData.complete_anime, ...homeData.ongoing_anime];

  return <FlatList data={allAnime} keyExtractor={(item) => item?.slug} renderItem={renderCard} style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    elevation: 2,
  },
  poster: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 4,
  },
});
