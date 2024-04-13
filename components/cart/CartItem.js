import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CartItem = ({ item }) => {
  const [proDetails, setProDetails] = useState(item)

 



  return (
    <View style={styles.container}>
      {/* {item.images.map((image, index) => (
        <Image
          key={index}
          source={{ uri: image.url }}
          style={styles.image}
        />
      ))} */}
      <View>
        <Text style={styles.name}>{item?.name}</Text>
        <Text>{item?.price}</Text>
      </View>
      {/* <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnQty} onPress={handleReduceQty}>
                    <Text style={styles.symbol}>-</Text>
                </TouchableOpacity>
                <Text style={styles.btnQtyText}>{qty}</Text>
                <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
                    <Text style={styles.symbol}>+</Text>
                </TouchableOpacity>
            </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  name: {
    fontSize: 15,
  },
  btnQty: {
    backgroundColor: 'lightgray',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  btnQtyText: {
    fontSize: 20,

  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgreen',
    height: 50,

  },
})
export default CartItem