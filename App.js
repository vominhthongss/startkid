import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as ROUTES from "./src/routes/routes";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

function App() {
  const screens = Object.values(ROUTES).map((screen, index) => (
    <Stack.Screen
      key={index}
      name={screen.name}
      component={screen.component}
      options={screen.options}
    />
  ));

  return (
    <NavigationContainer>
      <Stack.Navigator>{screens}</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
