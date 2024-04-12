import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Layout from '../../components/layouts/Layout'
import AntDesign from 'react-native-vector-icons/AntDesign'


const Dashboard = ({navigation}) => {
    return (
        <Layout>
            <View style={styles.main}>
                <Text style={styles.heading}>Dashboard</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('products')}>
                        <AntDesign name='edit' style={styles.icon} />
                        <Text style={styles.btnText}>Manage Products</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('category')}>
                        <AntDesign name='bars' style={styles.icon} />
                        <Text style={styles.btnText}>Manage Categories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('users')}>
                        <AntDesign name='user' style={styles.icon} />
                        <Text style={styles.btnText}>Manage Users</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('orders')}>
                        <AntDesign name='edit' style={styles.icon} />
                        <Text style={styles.btnText}>Manage Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <AntDesign name='infocirlceo' style={styles.icon} />
                        <Text style={styles.btnText}>About App</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'lightblue',
        height: '96%',
    },
    heading: {
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        margin: 10,
        borderRadius: 10,
        fontWeight: 'bold',
    },
    btnContainer: {
        margin:15,
    },
    btn:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        padding:20,
        borderRadius:10,
        elevation:10,
        marginBottom:20,
    },
    icon:{
        fontSize:25,
        marginRight:10,
        marginLeft:20,
    },
    btnText:{
        fontSize:18,
    }
})
export default Dashboard