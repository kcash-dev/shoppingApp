import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'

const FilterBar = () => {
    return (
        <View style={ tailwind(`flex-row`) }>
            <View>
                <Text>Size</Text>
            </View>
            <View>
                <Text>Brand</Text>
            </View>
            <View>
                <Text>More</Text>
            </View>
        </View>
    )
}

export default FilterBar

const styles = StyleSheet.create({})
