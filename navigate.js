import React from "react";
import Main from "./components/main";
import SecondPage from "./components/secondPage";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name= "Main"
        component={Main}
        options={{title: 'Главная'}}
        />
      <Stack.Screen
        name= "SecondPage"
        component={SecondPage}
        options= {{title: 'Вторая Страница'}}
        />
    </Stack.Navigator>
  </NavigationContainer>
}