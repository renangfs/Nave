import React from 'react';
import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import styles from '../screens/styleslogin';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({ route }: Props) {
  const { itemId } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.subtitle}>Acesse sua conta</Text>

      <Text style={styles.label}>Nome do administrador</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Senha do administrador</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        placeholderTextColor="#999"
      />

      <TouchableOpacity>
        <Text style={styles.forgot}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.register}>Cadastrar administrador</Text>
      </TouchableOpacity>
    </View>
  );
}
