import { View, Text, StyleSheet, ScrollView, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import Layout from '../../components/layouts/Layout'
import { userData } from '../../data/UserData'
import InputBox from '../../components/Form/InputBox'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation }) => {
    const route = useRoute();
    const { id } = route.params;
    console.log('this is the user id', id)
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [contact, setContact] = useState(0);

    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        const getuser = async () => {
            const userString = await AsyncStorage.getItem('user')
            if (userString) {
                const user = JSON.parse(userString)
                setUserInfo(user)
            }
        }

        getuser()
    }, [])
    console.log(userInfo, 'this is userinformation')

    const hadleUpdate = async () => {
        if (!email || !name || !address || !city || !contact) {
            return alert('Please fill all the fields');
        }
        if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/.test(email)) {
            alert('Invalid email address');
        }
        if (password.length < 6) {
            return alert('Password must be at least 6 characters long')
        }
        if (contact.length != 10) {
            return alert('Please enter a valid contact number');
        }

        try {
            const res = await fetch('http://192.168.1.3:8080/api/user/profile-update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    name,
                    contact,
                    city,
                    address
                })
            })
            if (res.ok) {
                const data = await res.json();
                // console.log(data.user,'this is the data')
                await AsyncStorage.setItem('user', JSON.stringify(data.data));
                alert('Login successful');
                navigation.navigate('home');
            } else {
                const errorData = await res.json();
                alert(errorData.message);
            }
        } catch (error) {
            alert(error.message, 'like this')
        }
    }
    return (
        <Layout>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={userInfo.profilePic ? { uri: userInfo.profilePic.url } : null} style={styles.image} />
                        <Pressable onPress={() => alert('profile dailogbox')}>
                            <Text style={{ color: 'green' }}>Change Profile Picture</Text>
                        </Pressable>
                    </View>
                    <InputBox value={userInfo.username} setValue={setName} placeholder={'Enter your name'} autoComplete={'name'} />

                    <InputBox value={userInfo.email} setValue={setEmail} placeholder={'Enter your email'} autoComplete={'email'} />

                    <InputBox value={userInfo.phone} setValue={setContact} keyboardType={Number} placeholder={'Enter your mobile'} autoComplete={'tel'} />

                    <InputBox value={password} setValue={setPassword} placeholder={'Enter your password'} autoComplete={'password'} secureTextEntry={true} />

                    <InputBox value={userInfo.city} setValue={setCity} placeholder={'Enter your city'} autoComplete={'country'} />

                    <InputBox value={userInfo.address} setValue={setAddress} placeholder={'Enter your address'} autoComplete={'address line-1'} />

                    <TouchableOpacity onPress={hadleUpdate} style={styles.updateBtn}>
                        <Text style={styles.btnUpdateText}>Update Profile</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 100,
        width: '100%',
        resizeMode: 'contain'
    },
    updateBtn: {
        backgroundColor: 'blue',
        height: 40,
        borderRadius: 20,
        marginHorizontal: 30,
        justifyContent: 'center',
        marginTop: 10,
    },
    btnUpdateText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    }

})
export default Profile