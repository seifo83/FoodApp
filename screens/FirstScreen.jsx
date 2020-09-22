import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import {AppLoading} from "expo";
import {useFonts, Caveat_400Regular, Caveat_700Bold } from '@expo-google-fonts/caveat';



const FirstScreen = () => {

    const pic = require("../assets/bg.jpg");

    let [fontsLoaded] = useFonts({
        Caveat_400Regular,
        Caveat_700Bold,
      })

      if (!fontsLoaded) {
        return <AppLoading />;

      }

    return(
        <>
            <View style={styles.container} >
                        <View style={styles.imageContainer}>
                            <Image source={pic} style={styles.image}/>
                        </View>
                        <View>
                            <Text style={styles.titre}>Welcome !</Text>
                        </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    
	container: {
        flex: 1,
        backgroundColor: "#C5D5BC",
        

	},

	imageContainer: {
	
        borderWidth: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        justifyContent: "center",
		alignItems: "center",
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
	},
	image: {
		width: 350,
		height: 600,
    },
    
    titre: {
        fontFamily: "Caveat_700Bold",
        fontSize: 50,
        marginTop: 10,

       }
})




  export default FirstScreen