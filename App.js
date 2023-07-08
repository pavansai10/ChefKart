import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./Screen1";
import Details from "./Details";
import { Icon } from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();

const RecipeApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Select Dishes" component={Screen1} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ 
            title:null
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RecipeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 4,
  },
  dishName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  dishRating: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  dishDescription: {
    fontSize: 14,
    marginBottom: 8,
  },
  equipments: {
    fontSize: 14,
    color: "#888",
  },
});
