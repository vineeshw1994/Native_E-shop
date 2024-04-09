import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../components/layouts/Layout'
import { userData } from '../data/UserData'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Account = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    const getuser = async () => {
      const userString = await AsyncStorage.getItem('user')
      if(userString){
        const user = JSON.parse(userString)
        setUserInfo(user)
      }
    }

    getuser()
  },[])
  console.log(userInfo, 'this is userinformation')
  const isAdmin = true;

  const handleNotification = () => {
    navigation.navigate('notifications')
  }

  const handleProfile = () => {
    navigation.navigate('profile', { id: userInfo._id })
  }

  const handleOrders = () => {
    navigation.navigate('myorders')
  }

  const handleAdmin = () => {
    navigation.navigate('adminPannel')
  }

  const handleLogout = async() => {
    try {
      await AsyncStorage.setItem('token', '');
      await AsyncStorage.setItem('user','');
      alert('successfully logout ')
      navigation.navigate('login')
    } catch (error) {
      alert(error.message)
    }

  }
  return (
    <Layout>
      <View style={styles.container}>
     <View style={styles.imageContainer}>
     <Image source={userInfo.profilePic ? { uri: userInfo.profilePic.url } : null} style={styles.image} />
     </View>
        {/* <Image source={{ uri: userInfo.profilePic.url }} style={styles.image} /> */}
        <View style={styles.details}>
          <Text>Hi <Text style={styles.name}>{userInfo.username}</Text> ✋</Text>
          <Text style={styles.proText}>{userInfo.email}</Text>
          <Text style={styles.proText}>{userInfo.phone}</Text>

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
          {userInfo.role === 'admin' && <TouchableOpacity style={styles.accountBtn} onPress={handleAdmin}>
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
  imageContainer:{
    marginBottom: 20,
    marginHorizontal:"24%",
    width:'50%',
    height: 150,
    borderRadius: 95,
    backgroundColor:'lightgrey',
    justifyContent:'center',
    alignItems:'center',
  },
  image: {
    width: '90%',
    height: "90%",
    resizeMode: 'contain',
    borderRadius: 100,
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
  proText:{
    fontSize: 20,
    color: 'black',

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