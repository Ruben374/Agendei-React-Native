import React, { useState } from "react";
import { StatusBar, View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  NotoSans_700Bold_Italic,
  NotoSans_400Regular,
  NotoSans_700Bold,
} from "@expo-google-fonts/noto-sans";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stacks/MainStack";
import UserContextProvider from "./src/contexts/UserContext";
import EstContextProvider from "./src/contexts/EstContext";
import {
  AdMobBanner,
  AdMobInterstitial,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_700Bold_Italic,
    NotoSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <UserContextProvider>
      <NavigationContainer>
        <EstContextProvider>
          <StatusBar animated={true} backgroundColor="black" />
          <MainStack />
        </EstContextProvider>
      </NavigationContainer>
    </UserContextProvider>
  );
};
