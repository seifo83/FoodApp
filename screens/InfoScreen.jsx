import React, {useState} from "react";
import { StyleSheet, Button, Text, Image, View } from "react-native";
import {AppLoading} from "expo";
import {useFonts, Caveat_400Regular, Caveat_700Bold } from '@expo-google-fonts/caveat';


const InfoScreen = (props) => {
    console.log(props);
    const detailPlat = props.route.params.infoPlat
    console.log(detailPlat )

    let [fontsLoaded] = useFonts({
        Caveat_400Regular,
        Caveat_700Bold,
      })

      if (!fontsLoaded) {
        return <AppLoading />;

      }

    return(
        <>
                            <View style={styles.container}>
                                <View style={styles.container1}> 
                                    <Text color="#FAFBFA" style={styles.text1}>{detailPlat.title}</Text>
                                    <Text color="#FAFBFA" style={styles.text1}>{detailPlat.descr}</Text>
                                </View>
                                <View style={styles.imageContainer}>
                                    <Image source={detailPlat.icon} style={styles.image}/>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.text1}>{detailPlat.price}</Text>
                                    <View style={styles.Button}>
                                        <Button color="#181613" title="Add to Cart  "></Button>
                                    </View>
                                </View>
                            </View>
        </>
    )
}


const styles = StyleSheet.create({
    
	container: {
		flexDirection: "coulumns",
        borderRadius: 50 / 3,
        justifyContent: "space-around",
        alignItems: "center",
        width: 350,
        height: 600,
        color: "#FAFBFA",
        marginTop: 25,
        
    },
    container1: {
        borderRadius: 50 / 3,
        color: "#FAFBFA",
        fontSize: 50,
        marginTop: 20,
        
    },
    textHeader: {
        fontFamily: "Caveat_700Bold",
        
        color: "#FAFBFA",

    },
	textContainer: {
        color: "#FAFBFA",
        
    },
    text1: {
        fontFamily: "Caveat_400Regular",
        fontSize: 50,
        marginTop: 5,
    },
	
	image: {
        height: 300,
		width: 300,
        borderRadius: 350 / 2,
        
        
    },
    text: {
        color: "#FAFBFA",
    },
    Button: {
        
        borderRadius: 20,
    }

})


  export default InfoScreen