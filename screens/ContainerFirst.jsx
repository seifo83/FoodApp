import React from "react";
import { StyleSheet, View, Image, Text, Button} from "react-native";
import {AppLoading} from "expo";
import {useFonts, Caveat_400Regular, Caveat_700Bold } from '@expo-google-fonts/caveat';




const ContainerFirst = (props) => {
    console.log(props);
    const pic = require("../assets/bg.jpg");
    const icon = require("../assets/seafood.png");

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
                        <View  style={styles.imageButton}>
                            <Button
                                    color="#181613"
                                    title="Start"
                                    onPress={ () => props.navigation.navigate("Profile")}
                                    >
                            </Button>
                                    
                        </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    
	container: {
        flexDirection: "coulumns",
        backgroundColor: "#C5D5BC",
        justifyContent: "center",
		alignItems: "center",

	},

	imageContainer: {
        borderWidth: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
       
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
	},
	image: {
		width: 350,
		height: 600,
    },
    imageButton: {
      
		height: 100,
		width: 100,
		borderRadius: 150 / 3,
		backgroundColor: "#F7F4F7",
        marginTop: 10,
        marginBottom: 10,
		justifyContent: "center",
		alignItems: "center",
    },
    imageIcon: {
		width: 100,
		height: 100,
	},

})




  export default ContainerFirst