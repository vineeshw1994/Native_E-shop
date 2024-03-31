import { StatusBar } from 'expo-status-bar';
import { Settings, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';
import ProductDetails from './screens/ProductDetails';
import Contact from './screens/Contact';
import Notification from './screens/Notifications';
import Setting from './screens/Settings';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator >
          <Stack.Screen name="home" component={Home} options={{
            headersShown: false,
          }}/>
          <Stack.Screen name='categories' component={About} />
          <Stack.Screen name='ProductDetails' component={ProductDetails} />
          <Stack.Screen name='notification' component={Contact} />
          <Stack.Screen name='account' component={Notification} />
          <Stack.Screen name='cart' component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
