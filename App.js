import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

// Create a Stack navigator
const Stack = createStackNavigator();

// Screen components
const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Otakudesu Mobile</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Details")}>
      <Text>Go to Details</Text>
    </TouchableOpacity>
    <StatusBar style="auto" />
  </View>
);

const DetailsScreen = () => (
  <View style={styles.container}>
    <Text>Details Screen</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
