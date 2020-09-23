
import React, { useState, useEffect } from "react"
import { View, Text, Button, FlatList } from "react-native"

const ProfileScreen = () => {
	const [user, setUser] = useState(null)
	const [update, setUpdate] = useState(false)
	const [pictures, setPictures] = useState([])
	const [page, setPage] = useState(1)

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
		<View>
			<Text>Information personelles:</Text>
			<Text>
				{user.name.first} {user.name.last}
			</Text>
			<Text>Email: {user.email}</Text>
			<Text>Téléphone: {user.cell}</Text>
			<Button title='Voir plus' onPress={() => setPage(page => page + 1)} />
		</View>
	)
}


export default ProfileScreen

