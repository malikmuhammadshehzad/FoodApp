import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native"

import FoodServices from '../components/FoodServices';
import FoodItem from '../components/FoodItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../ReducerData/ProductReducer';
const HomeScreen = () => {

 const cart = useSelector((state) => state.cart.cart); // 1: [state.cart] first cart is Store reducer cart. 2:[state.cart.cart] second cart is initialState:cart[] of createSlice method
  // console.log( " cart Data " , cart);                      // then we reduce it because we have many item present 
  const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0)
  const navigation = useNavigation()
  const FoodItemData = [
    {
        id: 0,
        image: require("../assets/roll.jpg"),
        name: "Roll",
        quantity: 0,
        price: 3,
    },
    {
        id: 1,
        image: require("../assets/pizza.jpg"),
        name: "Pizza",
        quantity: 0,
        price: 5,
    },
    {
        id: 2,
        image: require("../assets/chicken.jpg"),
        name: "chicken",
        quantity: 0,
        price: 7,
    },
    {
        id: 3,
        image: require("../assets/chicken-roll.jpg"),
        name: "Chicken Roll",
        quantity: 0,
        price: 3,
    },
    {
        id: 4,
        image: require("../assets/sandwich.jpg"),
        name: "Sandwich",
        quantity: 0,
        price: 3,
    },
    {
        id: 5,
        image: require("../assets/roll.jpg"),
        name: "Roll",
        quantity: 0,
        price: 4,
    },
];
// we are accessing of the cart 

const product= useSelector((state)=>state.product.product)
console.log("🚀 ~ file: HomeScreen.js:63 ~ HomeScreen ~ product:", product)
// console.log( "FoodItemData product " , product);
const dispatch =useDispatch()

useEffect(()=>{
 if ( product.length > 0)return;

const fetchProducts =()=>{
    FoodItemData.map((item)=>dispatch(getProduct(item)))
} 
fetchProducts()

}, []);
  return (
    <>
      <ScrollView

      
        style={{ backgroundColor: '#EAEBED', }} >
        {/* location and profile */}
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10, marginTop:7 , }}
        >
          <FontAwesome name="map-marker" size={30} color="#F74B00" />


          <View   >
            <Text style={{ fontSize: 20, fontWeight: "600", color: 'black' }}> Home </Text>
            <Text style={{ marginLeft: 4 }} >New York</Text>
          </View>
          {/* <Pressable onPress={()=> navigation.navigate("Profile") } style={{ marginLeft: "auto", marginRight: 7 }}> */}
          <Pressable onPress={() => navigation.navigate("Profile")} style={{ marginLeft: "auto", marginRight: 7 }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 25 }}
              source={require('../assets/user.png')}
            />
          </Pressable>
        </View>

        {/*  Deal Img */}
        <View style={{ padding: 10 }} >
          <Image
            style={{ width: "auto", borderRadius: 10, height: 150, resizeMode: "contain", }}
            source={require('../assets/deal.jpg')}
          />
        </View>


        {/* search Bar  */}
        <View style={{ padding: 10 }} >
          <View
            style={{
              padding: 2,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 0.6,
              borderColor: "#6A6A6A",
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              borderRadius: 30,
              backgroundColor: '#FFFFFF',

            }}
          >
            <TextInput fontSize={22} marginLeft={12} placeholder="Search  item" />
            <FontAwesome marginRight={17} name="search" size={24} color="#F74B00" />
          </View>
        </View>
        {/* FoodServices */}
        <FoodServices />
        {/* FoodItem */}
      
        {product.map((item , index)=>(
       <FoodItem item={item} key={index} />
        ))}
      </ScrollView>
      {total === 0 ? (null) : (
        <Pressable
          style={{
          
            backgroundColor: "#F36106",
            padding: 10,
            marginBottom: 30,
            margin: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",   
            justifyContent: "space-between",
            height:70
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#FFFFFF" }} >
              {/* for calculating the no of item */}
              {cart.length}  <Text style={{ fontSize: 17, fontWeight: "600", color: "black", }} > items| $ </Text>{total}
            </Text>
         
          </View>
          <Pressable onPress={() => navigation.navigate("cart")} >
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }} >Proceed to Pickup</Text>
          </Pressable>
        </Pressable>
      )}
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})