import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign'




const Categories = ({ navigation }) => {
  const [showModel, setShowModel] = useState(false);
  const [catName, setCatName] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState([]);
  console.log(category, 'this is categories')
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

  useEffect(() => {
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
    getCategory();
  }, [])




  const handleSubmit = async () => {
    console.log('handleSubmit')
    if (!catName) {
      alert('Please Enter Category Name')
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
      formData.append('category', catName);

      const res = await fetch('http://192.168.1.4:8080/api/category/create', {
        method: 'POST',
        body: formData,

      })
      if (res.ok) {
        const data = await res.json();
        console.log(data)
        setShowModel(false);
        await AsyncStorage.setItem('category', JSON.stringify(data.cate));
        setImage(null);
        alert('Category Added Successfully')
        navigation.navigate('category')

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

  const renderItem = ({ item }) => (
    <View style={styles.row} >
      <Text style={styles.cell}>{item.category}</Text>
      <Image source={{ uri: item.image.url }} style={styles.profilePic} />
      <TouchableOpacity style={styles.view} onPress={() => navigation.navigate('category')}>
        <Text style={styles.viewText}>View</Text>
      </TouchableOpacity>
    </View>
  )
  return (
    <View >
      <View style={styles.container}>
        <TextInput placeholder='Search' style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => setShowModel(true)}>Add Category</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.userTitle}>Categories</Text>
      <View style={styles.tableContainer}>

        <View style={styles.header}>
          <Text style={styles.headerCell}>Name</Text>
          <Text style={styles.headerCell}>Image</Text>
          <Text style={styles.headerCell}>Edit</Text>

        </View>
        <FlatList
          data={category}
          renderItem={renderItem}
          keyExtractor={item => item._id.toString()}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModel}
        onRequestClose={() => setShowModel(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modelHeader}>
              <Text style={styles.modalTitle}>Create Category</Text>
              <AntDesign name='close' onPress={() => setShowModel(false)} style={styles.icon} />
            </View>
            <TextInput
              placeholder='Category Name'
              onChangeText={(text) => setCatName(text)}
              style={styles.modelInput}
            />
            <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
              <Text style={styles.buttonText}>Choose Image</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Add Category</Text>
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
    height: 43,
    width: '35%',
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
  imageContainer: {
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  uploadImg: {
    backgroundColor: "#007AFF",
    width: "80%",
    padding: 10,
    height: 40,
  },
  imgUploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 40,
    marginVertical: 5,
    borderRadius: 10,
  },
  userTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
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
  tableContainer: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 1,
    paddingVertical: 5,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderWidth: 1,
  },
  cell: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 18,
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  view:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    backgroundColor:'lightgreen',
  }, 
  viewText:{
    color:'white',
    fontSize:17,
    fontWeight:'bold',
  }

})

export default Categories