import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='LoginScreen' component={Login} options={{headerShown: false,}}/>
          <Stack.Screen name='HomeScreen' component={Home} options={{}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;