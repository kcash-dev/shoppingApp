import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Pressable } from 'react-native'
import tailwind from 'tailwind-rn';

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
            <Text>{ item.title }</Text>
        </Pressable>
    )
}

const keyExtractor = (item) => item.id

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Fourth Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'Fifth Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d75',
        title: 'Sixth Item',
    },
  ];

const HomeScreen = () => {
    return (
        <SafeAreaView style={ tailwind(`flex-1`) }>
            <View>
                <Image 
                    source={{ uri: 'https://i.imgur.com/zPqEQMf.jpg' }}
                    style={ tailwind(`h-56 w-full rounded-br-3xl rounded-tl-3xl`) }
                />
            </View>
            <View style={ tailwind(`w-full items-center flex-1`) }>
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
