import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as ROUTES from "./src/routes/routes";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { EventProvider } from "react-native-outside-press";
import SwipeUpDrawer from "./src/components/SwipeUpDrawer/SwipeUpDrawer";

const Stack = createStackNavigator();

function App() {
  const [initialRoute, setInitialRoute] = useState(ROUTES.mainTab.name);
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
          <Stack.Navigator initialRouteName={initialRoute}>
            {screens}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </EventProvider>
  );
}

export default App;
