import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
export default function NavFavourites() {
    const data=[
        {
            id: "123",
            icon: "home",
            location: "House",
            destination: "Mando, Kaduna, Nigeria"
        },

        {
            id: "324",
            icon: "briefcase",
            location:"Work",
            destination:"Abuja, Nigeria"
        },
    ]

  return (
    <FlatList
    data={data}
    ItemSeparatorComponent={()=>(
        <View style={[tw`bg-gray-200 `, {height:0.5}]}>

        </View>
    )}
    keyExtractor={(item) => item.id}
    renderItem={({item: {location, destination, icon}})=>(

        <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size= {18}/>

            <View>
                <Text style={tw`font-semibold text-lg  `}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
        </TouchableOpacity>
    )}
    />
    
  );
}
