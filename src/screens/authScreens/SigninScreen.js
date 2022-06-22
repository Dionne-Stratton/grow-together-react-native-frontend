import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const SigninScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
        <Text style={{marginBottom: 25}} >Sign In</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
            <Text style={styles.link} >Sign Up instead.</Text>
        </TouchableOpacity>
        </View>
        )
}

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1,
        justifyContent: 'center',
        marginTop: 70
    },
    link: {
        color: '#5ea303',
        marginTop: 30,
        fontSize: 16
    }
})

export default SigninScreen