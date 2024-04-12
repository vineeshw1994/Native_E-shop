import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'


const Users = () => {
  const user = [
    { 
      _id:1,
      name: "John",
      profilePic: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fe7.pngegg.com%2Fpngimages%2F639%2F452%2Fpng-clipart-computer-icons-avatar-user-profile-people-icon-child-face.png&tbnid=lmjlREWI4E7X6M&vet=10CBAQxiAoAmoXChMIoNuC0fO6hQMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-pkpxo&docid=9MDEvZzLRDPphM&w=900&h=512&itg=1&q=profile%20pic%20logo&ved=0CBAQxiAoAmoXChMIoNuC0fO6hQMVAAAAAB0AAAAAEAc'
    },
    { 
      _id:2,
      name: "Jane",
      profilePic: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fe7.pngegg.com%2Fpngimages%2F639%2F452%2Fpng-clipart-computer-icons-avatar-user-profile-people-icon-child-face.png&tbnid=lmjlREWI4E7X6M&vet=10CBAQxiAoAmoXChMIoNuC0fO6hQMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-pkpxo&docid=9MDEvZzLRDPphM&w=900&h=512&itg=1&q=profile%20pic%20logo&ved=0CBAQxiAoAmoXChMIoNuC0fO6hQMVAAAAAB0AAAAAEAc'    },
    {
      _id:3,
      name: "Bob",
      profilePic: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fe7.pngegg.com%2Fpngimages%2F639%2F452%2Fpng-clipart-computer-icons-avatar-user-profile-people-icon-child-face.png&tbnid=lmjlREWI4E7X6M&vet=10CBAQxiAoAmoXChMIoNuC0fO6hQMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-pkpxo&docid=9MDEvZzLRDPphM&w=900&h=512&itg=1&q=profile%20pic%20logo&ved=0CBAQxiAoAmoXChMIoNuC0fO6hQMVAAAAAB0AAAAAEAc'    },
    {
      _id:4,
      name: "Alice",
      profilePic: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fe7.pngegg.com%2Fpngimages%2F639%2F452%2Fpng-clipart-computer-icons-avatar-user-profile-people-icon-child-face.png&tbnid=lmjlREWI4E7X6M&vet=10CBAQxiAoAmoXChMIoNuC0fO6hQMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-pkpxo&docid=9MDEvZzLRDPphM&w=900&h=512&itg=1&q=profile%20pic%20logo&ved=0CBAQxiAoAmoXChMIoNuC0fO6hQMVAAAAAB0AAAAAEAc'    },
    {
      _id:5,
      name: "David",
      profilePic: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fe7.pngegg.com%2Fpngimages%2F639%2F452%2Fpng-clipart-computer-icons-avatar-user-profile-people-icon-child-face.png&tbnid=lmjlREWI4E7X6M&vet=10CBAQxiAoAmoXChMIoNuC0fO6hQMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-pkpxo&docid=9MDEvZzLRDPphM&w=900&h=512&itg=1&q=profile%20pic%20logo&ved=0CBAQxiAoAmoXChMIoNuC0fO6hQMVAAAAAB0AAAAAEAc'    }
  ]

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Image source={{uri: item.profilePic}} style={styles.profilePic} />
    </View>
  )
  return (
    <View >
      <View style={styles.container}>
        <TextInput placeholder='Search' style={styles.input} />
       
      </View>
      <Text style={styles.userTitle}>Users</Text>
      
      <View style={styles.tableContainer}>

      <View style={styles.header}>
        <Text style={styles.headerCell}>Name</Text>
        <Text style={styles.headerCell}>profile</Text>
      </View>
      <FlatList
        data={user}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()}
      />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
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
  userContainer: {
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
    textAlign: 'center',
    borderWidth: 1,
    paddingVertical: 5,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  profilePic:{
    height: 30,
    width: 30,
    borderRadius: 25,
  }

});

export default Users