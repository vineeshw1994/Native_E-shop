import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { products } from '../data/ProductData'

const ProductDetails = ({ route }) => {
  const { params } = route
  const [proDetails, setProDetails] = useState({})
  const [qty, setQty] = useState(1)
  const maxQty = proDetails?.quantity


  useEffect(() => {
    const getProduct = products.find((item) => item?._id === params?._id)
    setProDetails(getProduct)
  }, [params?._id])

  const handleAddQty = () => {
    console.log(qty, '===', maxQty)
    if (qty === 0) {
      return alert("Out of stock")
    }
    if (qty === maxQty) {
      alert("Maximum quantity reached")
      return
    }
    if (qty <= maxQty) {
      setQty((prev) => prev + 1);
    }
  };

  const handleReduceQty = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
    }
  };
  return (
    <ScrollView >
      <Image source={{ uri: proDetails?.image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{proDetails?.name}</Text>
        <Text style={styles.price} >{proDetails?.price} -₹</Text>
        <Text style={styles.description}>{proDetails?.description}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnCard} disabled={proDetails?.quantity <= 0} onPress={() => { }}>

            <Text style={styles.btnCardText}>{proDetails.quantity > 0 ? "Add to Cart" : " Out of Stock"}</Text>

          </TouchableOpacity>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnQty} onPress={handleReduceQty}>
              <Text style={styles.symbol}>-</Text>
            </TouchableOpacity>
            <Text style={styles.btnQtyText}>{qty}</Text>
            <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
              <Text style={styles.symbol}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    marginTop: 15,
    height: 370,
    width: 300,
    alignSelf: 'center',
  },
  container: {
    marginVertical: 15,
    marginHorizontal: 10,


  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    marginTop: 10,

  },
  description: {
    marginTop: 10,
    fontSize: 17,
    textAlign: 'justify',
    textTransform: 'capitalize'

  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  btnCard: {
    width: 180,
    backgroundColor: '#FF9E01',
    // marginVertical:10,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center'
  },
  btnCardText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
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
  symbol: {
    fontSize: 25,
    fontWeight: 'bold',
  }

})

export default ProductDetails