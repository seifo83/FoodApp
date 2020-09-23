import React from "react";
import { StyleSheet, View, Image, Icon, Button} from "react-native";

import {AppLoading} from "expo";
import {useFonts, Caveat_400Regular, Caveat_700Bold } from '@expo-google-fonts/caveat';




const ContainerFirst = (props) => {
    console.log(props);
    const pic = require("../assets/bg.jpg");
    const icon = require("../assets/chinesefood.png")

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

                        <Button
                            style={styles.imageButton}
                            source={icon}
                            title="Go"
                            onPress={ () => props.navigation.navigate("Profile")}

                        /> 
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

       },
       imageButton: {
		height: 50,
		width: 50,
		borderRadius: 50 / 3,
		backgroundColor: "#F7F4F7",
		marginRight: 15,
		justifyContent: "center",
		alignItems: "center",
	},

})




  export default ContainerFirst