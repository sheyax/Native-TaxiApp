import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import EatScreen from '../screens/EatScreen';
import { KeyboardAvoidingView, Platform } from 'react-native';


export default function Navigation() {

    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
<KeyboardAvoidingView
style={{flex: 1}}>
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='MapScreen' component={MapScreen}/>
            <Stack.Screen name='EatScreen' component={EatScreen}/>

        </Stack.Navigator>
        </KeyboardAvoidingView>
        
    </NavigationContainer>
  );
}
