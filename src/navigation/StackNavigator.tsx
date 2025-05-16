import React from 'react'; // importa o React, necessário para usar JSX e componentes  
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // importa a função para criar um navigator em pilha  
import index from '../screens/index'; // importa o componente da tela Home  
import login from '../screens/login'; // importa o componente da tela de login  

export type RootStackParamList = { // define os nomes de rotas e seus parâmetros  
  Home: undefined; // rota "Home" não recebe parâmetros  
  Details: { itemId: number }; // rota "Details" espera um objeto com itemId do tipo number  
};  

const Stack = createNativeStackNavigator<RootStackParamList>(); // cria o Navigator tipado com as rotas definidas  

export default function StackNavigator() { // componente que encapsula toda a navegação  
  return (  
    <Stack.Navigator initialRouteName="Home"> {/* define a rota inicial ao abrir o app  */}
      <Stack.Screen name="Home" component={index} options={{ headerShown: false }}/> {/* registra a tela Home sem header  */}
      <Stack.Screen name="Details" component={login} options={{ headerShown: false }} /> {/* registra a tela Details (login) sem header  */}
    </Stack.Navigator>  
  );  
}  
