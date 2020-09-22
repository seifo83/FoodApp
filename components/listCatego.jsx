import React from "react";
import {View, Text, StyleSheet, Image, FlatList} from "react-native"
import {Categorie} from "../datacategorie";

const ListCatego = () =>{
    console.log(Categorie);

    return(
        <View >

            <FlatList
                numColumns={2}
                data={Categorie}
                renderItem={ info => (
                    <View style={styles.container} >
                        <View style={styles.imageContainer}>
                            <Image source={info.item.icon} style={styles.image}/>
                        </View>
                        <View style={styles.textContainer}>
                            <View>
                                <Text>{info.item.title}</Text>
                            </View>
                        </View>
                    </View>
                )}

                KeyExtractor={(info) => info.id}
            />

		</View>
    )
}


const styles = StyleSheet.create({
    
	container: {
		flexDirection: "coulumns",
        margin: 5,
        backgroundColor: "#FAFBFA",
        height: 150,
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
})


export default ListCatego