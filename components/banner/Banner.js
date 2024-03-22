import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Carousel, { Pagination } from 'react-native-x-carousel';

import { BannerData } from '../../data/BannerData';

const Banner = () => {
    const renderItem = data => (
        <View key={data.text} style={styles.item}>
          <Text>{data.cornerLabelText}</Text>
        </View>
      );
      return (
        <View style={styles.container}>
          <Carousel
            pagination={Pagination}
            renderItem={renderItem}
            data={BannerData}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',

    },
    cardWrapper:{
        borderRadius:8,
        overflow: 'hidden',
    }
  });
export default Banner