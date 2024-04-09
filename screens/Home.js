import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Layout from '../components/layouts/Layout';
import Categories from '../components/category/Categories';
import { products } from '../data/ProductData.js'
import Banner from '../components/banner/Banner.js';
import Products from '../components/products/products.js';
import Header from '../components/layouts/Header.js'


const Home = () => {
  // console.log(products)
  return (
    <Layout>
      <Header />

      <Categories />
      <Banner />
      <Products />

      <View>
        {/* {products && products.map((item)=>{
          return(
            <View style={styles.card} key={item.id}>
              <Text>{item.name}</Text>
            </View>
          )
        })} */}
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  // card: {
  //   width: '30%',
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flexDirection:'column',
  //   borderRadius: 10,
  //   borderWidth: 1,
  //   borderColor: 'black',
  //   margin: 10,
  // },
});

export default Home