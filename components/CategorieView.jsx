import React, {useState} from 'react';
import { Text, View, StyleSheet } from "react-native";
import ListCatego from './ListCatego';
import ListePlatCategorie from './ListePlatCategorie';







const CategorieView = (props) => {
    console.log(props)

    return(
        <>
            <View>
                <Text style={styles.titre}> Categories</Text>
                <ListCatego categorie={props.categorie} changeCategorie={props.changeCategorie} />
                <Text style={styles.titre}>Fine {props.type}</Text>

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
    marginBottom: 30,

   }
});


export default CategorieView