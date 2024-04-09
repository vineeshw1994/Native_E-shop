import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const ProductCard = ({ p }) => {
  const navigation = useNavigation()

  const handleMoreButton = (id) => {
    navigation.navigate('ProductDetails', { _id:id })
  }
  const handleAddToCart = (id) => {
    alert('Item Added Successfully to Cart')
  }
  return (
    <View>
      <View style={styles.card} key={p._id}>
        <Image source={{ uri: p?.image }} style={styles.cardImage} onError={() => console.log('Error loading image')} />
        <Text style={styles.cardTitle}>{p?.name}</Text>
        <Text style={styles.description}>{p?.description.substring(0, 30)}...</Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText} onPress={()=> handleMoreButton(p?._id)}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart}>
            <Text style={styles.btnText} onPress={()=> handleAddToCart(p?._id)}>Add To Cart</Text>
          </TouchableOpacity>
        </View>



      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'lightgray',
    marginVertical: 5,
    marginHorizontal: 8,
    width: '93%',
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 15,
  },
  cardImage: {
    height: 200,
    width: '100%',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 10,
    textAlign: 'left',

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
  btn: {
    backgroundColor: 'lghtgreen',
    height: 35,
    width: 73,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgreen',
    justifyContent: 'center',
    padding:5,
    backgroundColor: 'lightgreen',
    cursor:'pointer',
  },
  btnCart: {
    backgroundColor: '#FF9E01',
    height: 35,
    width: 73,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgreen',
    justifyContent: 'center',
    padding:5,
  },
  btnText: {
    fontSize: 10,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  }

})
export default ProductCard