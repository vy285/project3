import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Welcome, Login, Signup } from './screens';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen 
          name='Welcome'
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='Login'
          component={Login}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen 
          name='Signup'
          component={Signup}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
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
