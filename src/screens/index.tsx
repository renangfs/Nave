import React from 'react'; // importa o React para usar JSX
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'; // importa componentes básicos do React Native
import { NativeStackScreenProps } from '@react-navigation/native-stack'; // importa tipo de props para navegação em pilha
import { RootStackParamList } from '../navigation/StackNavigator'; // importa lista de parâmetros das rotas
import styles from './stylesindex'; // importa estilos da tela

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>; // define o tipo de props aceito por esta tela, usando a rota 'Home'

export default function Index({ navigation }: Props) { // componente principal da tela Home, recebe 'navigation' como prop
  return (
    
    <View style={styles.container}> {/* container principal da tela */}
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" /> {/* configura a cor e estilo da barra de status */}

      <View style={styles.logoContainer}> {/* área que contém o logo e subtítulo */}
        <Image
          source={require('../images/logo.png')} // carrega a imagem do logo
          style={styles.logo} // aplica estilos à imagem
          resizeMode="contain" // ajusta o modo de redimensionamento da imagem
        />
        <Text style={styles.subtitle}> {/* exibe o texto de subtítulo */}
          Seu mercadinho, sua{''}comodidade, seu app.
        </Text>
      </View>

      <View style={styles.buttonContainer}> {/* área que contém os botões */}
          <View style={{ marginBottom: 16 }}> {/* cria espaço abaixo do botão de administrador */}
            <TouchableOpacity
              style={styles.adminButton} // aplica estilo ao botão de administrador
              onPress={() => navigation.navigate('Details', { itemId: 42 })}> {/* navega para a rota 'Details' passando parâmetro */}
              <Text style={styles.buttonText}>Entrar como administrador</Text> {/* texto do botão */}
            </TouchableOpacity>
          </View>

          <View> {/* container do botão de morador */}
            <TouchableOpacity style={styles.userButton}> {/* define estilo do botão de morador */}
              <Text style={styles.buttonText}>Entrar como morador</Text> {/* texto do botão */}
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}
