
import { useNavigation } from '@react-navigation/native';

import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Pressable } from 'react-native';



const OnboardingScreen = () => {

 
   

    const navigation = useNavigation()
    return (
        <>
            <Image
                source={require("../assets/splashPic.png")}
                resizeMode="cover"
                style={{ flex: 1, width: "100%", height: "100%", backgroundColor: '#F36106', resizeMode: 'contain' }}
            />

            <View style={styles.mainContainer}>
                <View style={styles.textContainer}>
                    <Text style={{ color: '#F74B00', fontSize: 50, fontWeight: 'bold', marginTop: -33 }}>
                        Enjoy Eating
                    </Text>
                    <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>
                        Food Delivery App
                    </Text>
                    <Text style={{ color: '#A4A7AB', fontSize: 15, marginTop: 10 }}>All the delicious food on your app </Text>
                    <Text style={{ color: '#A4A7AB', fontSize: 15, marginBottom: 20 }}>describe better than world</Text>

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => { navigation.navigate('Home') }}  >
                        <Text
                            style={styles.buttonText}
                        >
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        marginTop: -30,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20

    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // height:'auto'
    },
    buttonContainer: {
        backgroundColor: '#F74B00',
        padding: 10,
        borderRadius: 15,
        minWidth: 300,
        margin: 10,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.8, // Shadow opacity
        shadowRadius: 4.65, // Shadow radius
        elevation: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
});

export default OnboardingScreen;