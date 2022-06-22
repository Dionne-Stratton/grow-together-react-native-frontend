import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const SignupScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
        <Text h3 style={{marginBottom: 25}} >Sign Up here</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')} >
            <Text style={styles.link} >Sign In instead.</Text>
        </TouchableOpacity>
        </View>
        )
}

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1,
        justifyContent: 'center'
    },
    link: {
        color: '#5ea303',
        marginTop: 30,
        fontSize: 16
    }
})

export default SignupScreen