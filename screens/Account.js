import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import Layout from '../components/layouts/Layout'
import { userData } from '../data/UserData'
import AntDesign from 'react-native-vector-icons/AntDesign'


const Account = ({ navigation }) => {

  const isAdmin = true;

  const handleNotification = () => {
    navigation.navigate('notifications')
  }

  const handleProfile = () => {
    navigation.navigate('profile', { id: userData._id })
  }

  const handleOrders = () => {
    navigation.navigate('myorders')
  }

  const handleAdmin = () => {
    navigation.navigate('adminPannel')
  }

  const handleLogout = () => {
    alert('successfully logout ')
    navigation.navigate('login')
  }
  return (
    <Layout>
      <View style={styles.container}>
        <Image source={{ uri: userData.profilePic }} style={styles.image} />
        <View style={styles.details}>
          <Text>Hi <Text style={styles.name}>{userData.name}</Text> ✋</Text>
          <Text>{userData.email}</Text>
          <Text>{userData.mobile}</Text>

        </View>

        <View style={styles.btnContainer} >
          <Text style={styles.heading}>Account Setting</Text>
          <TouchableOpacity style={styles.accountBtn} onPress={handleProfile}>
            <AntDesign name='edit' style={styles.accountBtnText} />
            <Text style={styles.accountBtnText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountBtn} onPress={handleOrders}>
            <AntDesign name='bars' style={styles.accountBtnText} />
            <Text style={styles.accountBtnText}>My Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountBtn} onPress={handleNotification}>
            <AntDesign name='bells' style={styles.accountBtnText} />
            <Text style={styles.accountBtnText}>Notification</Text>
          </TouchableOpacity>
          {isAdmin && <TouchableOpacity style={styles.accountBtn} onPress={handleAdmin}>
            <AntDesign name='user' style={styles.accountBtnText} />
            <Text style={styles.accountBtnText}>Admin Pannel</Text>
          </TouchableOpacity>}
          <TouchableOpacity style={styles.btn} onPress={handleLogout}>
            <Text style={styles.btnText}>Logout</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  details: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'blue',
    width: '40%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    color: 'green'
  },
  btnContainer: {
    padding: 10,
    backgroundColor: 'white',
    margin: 10,
    marginVertical: 10,
    elevation: 5,
    borderRadius: 10,
    paddingBottom: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgray'
  },
  accountBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 5,
  },
  accountBtnText: {
    fontSize: 18,
    marginRight: 10,

  }

})

export default Account