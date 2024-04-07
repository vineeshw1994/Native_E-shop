import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './screens/Home';
import About from './screens/About';
import ProductDetails from './screens/ProductDetails';
import Notification from './screens/Notification';
import Account from './screens/Account';
import Setting from './screens/Settings';
import Checkout from './screens/Checkout';
import Payment from './screens/Payment'
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Profile from './screens/Account/Profile';
import MyOrders from './screens/Account/MyOrders';
import Dashboard from './screens/Admin/Dashboard';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='login' >
          <Stack.Screen name="home" component={Home} options={{
            headerShown: false,
          }} />
          <Stack.Screen name='categories' component={About} />
          <Stack.Screen name='ProductDetails' component={ProductDetails} />
          <Stack.Screen name='notifications' component={Notification} />
          <Stack.Screen name='account' component={Account} />
          <Stack.Screen name='profile' component={Profile} />
          <Stack.Screen name='myorders' component={MyOrders} />
          <Stack.Screen name='adminPannel' component={Dashboard} />
          <Stack.Screen name='cart' component={Setting} />
          <Stack.Screen name='Checkout' component={Checkout} />
          <Stack.Screen name='Payment' component={Payment} />
          <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


