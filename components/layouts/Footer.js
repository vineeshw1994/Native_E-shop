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
      <TouchableOpacity style={styles.menuContainer} onPress={()=>navigation.navigate('about')}>
        <AntDesign name='book'style={[styles.icon,route.name== 'about' && styles.active]} />
        <Text style={styles.iconText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={()=>navigation.navigate('contact')}>
        <AntDesign name='phone' style={[styles.icon,route.name== 'contact' && styles.active]} />
        <Text style={styles.iconText}>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={()=>navigation.navigate('notification')}>
        <AntDesign name='notification' style={[styles.icon,route.name== 'notification' && styles.active]} />
        <Text style={styles.iconText}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={()=>navigation.navigate('settings')}>
        <AntDesign name='setting'style={[styles.icon,route.name== 'settings' && styles.active]} />
        <Text style={styles.iconText}>Settings</Text>
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