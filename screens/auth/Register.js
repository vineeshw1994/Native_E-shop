import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/Form/InputBox';
import * as ImagePicker from 'expo-image-picker';

const Register = ({ navigation }) => {
    const loginImage = 'https://www.opengatefmmbale.com/images/blog-wp-login.png'

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [contact, setContact] = useState('');

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



    const handleRegister = async () => {
        if (!email || !password || !name || !address || !city || !contact || !image) {
            return alert('Please fill all the fields');
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return alert('Please enter a valid email');
        }
        if (password.length < 6) {
            return alert('Password must be atleast 6 characters');
        }
        if (contact.length != 10) {
            return alert('Please enter a valid contact number');
        }

        const formData = new FormData();
        formData.append('file', {
            uri: image,
            name: 'photo.jpg',
            type: 'image/jpeg',
        });
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("address", address);
        formData.append("city", city);
        formData.append("contact", contact);

        try {
            const res = await fetch('http://192.168.1.4:8080/api/user/register', {

                method: 'POST',
                body: formData,
            })
            if (res.ok) {
                const data = await res.json();
                // console.log(data);
                setImage(null);
                alert(data.message);
                navigation.navigate('login');
            }
            if(!res.ok){
                console.log('failed')
                const data = await res.json();
                console.log(data);
                alert(data.message);
                navigation.navigate('register');
            }
        } catch (error) {
            console.log(error)
            alert('Register  Failed')
        }


    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: loginImage }} />

                <InputBox placeholder={'Enter Your Name'} autoComplete={"name"} value={name} setValue={setName} />

                <InputBox placeholder={'Enter Your Email'} autoComplete={"email"} value={email} setValue={setEmail} />

                <InputBox placeholder={'Enter Your Password'} secureTextEntry={true} value={password} setValue={setPassword} />

                <InputBox placeholder={'Enter Your Mobile'} type='tel' value={contact} setValue={setContact} autoComplete={'tel'} />

                <InputBox placeholder={'Enter Your City'} value={city} setValue={setCity} autoComplete={'off'} />

                <InputBox placeholder={'Enter Your Address'} value={address} setValue={setAddress} autoComplete={'street-address'} />

                
                <View style={styles.imgUploadContainer}>
                <Button style={styles.uploadImg} title="Choose Image" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={styles.showImage} />}
               
                </View>
                
                
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
        width: '60%',
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
    },
    button: {
        backgroundColor: "#007AFF",
        width: "80%",
        padding: 10,
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        marginHorizontal: 40,

    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center'
    },
    showImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
  
    imageContainer: {
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },
    uploadImg: {
        backgroundColor: "#007AFF",
        width: "80%",
        padding: 10,    
        height: 40,
    },
    imgUploadContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 40,
        marginVertical: 5,
        borderRadius: 10,
    }
})

export default Register