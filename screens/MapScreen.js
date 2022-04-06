import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import NavigateCard from '../components/NavigateCard';
import RideOptions from '../components/RideOptionsCard';
import NavFavourites from '../components/NavFavourites';


export default function MapScreen() {

  const Stack= createNativeStackNavigator()
  return (
    <View>

      <View style={tw`h-1/2`}>

        <Map/>
      </View>

      <View style={tw`h-1/2`}>
<Stack.Navigator>
  <Stack.Screen name="NavigateCard" 
  component={NavigateCard}
  options={{
    headerShown: false,
  }}/>

<Stack.Screen name="RideOptions" 
  component={RideOptions}
  options={{
    headerShown: false,
  }}/>
</Stack.Navigator>
      </View>

      

     </View>
  );
}

const styles = StyleSheet.create({

})
