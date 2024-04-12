import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const Products = () => {
  const [showModel, setShowModel] = useState(false);
  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setstock] = useState(0);
  const [image, setImage] = useState(null);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  console.log('this is products', products)

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const proData = async ()=>{
    const data = await AsyncStorage.getItem('products');
    const parseData = JSON.parse(data);
    setProducts(parseData);
  }

  useEffect(() => {
    const getproducts = async ()=>{
      try{
        const res = await fetch('http://192.168.1.4:8080/api/products/getproducts', {
          method: 'GET',  
        })
        if (res.ok) {
          const data = await res.json();
          console.log(data)
          setShowModel(false);
          await AsyncStorage.setItem('products', JSON.stringify(data.products));
          setImage(null);
          alert('product Added Successfully')
          navigation.navigate('products')
  
        }
        if (!res.ok) {
          const data = await res.json();
          console.log(data.message)
          alert(data.message)
        }
      }catch(error){
        console.log(error.message)
        alert('Try After Sometime')
      }
    }
    const getCategory = async () => {
      try {
        const res = await fetch('http://192.168.1.4:8080/api/category/all-category')

        if (res.ok) {
          const data = await res.json()
          console.log(data.categories)
          setCategory(data.categories)
        }
        if (!res.ok) {
          const err = await res.json()
          alert(err.message)
        }
      } catch (error) {
        console.log(error.message)
        alert(error.message)
      }
    }
    getCategory()
    getproducts();
    proData()
   
  }, []);

  const handleSubmit = async () => {
    console.log('handleSubmit')
    console.log(name, description, price, stock)
    if (!name || !description || !price || !stock) {
      alert('Please Enter All Fields')
      return;
    }
    if (!image) {
      alert('Please Select Image')
      return;
    }
    try {
      const formData = new FormData();
      formData.append('file', {
        uri: image,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('stock', stock);

      const res = await fetch('http://192.168.1.4:8080/api/product/create', {
        method: 'POST',
        body: formData,

      })
      if (res.ok) {
        const data = await res.json();
        console.log(data)
        setShowModel(false);
        await AsyncStorage.setItem('products', JSON.stringify(data.products));
        setImage(null);
        alert('Product Added Successfully')
        navigation.navigate('products')

      }
      if (!res.ok) {
        const data = await res.json();
        console.log(data)
        alert(data.message)
      }

    } catch (error) {
      console.log(error.message)
      alert('Try After Sometime')
    }
  }
  return (
    <View >
     <View style={styles.container}>
        <TextInput placeholder='Search' style={styles.input} />
        <TouchableOpacity style={styles.button} onPress={()=> setShowModel(true)}>
          <Text style={styles.buttonText}>Add Product</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.userTitle}>Products</Text>


      <Modal
        animationType="slide"
        transparent={true}
        visible={showModel}
        onRequestClose={() => setShowModel(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modelHeader}>
              <Text style={styles.modalTitle}>Create Product</Text>
              <AntDesign name='close' onPress={() => setShowModel(false)} style={styles.icon} />
            </View>
            <TextInput
              placeholder='Product Name'
              onChangeText={(text) => setName(text)}
              style={styles.modelInput}
            />
            <TextInput
              placeholder='Product Description'
              onChangeText={(text) => setDescription(text)}
              style={styles.modelInput}
            />
            <TextInput
              placeholder='Product Price' keyboardType='numeric'
              onChangeText={(text) => setPrice(text)}
              style={styles.modelInput}
            />
            <TextInput
              placeholder='Product Stock' keyboardType='numeric'
              onChangeText={(text) => setstock(text)}
              style={styles.modelInput}
            />
            <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
              <Text style={styles.buttonText}>Choose Image</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Add Product</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'slategray',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'blueviolet',
    padding: 10,
  },
  input: {
    padding: 10,
    borderWidth: 2,
    borderColor: 'blueviolet',
    borderRadius: 8,
    height: 40,
    width: '45%',
    color: 'black',
    backgroundColor: 'white',
  },
  button: {
    padding: 10,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 8,
    height: 40,
    width: '28%',
    backgroundColor: 'lightblue',
  },
  buttonText: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  userTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blueviolet',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  imagePreview: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 5,
    marginBottom: 5,
  },
  modelInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  icon: {
    fontSize: 25,
    marginRight: 10,
    marginLeft: 20,
    marginBottom: 10,

  },
  modelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
})
export default Products