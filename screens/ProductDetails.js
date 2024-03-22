import { View, Text } from 'react-native'
import React from 'react'
import {Products} from '../components/products/products'

const ProductDetails = ({route}) => {
  const {params} = route
  return (
    <View>
      <Text>{params._id}</Text>
    </View>
  )
}

export default ProductDetails