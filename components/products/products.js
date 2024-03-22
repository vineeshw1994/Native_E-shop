import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../../data/ProductData'


const Products = () => {
  console.log(products,'product data')
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {products.map((p,index) => (
       <ProductCard key={p.id} p={p} />
      ))}
    </ScrollView>
  )
}

export default Products