import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContainerFirst from "./ContainerFirst"
import ProfileScreen from "./ProfileScreen"
import FoodScreen from "./FoodScreen"



const Stack = createStackNavigator()

const FirstScreen = () => {
    return(

            <NavigationContainer>
                <Stack.Navigator >
                        <Stack.Screen options={{headerShown: false}} name="home" component={ContainerFirst}  />
                        <Stack.Screen  name="Profile" component={ProfileScreen} />
                        <Stack.Screen  name="Food" component={FoodScreen} />
                </Stack.Navigator>

		    </NavigationContainer>


    )
}


  export default FirstScreen