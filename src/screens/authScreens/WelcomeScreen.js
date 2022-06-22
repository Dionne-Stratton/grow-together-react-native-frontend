import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'

const WelcomeScreen = ({navigation}) => {
    
    return (
        
        <View style={styles.container}>
        <Text>Welcome!</Text>
        </View>
        )
}

WelcomeScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 120
    }
})

export default WelcomeScreen