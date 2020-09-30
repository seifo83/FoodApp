import React from "react";
import {View, Text, StyleSheet, Image, FlatList, Pressable, Button} from "react-native"
import {Categorie} from "../datacategorie";

const ListCatego = (props) =>{
    console.log(Categorie);
    console.log(props);
    return(
            <View >

                <FlatList
                    numColumns={2}
                    data={Categorie}
                    renderItem={ info => {
                        console.log(info)
                        return(

                        <Pressable onPress={() => props.changeCategorie(info.item.categorieName)}>

                            <View style={styles.container}>
                                <View style={styles.imageContainer}>
                                    <Image source={info.item.icon} style={styles.image}/>
                                </View>
                                <View style={styles.textContainer}>
                                    <View>
                                        <Text>{info.item.title}</Text>
                                        {/* <Button title={info.item.title} onPress={ListeFood} /> */}
                                    </View>
                                </View>
                            </View>
                        </Pressable>


                    )}}



                    KeyExtractor={(info) => info.id}
                />


            </View>
    )
}


const styles = StyleSheet.create({
    
	container: {
		flexDirection: "coulumns",
        margin: 5,
        backgroundColor: "#c6dbb4",
        height: 100,
        width: 150,
        borderRadius: 50 / 3,
        justifyContent: "center",
		alignItems: "center",
        
	},
	textContainer: {
	
		marginTop: 5,
        color: "#181613",
        fontSize: 12
	},
	imageContainer: {
		height: 50,
        width: 50,

	},
	image: {
		width: 50,
		height: 50,
    },
    titre: {
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 20,
       },

})


export default ListCatego