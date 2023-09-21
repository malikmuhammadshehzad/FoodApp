import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const FoodServices = () => {
  const servicesData = [
    {
      id: 0,
      image: require('../assets/vector/burger.jpg'),
      name: "Burger",
    },
    {
      id: 1,
      image: require('../assets/vector/pizza.jpg'),
      name: "Pizza",
    },
    {
      id: 2,
      image: require('../assets/vector/roll.jpg'),
      name: "Roll",
    },
    {
      id: 3,
      image: require('../assets/vector/sandwich.jpg'),
      name: "sandwich",
    },
    {
      id: 4,
      image: require('../assets/vector/drink.jpg'),
      name: "Drink",
    },
  ];
  return (
    <View style={{ marginLeft:16}}>
      <Text style={{   fontSize: 20, fontWeight: "500", marginBottom: 7, color: "black", }}>
        Services Available
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {servicesData.map((service, index) => {
          return (
            
            <Pressable
              style={{
                margin: 3,  
                backgroundColor: "#FFFFFF",
                padding: 20,            
                borderColor:'grey',
                borderWidth:1,
                borderRadius:20,

              }}
              key={index}
            >
              <Image
                source={service.image}
                style={{ width: 70, height: 70 , resizeMode:'contain'  }}
              />
              <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "center", marginTop: 10 , color:'black' }}>
                {service.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({});

export default FoodServices;
