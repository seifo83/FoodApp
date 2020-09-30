import React, {useState} from 'react';
import { Text, View, StyleSheet, Pressable  } from "react-native";
import ListePlatCategorie from './ListePlatCategorie';







const PlatsCategorieView = (type) => {
    console.log(type)
    console.log(type.maNavigation)

    const [plat, setPlat] = useState("")
    console.log(plat);
    console.log(setPlat);

    return(
        <>
            <View>
                    <ListePlatCategorie maNavigation={type.navigation}  platcategorie={type} changePlat={setPlat} />
            </View>

            {/* <View>
                {DataCategorie.map((item) => {
                    console.log(DataCategorie);
                    <View><Text>{DataCategorie.item.title}</Text></View>
                })}
            </View> */}
        </>
    )

}


const styles = StyleSheet.create({
   titre: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
   }
});


export default PlatsCategorieView