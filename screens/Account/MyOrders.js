import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Layout from '../../components/layouts/Layout'
import {orderData} from '../../data/OrderData'
import OrderItem from '../../components/Form/OrderItem'

const MyOrders = () => {
  return (
   <Layout>
     <View style={styles.container}>
      <Text style={styles.heading}>My Orders</Text>
      <ScrollView>
        {orderData.map((order)=>{
            return(
                <OrderItem key={order._id} order={order} />
            )
        })}
      </ScrollView>
    </View>
   </Layout>
  )
}

const styles = StyleSheet.create({
    container:{
        margintop:10,
      
    },
    heading:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
        color:'gray'

    }
})

export default MyOrders