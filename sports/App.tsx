import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/screens/HomeScreen';
import GameDetailsScreen from './screens/screens/GameDetailsScreen';
import RaceDetailsScreen from './screens/screens/RaceDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GameDetails" component={GameDetailsScreen} />
        <Stack.Screen name="RaceDetails" component={RaceDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}