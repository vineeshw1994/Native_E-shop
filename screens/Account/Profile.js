import { View, Text, StyleSheet, ScrollView, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Layout from '../../components/layouts/Layout'
import { userData } from '../../data/UserData'
import InputBox from '../../components/Form/InputBox'

const Profile = ({navigation}) => {
    const [name, setName] = useState(userData.name);
    const [profilePic, setProfilePic] = useState(userData.profilePic);
    const [email, setEmail] = useState(userData.email);
    const [password, setPassword] = useState(userData.password);
    const [address, setAddress] = useState(userData.address);
    const [city, setCity] = useState(userData.city);
    const [contact, setContact] = useState(userData.mobile);

    const hadleUpdate = () => {
        if (!email || !password || !name || !address || !city || !contact) {
            return alert('Please fill all the fields');
        }
        alert('Profile Updated successfully');
        navigation.navigate('account');

    }
    return (
        <Layout>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: profilePic }} style={styles.image} />
                        <Pressable onPress={() => alert('profile dailogbox')}>
                            <Text style={{color:'green'}}>Change Profile Picture</Text>        
                        </Pressable>
                    </View>
                    <InputBox value={name} setValue={setName} placeholder={'Enter your name'} autoComplete={'name'} />

                    <InputBox value={email} setValue={setEmail} placeholder={'Enter your email'} autoComplete={'email'} />

                    <InputBox value={contact} setValue={setContact} placeholder={'Enter your mobile'} autoComplete={'tel'} />

                    <InputBox value={password} setValue={setPassword} placeholder={'Enter your password'} autoComplete={'password'} secureTextEntry={true} />

                    <InputBox value={city} setValue={setCity} placeholder={'Enter your city'} autoComplete={'country'} />

                    <InputBox value={address} setValue={setAddress} placeholder={'Enter your address'} autoComplete={'address line-1'} />

                    <TouchableOpacity onPress={hadleUpdate} style={styles.updateBtn}>
                        <Text style={styles.btnUpdateText}>Update Profile</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    imageContainer: {
       justifyContent:'center',
       alignItems:'center',
    },
    image:{
        height: 100,
        width:'100%',
        resizeMode:'contain'
    },
    updateBtn:{
        backgroundColor:'blue',
        height:40,
        borderRadius:20,
        marginHorizontal:30,
        justifyContent:'center',
        marginTop:10,
    },
    btnUpdateText:{
        color:'white',
        textAlign:'center',
        fontSize:18,
    }

})
export default Profile