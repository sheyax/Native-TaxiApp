import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames'


const data=[
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },

  {
    id: "Uber-XL-123",
    title: "UberXl",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Uber-LUX-123",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  }
]

export default function RideOptions() {

  const navigation= useNavigation();

  const [selected, setSelected]= useState(null)


  return (
    <SafeAreaView style={tw`flex-grow bg-white`}>
      <View style={tw`flex-row `}>
        <TouchableOpacity 
        onPress={() => navigation.navigate("NavigateCard")}
        style={[tw` top-3 left-3 p-3 rounded-full`]} >
          <Icon
          name="chevron-left"
          type="fontawesome"
          />
        </TouchableOpacity>
      <Text style={tw`text-center py-5 text-xl px-5`}>Select a Ride</Text>

      </View>

      <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({item: {id, title, multiplier, image}, item}) => (
        <TouchableOpacity 
        onPress={()=> setSelected(item)}
        style={tw`flex-row justify-between items-center px-10 ${
          id === selected?.id && "bg-gray-200"
        }`}>
          <Image
          style={{width: 100, height: 100, resizeMode: "contain"}}
          source={{uri: image}}
          />

          <View style={tw`-ml-6`}>
            <Text style={tw`text-xl font-semibold`}>{title}</Text>
            <Text>Travel time...</Text>
          </View>

          <Text style={tw`text-xl`}> $99</Text>
        </TouchableOpacity>
      )}
      />
      
     </SafeAreaView>
  );
}
