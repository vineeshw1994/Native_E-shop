import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import InputBox from '../../components/Form/InputBox';

const Login = ({navigation}) => {
    const loginImage = 'https://www.opengatefmmbale.com/images/blog-wp-login.png'

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            return alert('Please fill all the fields');
        }
        alert('Login Successfully');
        navigation.navigate('home');
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: loginImage }} />
            <InputBox placeholder={'Enter Your Email'} autoComplete={"email"} value={email} setValue={setEmail} />
            <InputBox placeholder={'Enter Your Password'} secureTextEntry={true} value={password} setValue={setPassword} />
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('forgot')}>
               <Text style={styles.commonText}>Forgot Password?</Text>
               </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('register')}>
                    <Text style={styles.commonText}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
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
    commonText:{
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
    }
})

export default Login;
