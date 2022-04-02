import React from 'react';
import {Text, StyleSheet, View, SafeAreaView, Image} from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_KEY} from '@env'
import {useDispatch} from 'react-redux'
import {setDestination, setOrigin} from '../slices/navSlice'
import NavFavourites from '../components/NavFavourites';


export default function HomeScreen() {

  const dispatch = useDispatch();

  const mapPress= (data, details=null) =>{
    dispatch(
      setOrigin({
      location: details.geometry.location,
      description: data.description

    }));

    dispatch(setDestination(null))
  }

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={
          tw`p-5 `}>

            <Image 
            style={{
              width:100,
              height: 100,
              resizeMode: 'contain'
            }}
            source={{
              uri:"https://links.papareact.com/gzs"
            }}/>

<GooglePlacesAutocomplete
                        placeholder='Where from?'
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        onPress={(data, details = null) => {

                          console.log('data',data)
                          console.log('details',details)
                            dispatch(setOrigin({
                                location: details.geometry.location,
                                description: data.description
                            }))
                            dispatch(setDestination(null))
                        }}
                        minLength={2}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        onFail={error => console.error(error)}
                        query={{
                            key: GOOGLE_MAPS_KEY,
                            language: 'en',
                        }}
                        styles={{
                            container: {
                                flex: 0,
                            },
                            textInput: {
                                fontSize: 15
                            }
                        }}
                        enablePoweredByContainer={false}
                    />

<NavOptions/>

<NavFavourites />

        </View>
        
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  homeScreen:{
    paddingTop: 50
  }

})