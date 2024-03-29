import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createNativeStackNavigator()


export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name="Home"
                  component={HomeScreen}
              />
              <Stack.Screen
                  name="Detail"
                  component={DetailScreen}
              />
          </Stack.Navigator>
          <Text>Test</Text>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
