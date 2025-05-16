// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Ir para Detalhes" onPress={() => navigation.navigate('Details', { itemId: 42 })} />
    </View>
  );
}
