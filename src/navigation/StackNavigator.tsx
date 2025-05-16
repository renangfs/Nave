// src/navigation/StackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import index from '../screens/index';
import login from '../screens/login';

export type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number }; // exemplo com parâmetro
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={index} options={{ headerShown: false }}/>
      <Stack.Screen name="Details" component={login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
