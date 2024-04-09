import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ForgotPassword = ({navigation}) => {
    const [phone, setPhone] = useState('')

    const handleSubmit = async() => {
        if(!phone || phone.length < 10 || phone === ''){
            alert('Please enter a valid phone number')
            return
        }
        try{
            const res = await fetch('http://192.168.1.3:8080/api/user/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone
                })
            })
            const data = await res.json()
            alert(data.message)
            if(data.success){
                navigation.navigate('otp')
            }
    
        }catch(error){
            console.log(error.message)
            alert('Internal Server Error')
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter Your Phone Number</Text>
            <TextInput placeholder='Phone Number' keyboardType='number-pad' value={phone} onChangeText={(e)=> setPhone(e)} style={styles.input} />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        flex: 1
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: '80%',
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: 'blue',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold', 
    },
    button: {
        backgroundColor: 'blue',
        width: '40%',
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        
    },
    btnText:{
        color:'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default ForgotPassword