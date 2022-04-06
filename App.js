import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';

//setup redux 
import {Provider} from 'react-redux'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import Navigation from './Navigation';

//Screens


export default function App() {
  return (
    <Provider store={store}>

      <SafeAreaProvider>
        
        <Navigation/>

    
      
  </SafeAreaProvider> 
      
      

    </Provider>
    
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
