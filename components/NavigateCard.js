import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from 'tailwind-react-native-classnames'
import {GOOGLE_MAPS_KEY} from '@env'
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';


export default function NavigateCard() {

  const dispatch = useDispatch();
  const navigation= useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning</Text>

      <View style={tw`border-t border-gray-200 flex-shrink`}>

        <View>
          <GooglePlacesAutocomplete
          placeholder="Where to?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          fetchDetails={true}
          returnKeyType={"search"}
          minLength={2}
          onPress={(data, details = null)=> {
            dispatch(
              setDestination({
              location: details.geometry.location,
              description: data.description,
            }))
            navigation.navigate("RideOptions")
          }}
          enablePoweredByContainer={false}
          styles= {toInputBoxStyle}
          query={{
            key: GOOGLE_MAPS_KEY,
            language: 'en'
          }
          }
          />
        </View>

      </View>
     </SafeAreaView>
  );
}


const toInputBoxStyle= StyleSheet.create({
  container:{
    backgroundColor: "white",
    paddingTop: 20,
    flex:0,
  },

  textInput:{
    backgroundColor: "#e1e1e1",
    borderRadius:0,
    fontSize:18,
  },

  textInputContainer:{
    paddingHorizontal:20,
    paddingBottom: 0,

  }
})