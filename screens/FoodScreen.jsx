import React, {useState} from "react";
import { StyleSheet, Button, Text, TextInput, View } from "react-native";
import {AppLoading} from "expo";
import {useFonts, Caveat_400Regular, Caveat_700Bold } from '@expo-google-fonts/caveat';
import CategorieView from '../components/CategorieView'



const FoodScreen = (props) => {

  const [categorie, setCategorie] = useState("dinnerfood")
  const [update, setUpdate] = useState("")
 

  const setUpdate = () => {
    setCategorie(update => {
      
    } )
    
	}



console.log(props);
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
                    <Text style={styles.name} > Hello Fabio </Text>
                    <Text style={styles.order} > Want to order delicious food ?</Text>
                </View>
                <View>
                    
                </View>
                <CategorieView onClick={} />
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
    padding: 30,

  },
  part1:{
    flexDirection: 'column',
  },
  name: {
    fontFamily: "Caveat_700Bold",
    fontSize: 40,
    marginTop: 10,
    // backgroundColor: "grey",
    // borderWidth: 5,
    // borderRadius: 20,

  },
  order: {
    fontFamily: "Caveat_400Regular",
    fontSize: 25,
    marginTop: 10,
  }
});


  export default FoodScreen