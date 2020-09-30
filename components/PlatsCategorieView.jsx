import React, {useState} from 'react';
import { Text, View, StyleSheet } from "react-native";
import ListePlatCategorie from './ListePlatCategorie';







const PlatsCategorieView = (type) => {
    console.log(type)

    return(
        <>
            <View>
                <ListePlatCategorie  platcategorie={type} />

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