import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScreenProvider } from "./src/contexts/screen";

import Routes from "./src/routes";

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ScreenProvider>
          <Routes />
        </ScreenProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
