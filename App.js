import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import ForgotPassword from './screens/Account/ForgotPassword';
import Otp from './screens/Account/Otp';
import Products from './screens/Admin/Products';
import Categories from './screens/Admin/Categories';
import Users from './screens/Admin/Users';
import Orders from './screens/Admin/Orders';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login' >
        <Stack.Screen name="home" component={Home} options={{
          headerShown: false,
        }} />
        <Stack.Screen name='categories' component={About} />
        <Stack.Screen name='ProductDetails' component={ProductDetails} />
        <Stack.Screen name='notifications' component={Notification} />
        <Stack.Screen name='account' component={Account} options={{
          headerShown: false,
        }} />
        <Stack.Screen name='profile' component={Profile} options={{
          headerShown: false,
        }} />
        <Stack.Screen name='forgot' component={ForgotPassword} />
        <Stack.Screen name='otp' component={Otp} />
        <Stack.Screen name='myorders' component={MyOrders} />
        <Stack.Screen name='adminPannel' component={Dashboard} />
        <Stack.Screen name='products' component={Products} />
        <Stack.Screen name='category' component={Categories} />
        <Stack.Screen name='users' component={Users} />
        <Stack.Screen name='orders' component={Orders} />
        <Stack.Screen name='cart' component={Setting} />
        <Stack.Screen name='Checkout' component={Checkout} />
        <Stack.Screen name='Payment' component={Payment} />
        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


