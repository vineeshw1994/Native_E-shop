import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const Checkout = ({navigation}) => {
  const handleCod = () => {
    alert('Order successfully placed')
  }

  const handleOnline = () => {
    alert('you directed to payment gateway')
    navigation.navigate('Payment')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading} >Payment Options</Text>
      <Text style={styles.price}>Total Amout : 1000</Text>
      <View style={styles.card}>
        <Text style={styles.paymentHeading}>Select Payment Options</Text>
        <TouchableOpacity style={styles.paymentBtn} onPress={handleCod}>
          <Text style={styles.paymentBtnText}>Cash on Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentBtn} onPress={handleOnline}>
          <Text style={styles.paymentBtnText}>Online</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
    height:'90%',

  },
  heading:{
    fontSize:25,
    fontWeight:'700',
    marginVertical:10,
  },
  price:{
    fontSize:20,
    marginBottom:10,
    color:'gray'
  },
  card:{
    backgroundColor:'#fff',
    width:'90%',
    borderRadius:10,
    padding:30,
    marginVertical:10,
  },
  paymentHeading:{
    fontSize:20,
    color:'gray',
    marginBottom:10,
  },
  paymentBtn:{
    backgroundColor:'lightblue',
    height:40,
    borderRadius:10,
    justifyContent:'center',
    marginVertical:10,
  },
  paymentBtnText:{
    fontSize:18,
    textAlign:'center',
  }
})

export default Checkout