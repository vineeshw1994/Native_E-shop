import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style ={StyleSheet}>
      <TextInput />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:90,
    marginTop:20,
  }
})

export default Header