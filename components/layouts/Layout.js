import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ childern }) => {
  return (
    <>
      <StatusBar />
      <Header />
      <View>{childern}</View>
      <Footer />
    </>
  )
}

export default Layout