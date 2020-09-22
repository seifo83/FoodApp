import React from "react";
import { StyleSheet, Button, Text, TextInput, View } from "react-native";
import {AppLoading} from "expo";
import {useFonts, Caveat_400Regular, Caveat_700Bold } from '@expo-google-fonts/caveat';




const HomeScreen = () => {

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
                <Text style={styles.font}>Bonjour</Text> 
            </View>
        </>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  font: {
    fontFamily: "Caveat_700Bold",
    fontSize: 50,

  }
});


  export default HomeScreen