import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Layout from '../components/layouts/Layout'
import { cartData } from '../data/CartData'

const Settings = () => {
  const [cartItems, setCartItems] = useState(cartData);
  return (
    <Layout>
      <View>
        <Text>
          {cartItems > 0 ? `You Have ${cartItems?.length}` :"OOPS Your Cart Is Empty"  }
        </Text>
      </View>
    </Layout>
  )
}

export default Settings