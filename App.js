import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro';
import Listagem from './pages/Listagem';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Cadastro" component={Cadastro}></Stack.Screen>
        <Stack.Screen name="Listagem" component={Listagem}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}