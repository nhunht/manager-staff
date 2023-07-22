import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import SignIn from "./screens/SignIn";
import Schedule from "./screens/Schedule";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FA5Style } from "@expo/vector-icons/build/FontAwesome5";

const Stack = createNativeStackNavigator();

const StaffStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
      name="SignIn" 
      component={SignIn} 
      options={{
        headerShown: true,
        headerTitleAlign: "center",
      }}
      />
      <Stack.Screen name="Schedule" component={Schedule} />
    </Stack.Navigator>
  );
};

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "Nunito Sans_regular": require("./assets/fonts/Nunito_Sans_regular.ttf"),
    "Nunito Sans_semibold": require("./assets/fonts/Nunito_Sans_semibold.ttf"),
    "Nunito Sans_bold": require("./assets/fonts/Nunito_Sans_bold.ttf"),
    "Nunito Sans_extrabold": require("./assets/fonts/Nunito_Sans_extrabold.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    "Roboto Mono_medium": require("./assets/fonts/Roboto_Mono_medium.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Ubuntu_regular: require("./assets/fonts/Ubuntu_regular.ttf"),
    Ubuntu_bold: require("./assets/fonts/Ubuntu_bold.ttf"),
    Montserrat_medium: require("./assets/fonts/Montserrat_medium.ttf"),
    Montserrat_semibold: require("./assets/fonts/Montserrat_semibold.ttf"),
    Montserrat_bold: require("./assets/fonts/Montserrat_bold.ttf"),
    Nunito_regular: require("./assets/fonts/Nunito_regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StaffStack />
    </NavigationContainer>
  );
}
