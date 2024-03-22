import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Header = () => {
  const [searchText, setSearchText] = useState('')

  const handleSearch = () => {
    console.log(searchText)
    setSearchText('')
  }
  return (
    <View style={{height: 90, backgroundColor:'#2874F0'}}>
      <View style={styles.container}>
        <TextInput style={styles.inputBox} value={searchText} onChangeText={(text) => setSearchText(text)} placeholder='Search for products' />
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <FontAwesome name="search" style={[styles.item, {color:'#2874F0'}]}  />
        </TouchableOpacity>
      
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  
  inputBox:{
    borderWidth: 1,
    width:'100%',
    position:'absolute',
    left:15,
    height: 40,
    color:'black',
    borderColor:'white',
    paddingLeft: 10,
    fontSize:16,
    borderRadius: 5,
    backgroundColor:'white'
  },
  searchBtn:{
    position:'absolute',
    left:'95%',
  },
  item:{
    color:'#000000',
    fontSize:18,
  }
})

export default Header