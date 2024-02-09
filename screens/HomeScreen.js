import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Go to Other Screen" onPress={() => navigation.navigate("Other")} />
    </View>
  );
};

export default HomeScreen;
