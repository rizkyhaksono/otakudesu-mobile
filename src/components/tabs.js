import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import Genrescreen from "../screens/genres";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Genres"
        component={Genrescreen}
        options={{
          tabBarLabel: "Genres",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="grid-large" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}
