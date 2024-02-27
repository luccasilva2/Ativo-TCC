import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import React from "react";

import Study from "../screens/Study/";
import Perfil from "../screens/Profile/";
import Início from "../screens/Home/";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Início"
      screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: "#000" } }}
    >
      <Tab.Screen
        name="Estudar"
        component={Study}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="book-open" color={"#fff"} size={size} />
          ),
          tabBarLabelStyle: { color: "#fff" },
        }}
      />

      <Tab.Screen
        name="Início"
        component={Início}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" color={"#fff"} size={size} />
          ),
          tabBarLabelStyle: { color: "#fff" },
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" color={"#fff"} size={size} />
          ),
          tabBarLabelStyle: { color: "#fff" },
        }}
      />
    </Tab.Navigator>
  );
}