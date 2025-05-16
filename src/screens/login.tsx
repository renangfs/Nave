import React from 'react'; // importa o React, necessário para definir componentes  
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'; // importa componentes básicos do React Native  
import { NativeStackScreenProps } from '@react-navigation/native-stack'; // importa tipo para as props da navegação em pilha  
import { RootStackParamList } from '../navigation/StackNavigator'; // importa o mapeamento de rotas e seus parâmetros  
import styles from '../screens/styleslogin'; // importa estilos específicos para esta tela  

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>; // define o tipo das props: rota "Details" dentro do nosso StackParamList  

export default function Login({ route }: Props) { // define o componente funcional Login, recebendo a prop route  
  const { itemId } = route.params; // extrai o parâmetro itemId que foi passado pela navegação  
  return (  
    <View style={styles.container}> {/* container geral da tela */}  
      <View style={styles.logoContainer}> {/* container para centralizar o logo */}  
        <Image  
          source={require('../images/logo.png')} // carrega a imagem do logo  
          style={styles.logo} // aplica estilo ao logo  
          resizeMode="contain" // garante que a imagem se ajuste sem distorcer  
        />  
      </View>  
      <Text style={styles.subtitle}>Acesse sua conta</Text> {/* cabeçalho/subtítulo */}  

      <Text style={styles.label}>Nome do administrador</Text> {/* rótulo do input */}  
      <TextInput  
        style={styles.input} // estilo do campo de texto  
        placeholder="Digite seu nome" // texto cinza enquanto não digitar  
        placeholderTextColor="#999" // cor do placeholder  
      />  

      <Text style={styles.label}>Senha do administrador</Text> {/* rótulo do segundo input */}  
      <TextInput  
        style={styles.input} // mesmo estilo do campo anterior  
        placeholder="Digite sua senha" // placeholder para senha  
        secureTextEntry // esconde caracteres digitados  
        placeholderTextColor="#999" // cor do placeholder  
      />  

      <TouchableOpacity> {/* botão de “esqueci senha” */}  
        <Text style={styles.forgot}>Esqueci minha senha</Text> {/* texto do botão */}  
      </TouchableOpacity>  

      <TouchableOpacity style={styles.button}> {/* botão principal de entrar */}  
        <Text style={styles.buttonText}>Entrar</Text> {/* texto do botão */}  
      </TouchableOpacity>  

      <TouchableOpacity> {/* botão secundário de cadastro */}  
        <Text style={styles.register}>Cadastrar administrador</Text> {/* texto do botão */}  
      </TouchableOpacity>  
    </View>  
  );  
}  
