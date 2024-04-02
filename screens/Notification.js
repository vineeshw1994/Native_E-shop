import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Layout from '../components/layouts/Layout'

const Notification = () => {
  return (
    <Layout>
      <View style={styles.container}>
      <Text>oops ! You don't have any notivication yet</Text>
    </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    height:'100%'
  }
})

export default Notification