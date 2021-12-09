import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Pressable } from 'react-native'
import tailwind from 'tailwind-rn';

//Components
import FilterBar from '../components/FilterBar';

const renderItem = ({ item }) => {
    return (
        <Pressable 
            style={({ pressed }) => 
            [{
                opacity: pressed ? 0.5 : 1
            },
                tailwind(`w-40 h-52 border items-center justify-center rounded-xl my-2 mx-2`)
            ]}
        >
            <Image 
                source={{ uri: item.image }}
                style={ tailwind(`h-36 w-36`) }
            />
            <Text>{ item.title }</Text>
        </Pressable>
    )
}

const keyExtractor = (item) => item.id

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Salomon Ultra Glide',
      image: 'https://i.imgur.com/kU5uiEm.jpg'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Nike Pegasus Trail 3',
      image: 'https://i.imgur.com/lrFep33.jpg'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Hoka Speedgoat',
      image: 'https://i.imgur.com/Msgh38B.jpg'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Adidas Terrex Speed Ultra',
        image: 'https://i.imgur.com/FzdQHP0.jpg'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'Nike Wildhorse 7',
        image: 'https://i.imgur.com/fVYZcxn.jpg'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d75',
        title: 'Salomon S/Lab Ultra 3',
        image: 'https://i.imgur.com/scqZbJP.jpg'
    },
  ];

const HomeScreen = () => {
    return (
        <SafeAreaView style={ tailwind(`flex-1`) }>
            <View>
                <Image 
                    source={{ uri: 'https://i.imgur.com/zPqEQMf.jpg' }}
                    style={ tailwind(`h-56 w-full rounded-br-3xl`) }
                />
                <Text style={ tailwind(`absolute bottom-2 left-2 text-white text-4xl font-bold`) }>Trail Shoes</Text>
            </View>
            <View style={ tailwind(`w-full items-center flex-1`) }>
                <FilterBar />
                <FlatList
                    data={ DATA }
                    renderItem={ renderItem }
                    keyExtractor={ keyExtractor }
                    numColumns={2}
                    showsVerticalScrollIndicator="false"
                    contentContainerStyle={{
                        flexGrow: 1
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
