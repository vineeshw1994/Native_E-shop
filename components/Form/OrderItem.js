import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const OrderItem = ({ order }) => {
    return (
        <View style={styles.container}>
            <View style={styles.orderInfo}>
                <Text>Order ID : {order._id}</Text>
                <Text>Date : {order.date}</Text>
            </View>

            <Text>Name : {order.productInfo.name}</Text>
            <Text>Price : {order.productInfo.price}</Text>
            <Text>Quantity : {order.productInfo.quantity}</Text>
            <Text>Total : {order.totalAmount}</Text>
            <Text style={styles.status}>Order Status : {order.status}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    orderInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        paddingBottom: 10,
    },
    status: {
        borderTopWidth: 1,
        fontWeight: 'bold',
        borderColor: 'lightgray',
        padding:5,
    }
})

export default OrderItem