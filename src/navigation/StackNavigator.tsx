// src/navigation/StackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import index from '../screens/index';
import login from '../screens/login';

export type RootStackParamList = {
  Index: undefined;
  Login: { itemId: number }; // exemplo com parâmetro
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen name="Index" component={index} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
