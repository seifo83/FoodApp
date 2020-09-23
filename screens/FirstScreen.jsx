import React from "react";
import { StyleSheet, View, Image, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContainerFirst from "./ContainerFirst"
import ProfileScreen from "./ProfileScreen"

const Stack = createStackNavigator()

const FirstScreen = () => {
    return(

            <NavigationContainer>
                <Stack.Navigator >
                        <Stack.Screen  name="home" component={ContainerFirst} />
                        <Stack.Screen  name="Profile" component={ProfileScreen} />
                </Stack.Navigator>

		    </NavigationContainer>
            

    )
}


  export default FirstScreen