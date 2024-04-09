import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/Form/InputBox';
import ImagePicker from 'react-native-image-picker';
const Register = ({ navigation }) => {
    const loginImage = 'https://www.opengatefmmbale.com/images/blog-wp-login.png'

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [contact, setContact] = useState('');

    const [imageData, setImageData] = useState(null);

    const selectImage = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.uri };
                setImageData(source);
                uploadImage(response);
            }
        });
    };


    const handleRegister = () => {
        if (!email || !password || !name || !address || !city || !contact) {
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

                <InputBox placeholder={'Enter Your Mobile'} value={contact} setValue={setContact} autoComplete={'tel'} />

                <InputBox placeholder={'Enter Your City'} value={city} setValue={setCity} autoComplete={'off'} />

                <InputBox placeholder={'Enter Your Address'} value={address} setValue={setAddress} autoComplete={'street-address'} />
                <Button title="Upload  Image" onPress={selectImage} />
                {imageData && <Image source={imageData} style={{ width: 200, height: 200 }} />}

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