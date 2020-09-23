
import React, { useState, useEffect } from "react"
import { StyleSheet, View, Text, Button, } from "react-native"
import {useFonts, Caveat_400Regular, Caveat_700Bold } from '@expo-google-fonts/caveat';
import {AppLoading} from "expo";


const ProfileScreen = () => {


	  
	const [user, setUser] = useState(null)
	const [update, setUpdate] = useState(false)

	// useEffect: Similaire à componentDidMount et componentDidUpdate :
	// useEffect prend deux paramètres:
	// 	- le premier est la fonction à executer
	// 	- le second, le tableau de dépendances
	// Si une valeur change (dans le tableau des dépendances), alors useEffect sera de nouveau executé
	// Si on souhaite garder un comportement similaire à componentDidMount, alors on lui passera un tableau de dépendances vide
	useEffect(() => {
		fetch("https://randomuser.me/api/")
			.then(response => response.json())
			.then(data => {
				console.log(data)
				setUser(data.results[0])
			})
	}, [update])


	if (user === null)
		return (
			<View>
				<Text>Chargement...</Text>
			</View>
		)

	return (
		<View style={styles.container}>
			<Text style={styles.titre}>    Information personelles: </Text>
			<View style={styles.partInfo}>
			<Text style={styles.titreh2} >  FirstName:  </Text>
			<Text style={styles.titreh3}>{user.name.first}</Text>
			<Text style={styles.titreh2}>   LastName:  </Text>
			<Text style={styles.titreh3}> {user.name.last}</Text>
			<Text style={styles.titreh2}> Email: </Text>
			<Text style={styles.titreh3}>{user.email}</Text>
			<Text style={styles.titreh2}>  Téléphone: </Text>
			<Text style={styles.titreh3}> {user.cell}</Text>
			</View>
			<View  style={styles.imageButton}>
                            <Button
                                    color="#181613"
                                    title='Voir plus' 
                                    onPress={ () => props.navigation.navigate("Profile")}
                                    >
                            </Button> 
							
                        </View>
			
		</View>
	)
}

const styles = StyleSheet.create({
    
	container: {
        flexDirection: "coulumns",
        backgroundColor: "#C5D5BC",
        justifyContent: "space-around",
		alignItems: "center",

	},

	imageContainer: {
        borderWidth: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
	},
	partInfo: {
		marginTop: 20,
		flexDirection: "coulumns",
		justifyContent: "flex-start",
		alignItems: "center",
		
	},
	titre: {
		borderWidth: 5,
		marginTop: 30,
        color: "#181613",
		fontSize: 23,
		height: 40,
		width: 300,
		borderRadius: 350 / 33,
		
	},
	titreh2: {
		borderWidth: 5,
		marginTop: 20,
        color: "#181613",
		fontSize: 23,
		height: 40,
		width: 200,
		borderRadius: 350 / 33,
		
		

	},
	titreh3: {
		
		marginTop: 10,
        color: "#181613",
		fontSize: 20,
		height: 40,
		width: 200,
		// justifyContent: "center",
		// alignItems: "center",

	},
    imageButton: {
      
		height: 110,
		width: 110,
		borderRadius: 180 / 3,
		backgroundColor: "#F7F4F7",
        marginTop: 100,
        marginBottom: 10,
		justifyContent: "center",
		alignItems: "center",
    },

})


{/* <Button title='Voir plus' onPress={() => setPage(page => page + 1)} /> */}

export default ProfileScreen

