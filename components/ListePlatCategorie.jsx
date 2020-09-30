import React from "react";
import {View, Text, StyleSheet, Image, FlatList, Pressable, Button} from "react-native"

const ListePlatCategorie = (props) =>{
    console.log(props);
    console.log(props.platcategorie);
    const navig = props.platcategorie
    const liste = props.platcategorie.type
    console.log(liste);
    return(
            <View >
            
                <FlatList
                            numColumns={2}
                            data={liste}
                            renderItem={ info => {
                                console.log(info)
                                return(
                                    <Pressable onPress={() => navig.maNavigation.navigate("Details", {infoPlat: info.item})}>
                                            <View style={styles.container}>
                                                    <View style={styles.container1}>
                                                        <View style={styles.textContainer}>
                                                            <View style={styles.text}>
                                                                <Text >{info.item.title}</Text>
                                                                <Text >{info.item.descr}</Text>
                                                                <Text>{info.item.price}</Text>

                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={styles.imageContainer}>
                                                            <Image source={info.item.icon} style={styles.image}/>
                                                    </View>
                                            </View>
                                        </Pressable>


                            )}
                        }

                            KeyExtractor={(info) => info.type.id}
                        />


            </View>
            
     
    )
}


const styles = StyleSheet.create({
    
	container: {
		flexDirection: "coulumns",
        margin: 5,
        height: 250,
        width: 150,
        borderRadius: 50 / 3,
        justifyContent: "space-between",
		alignItems: "center",
        
    },
    container1: {
		flexDirection: "coulumns",
        backgroundColor: "#f0fae2",
        height: 140,
        width: 140,
        borderRadius: 50 / 3,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginTop: 50,
	},
	textContainer: {
        color: "#FAFBFA",
        fontSize: 12
	},
	imageContainer: {
		height: 100,
        width: 100,
        position: "absolute",

	},
	image: {
        height: 100,
		width: 100,
        borderRadius: 150 / 3,
    },
    text: {
        marginTop: 50,
        color: "#FAFBFA",
	},

})


export default ListePlatCategorie