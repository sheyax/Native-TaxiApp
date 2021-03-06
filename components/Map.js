import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectOrigin, selectDestination } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_KEY} from '@env'
import { useRef } from 'react';
import { useEffect } from 'react';

export default function Map() {

  const origin = useSelector(selectOrigin)
  const destination= useSelector(selectDestination)

  //reference to the maps
  const mapRef= useRef(null);

  useEffect(() => {

    if(!origin || !destination) return;

    //zoom and fit markers
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {top:50, right:50, bottom: 50, left:50},
    })    
  }, [origin, destination])

  return (
    <MapView
    ref={mapRef}
    style= {tw`flex-1`}
    mapType="mutedStandard"

    initialRegion={{
      latitude: origin?.location.lat,
      longitude: origin?.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
  >

    {origin && destination && (

      <MapViewDirections
      
      origin={origin.description}
      destination= {destination.description}
      apikey={GOOGLE_MAPS_KEY}
      strokeWidth={5}
      strokeColor="black"
      />

    )}

    {origin?.location && (
      <Marker
      coordinate={{
        latitude: origin?.location.lat,
        longitude: origin?.location.lng
      }}
      
      title="Origin"
      description={origin.description}
      identifier="origin"/>

    )}

{destination?.location && (
      <Marker
      coordinate={{
        latitude: destination?.location.lat,
        longitude: destination?.location.lng
      }}
      
      title="Destination"
      description={destination.description}
      identifier="destination"/>

    )}

    
    </MapView>
  );
}

const styles = StyleSheet.create({
    
})