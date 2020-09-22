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
                <View>
                    <Text>Bonjour</Text>
                </View>
                <view>
                    <Text style={styles.name} > Hello Fabio </Text>
                </view>
                <view>
                    <Text style={styles.order} > Want to order delicious food ?</Text>
                </view>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,

  },
  name: {
    fontFamily: "Caveat_700Bold",
    fontSize: 40,
  },
  order: {
    fontFamily: "Caveat_400Regular",
    fontSize: 20,
  }
});


  export default HomeScreen