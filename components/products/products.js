import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Products = () => {
  const [products, setProducts] = useState([])
  console.log('products helooooo', products)

  const proData = async () => {
    const data = await AsyncStorage.getItem('products');
    const parseData = JSON.parse(data);
    setProducts(parseData)
  }

  useEffect(() => {
    const getproducts = async () => {
      try {
        const res = await fetch('http://192.168.1.4:8080/api/product/getproducts', {
          method: 'GET',
        })
        if (res.ok) {
          const data = await res.json();
          console.log(data.products)
          setShowModel(false);
          await AsyncStorage.setItem('products', JSON.stringify(data.products));
        }
        if (!res.ok) {
          const data = await res.json();
          console.log(data.message)
          alert(data.message)
        }
      } catch (error) {
        console.log(error.message)
        alert('Try After Sometime')
      }
    }
    
    getproducts();
    proData();


  },[]);
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {products.map((p) => (
       <ProductCard key={p._id} p={p} />
      ))}
    </ScrollView>
  )
}

export default Products