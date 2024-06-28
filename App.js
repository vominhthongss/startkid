import React, { useState, useEffect  } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as ROUTES from "./src/routes/routes";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { EventProvider } from "react-native-outside-press";
const Stack = createStackNavigator();
import Loader from "./src/components/Loader/Loader";
import useAuth from "./src/hook/useAuth";

function App() {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return (
      <Loader />
    );
  }

  const screens = Object.values(ROUTES).map((screen, index) => (
    <Stack.Screen
      key={index}
      name={screen.name}
      component={screen.component}
      options={screen.options}
    />
  ));

  return (
    <EventProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={isAuthenticated ? ROUTES.mainTab.name : ROUTES.login.name}>
            {screens}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </EventProvider>
  );
}

export default App;
