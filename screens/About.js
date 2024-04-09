import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Layout from '../components/layouts/Layout';

const About = () => {
    console.log('this is the category screen')
    return (
        <Layout>
            <View>
            <Text>About</Text>
        </View>
        </Layout>
    );
}

const styles = StyleSheet.create({})

export default About;
