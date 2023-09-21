 import { StyleSheet, Text, View } from 'react-native'
 import React, { useEffect } from 'react'
import StackNavigation from './StackNavigation'
import { Provider } from 'react-redux'
import Store from './ReducerData/Store'
import SplashScreen from 'react-native-splash-screen';


 const App = () => {
  useEffect(()=>{
    SplashScreen.hide()
  },[])
   return (
    <Provider store={Store} >
      <StackNavigation/>
    </Provider>
   )
 }
 
 export default App
 
 const styles = StyleSheet.create({})