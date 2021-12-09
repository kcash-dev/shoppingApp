import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';

const sizeData = [{
    value: '1'
  }, {
    value: '2'
  }, {
    value: '3'
  }]

  const brandData = [{
    value: 'Nike'
  }, {
    value: 'Adidas'
  }, {
    value: 'Salomon'
  }]

  const moreData = [{
    value: 'Banana'
  }, {
    value: 'Mango'
  }, {
    value: 'Pear'
  }]

const FilterBar = () => {
    return (
        <View style={ tailwind(`flex-row`) }>
            <Dropdown 
                // style={ tailwind(`w-1/3 h-8 items-center justify-center  border`) } 
                label="Size"
                data={ sizeData }
                // pickerStyle={{borderBottomColor: 'transparent', borderWidth: 0}}
                containerStyle={{ width: '33%' }}
                iconColor="#ffff"
            />
            <Dropdown 
                // style={ tailwind(`w-1/3 h-8 items-center justify-center  border`) } 
                label="Brand"
                data={ brandData }
                containerStyle={{ width: '33%' }}
                iconColor="#ffff"
            />
            <Dropdown 
                // style={ tailwind(`w-1/3 h-8 items-center justify-center  border`) } 
                label="More"
                data={ moreData }
                containerStyle={{ width: '33%' }}
                iconColor="#ffff"
            />
        </View>
    )
}

export default FilterBar

const styles = StyleSheet.create({})
