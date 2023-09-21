import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQty, getProduct, incrementQty } from "../ReducerData/ProductReducer";
import { addToCart, decrementQuantity, incrementQuantity } from "../ReducerData/CartReducer";


const FoodItem = ({ item, index }) => {
  //     const FoodItemData = [
  //         {
  //             id: 0,
  //             image: require("../assets/roll.jpg"),
  //             name: "Roll",
  //             quantity: 0,
  //             price: 3,
  //         },
  //         {
  //             id: 1,
  //             image: require("../assets/pizza.jpg"),
  //             name: "Pizza",
  //             quantity: 0,
  //             price: 5,
  //         },
  //         {
  //             id: 2,
  //             image: require("../assets/chicken.jpg"),
  //             name: "chicken",
  //             quantity: 0,
  //             price: 7,
  //         },
  //         {
  //             id: 3,
  //             image: require("../assets/chicken-roll.jpg"),
  //             name: "Chicken Roll",
  //             quantity: 0,
  //             price: 3,
  //         },
  //         {
  //             id: 4,
  //             image: require("../assets/sandwich.jpg"),
  //             name: "Sandwich",
  //             quantity: 0,
  //             price: 3,
  //         },
  //         {
  //             id: 5,
  //             image: require("../assets/roll.jpg"),
  //             name: "Roll",
  //             quantity: 0,
  //             price: 4,
  //         },
  //     ];
  //     // we are accessing of the cart 
  //     const cart = useSelector((state) => state.cart.cart);
  //     const product= useSelector((state)=>state.product.product)
  //     // console.log( "FoodItemData product " , product);
  //  const dispatch =useDispatch()

  //  useEffect(()=>{
  //      if ( product.length > 0)return;

  //     const fetchProducts =()=>{
  //         FoodItemData.map((item)=>dispatch(getProduct(item)))
  //     } 
  //     fetchProducts()

  //  }, []);
  //  console.log(product);
  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch()
  const addItemToCart = () => {
    dispatch(addToCart(item)); // cart
    dispatch(incrementQty(item)); //product

  }

  return (
    <View style={{}} >
      <ScrollView showsHorizontalScrollIndicator={false}>

        <Pressable
          key={index}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 8,
            borderColor: "grey",
            borderWidth: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 14,
          }}
        >
          <View style={{}} >
            <Image
              style={{ borderRadius: 3, width: 150, height: 100, resizeMode: 'contain' }}
              source={item.image}
            />
          </View>
          <View style={{ width: 110, }} >
            <Text
              style={{
                color: 'black',
                fontSize: 19,
                fontWeight: "500",
                marginBottom: 7,
                marginLeft: 5

              }}
            >
              {item.name}
            </Text>
            <Text style={{ color: "grey", fontSize: 15, marginLeft: 12 }}>
              ${item.price}
            </Text>
          </View>
          {/* we are checking any item in the cart or not   */}
          {cart.some((c) => c.id === item.id) ? (
            <Pressable
              style={{
                flexDirection: "row",
                paddingHorizontal: 10,
                paddingVertical: 5,

              }}
            >
              <Pressable
                onPress={() => {
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
                    color: "#F74B00",
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
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          ) : (
            <Pressable onPress={addItemToCart} style={{ width: 80, marginRight: 7, backgroundColor: '#FFFFFF' }}>
              <Text
                style={{
                  borderColor: "grey",
                  borderWidth: 0.8,
                  marginVertical: 10,
                  color: "#F74B00",
                  borderRadius: 4,
                  textAlign: "center",
                  padding: 5,
                  fontSize: 17,
                  fontWeight: "bold",
                }}
              >
                Add
              </Text>
            </Pressable>
          )}


        </Pressable>
      </ScrollView>

    </View>
  );
};

export default FoodItem;

;
