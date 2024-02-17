import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MyTabs from "../components/tabs";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MyTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
