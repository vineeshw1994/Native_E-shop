import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation, useRoute } from '@react-navigation/native'
const Footer = () => {
  const route = useRoute()
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuContainer} onPress={()=>navigation.navigate('home')}>
        <AntDesign name='home' style={[styles.icon,route.name == 'home' && styles.active]} />
        <Text style={[styles.iconText,route.name== 'home' && styles.active]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={()=>navigation.navigate('categories')}>
        <AntDesign name='bars'style={[styles.icon,route.name== 'categories' && styles.active]} />
        <Text style={styles.iconText}>Categories</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={()=>navigation.navigate('notifications')}>
        <AntDesign name='bells' style={[styles.icon,route.name== 'notifications' && styles.active]} />
        <Text style={styles.iconText}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={()=>navigation.navigate('account')}>
        <AntDesign name='user' style={[styles.icon,route.name== 'account' && styles.active]} />
        <Text style={styles.iconText}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={()=>navigation.navigate('cart')}>
        <AntDesign name='shoppingcart'style={[styles.icon,route.name== 'cart' && styles.active]} />
        <Text style={styles.iconText}>Cart</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  menuContainer: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  icon: {
    fontSize: 28,
    color: '#2874F0'
  },
  iconText: {
    color: '#000000',
    fontSize: 15,
  },
  active:{
    color:'red'
  }

})

export default Footer