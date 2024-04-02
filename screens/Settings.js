import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Layout from '../components/layouts/Layout'
import { cartData } from '../data/CartData'
import PriceTable from '../components/cart/PriceTable'
import CartItem from '../components/cart/CartItem'


const Settings = ({navigation}) => {
  
  const [cartItems, setCartItems] = useState(cartData);
  return (
    <Layout>
      <View>
        <Text style={styles.heading}>
          {cartItems > 0 ? `You Have ${cartItems?.length}` : "OOPS Your Cart Is Empty"}
        </Text>
        {
          cartItems?.length > 0 && (
            <>
              <ScrollView>
              {
                cartItems.map((item) => {
                  return (
                    <CartItem key={item._id} item={item} />
                  )
                })
              }
              </ScrollView>
              <View>
                <PriceTable title={'price'} price={999} />
                <PriceTable title={'Tax'} price={999} />
                <PriceTable title={'Shipping'} price={999} />

                <View style={styles.grandTotal}>
                  <PriceTable title={'Grand Total'} price={1000}></PriceTable>
                </View>
                <TouchableOpacity style={styles.btnCheckout}onPress={() => navigation.navigate('Checkout')}>
                  <Text style={styles.checkoutText}>Check Out</Text>
                </TouchableOpacity>
              </View>

            </>
          )
        }
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    color: 'green',
    marginTop: 10
  },
  grandTotal: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#f0f0f0',
    padding: 5,
    margin: 5,
    marginHorizontal: 20
  },
  btnCheckout: {
    backgroundColor: 'green',
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    height: 40,
    marginHorizontal: 20,
    borderRadius: 5
  },
  checkoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default Settings