import { View, Text, StyleSheet, ScrollView, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import Layout from '../../components/layouts/Layout'
import { userData } from '../../data/UserData'
import InputBox from '../../components/Form/InputBox'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';


const Profile = ({ navigation }) => {
    const route = useRoute();
    const { id } = route.params;
    console.log('this is the user id', id)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [contact, setContact] = useState(0);

    const [userInfo, setUserInfo] = useState({})

    const [image, setImage] = useState(null);

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

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
        console.log('one')
        if (name && name.length < 3) {
            return alert('Please enter your name');
        }

        if (email && !/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/.test(email)) {
            alert('Invalid email address');
            return;
        }

        if (password && password.length < 6) {
            return alert('Password must be at least 6 characters long');
        }

        if (contact && contact.length !== 10) {
            return alert('Please enter a valid contact number');
        }

        // Create formData with updated fields
        const formData = new FormData();
        if (image) {
            formData.append('file', {
                uri: image,
                name: 'photo.jpg',
                type: 'image/jpeg',
            });
        }
       if(name){
        formData.append("name", name);
       }
       if(email){
        formData.append("email", email);

       }
        if (password) {
            formData.append("password", password);
        }
        if (address) {
            formData.append("address", address);
        }
        if (city) {
            formData.append("city", city);
        }
        if (contact) {
            formData.append("contact", contact);
        }

        try {
            const res = await fetch('http://192.168.1.4:8080/api/user/profile-update', {
                method: 'PUT',
                body: formData,
            })
            if (res.ok) {
                const data = await res.json();
                await AsyncStorage.setItem('user', JSON.stringify(data.data));
                alert(data.message);
                navigation.navigate('account');
            } else {
                const errorData = await res.json();
                alert(errorData.message);
            }
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <Layout>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        {image ? (
                            <Image source={{ uri: image }} style={styles.image} />
                        ) : (
                            userInfo && (
                                <Image source={userInfo.profilePic ? { uri: userInfo.profilePic.url } : null} style={styles.image} />
                            )
                        )}
                        <Pressable onPress={pickImage}>
                            <Text style={{ color: 'green' }}>Change Profile Picture</Text>
                        </Pressable>
                    </View>
                    <InputBox value={name} setValue={setName} placeholder={'Enter your name'} autoComplete={'name'} />
                    <InputBox value={email} setValue={setEmail} placeholder={'Enter your email'} autoComplete={'email'} />
                    <InputBox value={contact.toString()} setValue={setContact} keyboardType={'number-pad'} placeholder={'Enter your mobile'} autoComplete={'tel'} />
                    <InputBox secureTextEntry={true} value={password} setValue={setPassword} placeholder={'Enter your password'} autoComplete={'password'} />
                    <InputBox value={city} setValue={setCity} placeholder={'Enter your city'} autoComplete={'country'} />
                    <InputBox value={address} setValue={setAddress} placeholder={'Enter your address'} autoComplete={'address line-1'} />


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