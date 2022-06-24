import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CheckBox from 'expo-checkbox'

const SignupScreen = ({ navigation }) => {

    const [checked, setChecked] = useState(false)

    return (
        <View style={styles.container}>
        <Text h3 style={{marginBottom: 25}} >Sign Up here</Text>
        <View style={styles.flexRow}>
            <Text>I am a mentor: </Text>
            <CheckBox
                disabled={false}
                value={checked}
                onValueChange={(newValue) => setChecked(newValue)}
            />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')} >
            <Text style={styles.link} >Sign In instead.</Text>
        </TouchableOpacity>
        </View>
        )
}

// SignupScreen.navigationOptions = () => {
//     return {
//       headerShown: false,
//     };
// };

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
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row'
      }
})

export default SignupScreen