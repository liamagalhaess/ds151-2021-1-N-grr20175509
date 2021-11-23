
import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CreateScreen from './src/screens/CreateScreen';
import AlterScreen from './src/screens/AlterScreen';
import { NotesProvider } from "./src/context/Context";

const Stack = createStackNavigator();

function App() {
  return (
    <NotesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CreateScreen" component={CreateScreen} />
          <Stack.Screen name="AlterScreen" component={AlterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NotesProvider>
    
  );
}

export default App;