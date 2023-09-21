import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
 
const OrderComplete = () => {
  return (
  
    <View style={{flex:1, justifyContent:'center' , alignSelf:'center'}} >
        <LottieView style={{width:400 , height:400}} source={require("../assets/order.json")} autoPlay loop />

    </View>
 
   
  )
}

export default OrderComplete

const styles = StyleSheet.create({})