import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import UserProfile from './src/UserProfile';
import CartScreen from './src/CartScreen';
import OrderComplete from './src/OrderComplete';
import OnboardingScreen from './src/OnboardingScreen';
const StackNavigation = () => {

    const Stack = createNativeStackNavigator();

  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={UserProfile} options={{headerShown:false}} />
        <Stack.Screen name="cart" component={CartScreen} options={{headerShown:false}} />
        <Stack.Screen name="Order" component={OrderComplete} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})