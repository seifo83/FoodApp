import React from "react";
import { StyleSheet, View, Image, Button} from "react-native";
import {AppLoading} from "expo";
import {useFonts, Caveat_400Regular, Caveat_700Bold } from '@expo-google-fonts/caveat';




const ContainerFirst = (props) => {
    console.log(props);
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
                        <View style={styles.footer}>
                        <View  style={styles.imageButton}>
                            <Button
                                    color="#181613"
                                    title="Profil"
                                    onPress={ () => props.navigation.navigate("Profile")}
                                    >
                            </Button>
                            </View>
                            <View  style={styles.imageButton}>
                            <Button
                                    color="#181613"
                                    title="EatTime"
                                    onPress={ () => props.navigation.navigate("Food")}
                                    >
                            </Button>
                        </View>
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
        marginTop: 40,
        marginBottom: 40,
        marginLeft: 15,
		justifyContent: "center",
		alignItems: "center",
    },
    footer: {
      flexDirection: "row",
      
	
	},

})





  export default ContainerFirst