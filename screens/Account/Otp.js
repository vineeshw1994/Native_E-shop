import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Otp = () => {
    const [otp, setOtp] = useState('')

    const handleSubmit = async() => {
        if(!otp || otp.length < 4 || otp === ''){
            alert('Please enter a valid otp')
            return
        }
        try{
            const res = await fetch('http://192.168.1.5:3000/api/user/otp-validation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    otp
                })
            })
            const data = await res.json()
            alert(data.message)
            if(data.success){
                navigation.navigate('login')
            }
    
        }catch(error){
            console.log(error.message)
            alert('Internal Server Error')
        }
    }
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Enter Your OTP</Text>
    <TextInput placeholder='Enter Your OTP' keyboardType='number-pad' value={phone} onChangeText={(e)=> setPhone(e)} style={styles.input} />
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

export default Otp