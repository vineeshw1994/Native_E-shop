import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { categoriesData } from '../../data/CategoriesData'
import { useNavigation } from '@react-navigation/native'


const Categories = () => {
  const navigation = useNavigation()
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {categoriesData?.map((item) => {
          return (
            <View key={item._id} >
              <TouchableOpacity style={styles.catContainer} onPress={()=> navigation.navigate(item.path)}>
               <Image source={{ uri: item.icon }} style={styles.catIcon} />
                <Text style={styles.carTitle}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 5,
    flexDirection: 'row',
  },
  catContainer: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catIcon: {
    height:60,
    width:60,
    verticalAlign: 'top',
    borderRadius: 10,

  },
  carTitle: {
    fontSize: 12,
  }
})

export default Categories