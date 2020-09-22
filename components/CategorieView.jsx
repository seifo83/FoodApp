import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import ListCatego from './ListCatego';




const CategorieView = () => {


    return(
        <>
            <View>
                <Text style={styles.titre}> Categories</Text>
                <ListCatego />
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


export default CategorieView