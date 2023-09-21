import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
 
import { useNavigation,} from "@react-navigation/native";
import { cleanCart, decrementQuantity, incrementQuantity } from "../ReducerData/CartReducer";
import { decrementQty, incrementQty } from "../ReducerData/ProductReducer";
import FontAwesome from "react-native-vector-icons/FontAwesome";
 
 

const CartScreen = () => {
  const navigation = useNavigation();
  // const userUid = auth.currentUser.uid
  // const route = useRoute();
  const Cart = useSelector((state) => state.cart.cart); 
  const total = Cart.map((item) => item.quantity * item.price).reduce(
    (curr, prev) => curr + prev,
    0
  );
  const dispatch = useDispatch();
  const placeOrder = () => {
    navigation.navigate("Order")

    dispatch(cleanCart())
   
  }
  return (
    <>

      <ScrollView style={style.mainContainer}>
        {total === 0 ? (
          <>
       
           <View
           style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
         >
           <FontAwesome
             onPress={() => {
               navigation.goBack();
             }}
             name="arrow-left"
             size={22}
             color="#F36106"

           />
           <Text style={{color:"#000000" , marginLeft:55 , fontSize:28 , fontWeight:'700' }} >Your cart is Empty </Text>
         </View>
         <View  >
       <Image
       style={{ width: 400, height: 400,  marginTop:50}}
       source={require("../assets/emptyCart.png")}
       />

        
         </View>
         {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
    <FontAwesome
      onPress={() => {
        navigation.goBack();
      }}
      name="arrow-left"
      size={22}
      color="#F36106"
     
    />
    <Text style={{ color: '#000000', marginLeft: 9, fontSize: 22, fontWeight: '600' }}>
      Your cart is Empty
    </Text>
  </View>
  <Image
    style={{ width: 400, height: 400 , resizeMode:'contain' , marginLeft:22 , marginTop:50}}
    source={require('../assets/emptyCart.png')}
  />
</View> */}

         </>
        ) : (
          <> 
            <View
              style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
            >
              <FontAwesome
                onPress={() => {
                  navigation.goBack();
                }}
                name="arrow-left"
                size={22}
                color="#F36106"

              />
              <Text style={{color:"#000000" , marginLeft:7 , fontSize:17 , fontWeight:'600' }} > Your Bucket </Text>
            </View>
            <Pressable
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
                marginLeft: 10,
                marginRight: 10,
                padding: 14,
              }}
            >
              {Cart.map((item, index) => (
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", marginVertical: 12 }} key={index}>
                  <Text style={{ width: 100, fontSize: 19, fontWeight: "500" , color:'#000000' }} >{item.name}</Text>
                  {/* - and + Button  */}
                  <Pressable
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderRadius: 10,
                    }}
                  >
                    <Pressable
                      onPress={() => { // we will dispatch these two event
                        dispatch(decrementQuantity(item)); // this for cart  // item is coming for the props
                        dispatch(decrementQty(item)); // this for product 
                      }}
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: 13,
                        backgroundColor: "#EAEBED",
                        justifyContent: "center",
                        alignContent: "center",
                       
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#F74B00",
                          paddingHorizontal: 6,
                          fontWeight: "800",
                          textAlign: "center",
      
                        }}
                      >
                        -
                      </Text>
                    </Pressable>
                    <Pressable>
                      <Text
                        style={{
                          fontSize: 19,
                          color: "#F36106",
                          paddingHorizontal: 8,
                          fontWeight: "600",
                        }}
                      >
                        {item.quantity}
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        dispatch(incrementQuantity(item));  // this for cart  // item is coming for the props
                        dispatch(incrementQty(item));  // this for product // when i click on the plus button then product function run and increas by 1 
                      }}
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: 13,
                        backgroundColor: "#EAEBED",
                        justifyContent: "center",
                        alignContent: "center",
                       
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#F74B00",
                          paddingHorizontal: 6,
                          fontWeight: "800",
                          textAlign: "center",
      
                        }}
                      >
                        +
                      </Text>
                    </Pressable>
                  </Pressable>

                  <Text style={{ width: 100, fontSize: 16, fontWeight: "500" }}>$ {item.price *  item.quantity}</Text>
                </View>
              ))}
            </Pressable>
            <View style={{ marginHorizontal: 10 }}>
  
                <View  style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
              marginTop:12,
                padding: 14,
              }} > 
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <Text style={{
                    fontSize: 18, fontWeight: "400", color: '#000000'
                  }} >
                   Total Item 
                  </Text>
                  <Text style={{
                    fontSize: 18, fontWeight: "400" , color: '#F36106'
                  }} >
                    {total}
                  </Text>
                </View>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginVertical: 8,
                }}>
                  <Text style={{
                    fontSize: 18, fontWeight: "400", color: '#000000'
                  }} >
                    Delivery Fee | 1.2KM
                  </Text>
                  <Text style={{
                    fontSize: 18, fontWeight: "500", color: '#F36106',
                  }} >
                    FREE
                  </Text>
                </View>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',

                }}>
                  <Text style={{
                    fontSize: 18, fontWeight: "400", color: '#000000'
                  }} >
                    Free Delivery on Your Oder
                  </Text>
                </View>
      
                </View>
              <View
                  style={{
                    borderColor: "#000000",
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />
                <View style={{
                  flexDirection: 'row',
                  alignItems: "center",
                  justifyContent: 'space-between',
                  marginVertical:12,
                }} >
                  <Text style={{ fontSize: 18, fontWeight: "500", color: 'black' }} >
                    To Pay
                  </Text>
                  <Text style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color:'#F36106'
                  }} >
                    {total}
                  </Text>
                </View>
     
            </View>
          </>
        )}
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
            height:70,
            
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }} >
              {/* for calculating the no of item */}
              {Cart.length} <Text style={{ fontSize: 17, fontWeight: "600", color: "black", }} > items| $ </Text>{total}
            </Text>
           
          </View>
          <Pressable onPress={placeOrder} >
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }} >Place Order</Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};
export default CartScreen;

const style = StyleSheet.create({
  mainContainer: {
    marginTop: 29,
    marginHorizontal: 12,
  },
});
