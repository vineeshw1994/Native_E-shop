import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetails = ({ route }) => {
  const { params } = route
  console.log(params)
  const [proDetails, setProDetails] = useState({})
  const [qty, setQty] = useState(1)
  const maxQty = proDetails?.stock

 console.log(qty,'this is final quantity')

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(`http://192.168.1.4:8080/api/product/${params._id}`, {
          method: 'GET',
        })
        if (res.ok) {
          const data = await res.json();
          console.log(data.product)
          setProDetails(data.product)
        }
        if (!res.ok) {
          const data = await res.json();
          console.log(data.message)
          alert(data.message)
        }

      } catch (error) {
        console.error(error);
      }
    }
    getProducts()
  }, [params?._id])

  console.log(proDetails)

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
  handleAddtoCart = async () => {
    console.log('add to cart')
    try{
    const res = await fetch(`http://192.168.1.4:8080/api/product/addtocart/${params._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        qty
    })
    })
    if(res.ok){
      const data = await res.json()
      console.log(data.message)
      alert(data.message)
    }
    if(!res.ok){
      const data = await res.json()
      console.log(data.message)
      alert(data.message)
    }
    }catch(error){
      console.log(error)
    }
  }
  return (
    <ScrollView >
      <View style={styles.container}>
        {proDetails.images ? (
          proDetails.images.map((image, _id) => (
            <Image
              key={_id}
              source={{ uri: image.url }}
              style={styles.image}
            />
          ))
        ) : (
          <Text>Loading images...</Text>
        )}
        <Text style={styles.title}>{proDetails?.name}</Text>
        <Text style={styles.price} >{proDetails?.price} -₹</Text>
        <Text style={styles.description}>{proDetails?.description}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnCard} disabled={proDetails?.stock <= 0} onPress={handleAddtoCart}>

            <Text style={styles.btnCardText}>{proDetails.stock > 0 ? "Add to Cart" : " Out of Stock"}</Text>

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