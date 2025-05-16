// src/screens/DetailsScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({ route }: Props) {
  const { itemId } = route.params;
  return (
    <View>
      <Text>Details Screen</Text>
      <Text>ID: {itemId}</Text>
    </View>
  );
}
