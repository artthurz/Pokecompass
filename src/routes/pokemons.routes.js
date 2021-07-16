import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PokemonsProvider } from "../contexts/pokemons";
import ScreenContext from "../contexts/screen";

import List from "../views/List";
import Details from "../views/Details";

const Stack = createStackNavigator();

const PokemonsRoutes = ({ navigation }) => {
  const { headerColor } = useContext(ScreenContext);
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: headerColor,
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
    },
    headerTintColor: "white",
    headerBackTitle: "Voltar",
    
  };
  return (
    <PokemonsProvider>
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="List"
        component={List}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTitle: "Details",
        }}
      />
    </Stack.Navigator>
    </PokemonsProvider>
  );
};

export default PokemonsRoutes;
