import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import CartScreen from '../screens/CartScreen'

const Stack = createNativeStackNavigator();

const CartNav = () => {
    return (
        <Stack.Navigator 
            initialRouteName="CartScreen"
            
        >
            <Stack.Screen 
                name="CartScreen" 
                component={ CartScreen } 
                options={{ 
                    headerShown: false,
                    title: "Your Cart"
                }}
            />
        </Stack.Navigator>
    )
}

export default CartNav

const styles = StyleSheet.create({})
