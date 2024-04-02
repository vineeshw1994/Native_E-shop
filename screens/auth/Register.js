import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/Form/InputBox';

const Register = ({ navigation }) => {
    const loginImage = 'https://www.opengatefmmbale.com/images/blog-wp-login.png'

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [contact, setContact] = useState('');

    const handleRegister = () => {
        if (!email || !password || !name || !address || !city || !contact) {
            return alert('Please fill all the fields');
        }
        alert('Register  Successfully ');
        navigation.navigate('login');
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: loginImage }} />
                <InputBox placeholder={'Enter Your Name'} autoComplete={"name"} value={name} setValue={setName} />
                <InputBox placeholder={'Enter Your Email'} autoComplete={"email"} value={email} setValue={setEmail} />
                <InputBox placeholder={'Enter Your Password'} secureTextEntry={true} value={password} setValue={setPassword} />
                <InputBox placeholder={'Enter Your Mobile'} secureTextEntry={true} value={contact} setValue={setContact} autoComplete={'tel'} />
                <InputBox placeholder={'Enter Your City'} secureTextEntry={true} value={city} setValue={setCity} autoComplete={'country'} />
                <InputBox placeholder={'Enter Your Address'} secureTextEntry={true} value={address} setValue={setAddress} autoComplete={'address line-1'} />
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
                        <Text style={styles.btnText}>Register</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                        <Text style={styles.commonText}>You have an account? Sign In </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: '100%'
    },
    image: {
        height: 200,
        width: "100%",
        resizeMode: "contain"
    },
    loginBtn: {
        backgroundColor: 'blue',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 20,
        height: 40,
        marginVertical: 20
    },
    btnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'

    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    commonText: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
    }
})

export default Register