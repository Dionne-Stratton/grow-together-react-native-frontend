import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../../screens/authScreens/WelcomeScreen';
import SigninScreen from '../../screens/authScreens/SigninScreen';
import SignupScreen from '../../screens/authScreens/SignupScreen';
import LogoTitle from '../LogoTitle'

const Stack = createNativeStackNavigator()

function LoginFlow () {
    return(
        <>
            <Stack.Navigator 
                screenOptions={{
                    headerStyle: {
                      backgroundColor: '#f8faca',
                    },
                    headerTintColor: '#5ea303',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                    headerTitle: (props) => <LogoTitle {...props} />,
                    headerBackVisible:false
                  }}
            >
                <Stack.Screen 
                    name="Signup" 
                    component={SignupScreen}
                />
                <Stack.Screen 
                    name="Welcome" 
                    component={WelcomeScreen}
                />
                {/* <Stack.Screen name="Create Profile" component={ProfileCreateScreen} /> */}
                <Stack.Screen 
                    name="Signin" 
                    component={SigninScreen}
                />
            </Stack.Navigator>
        </>
    )
}

export default LoginFlow

