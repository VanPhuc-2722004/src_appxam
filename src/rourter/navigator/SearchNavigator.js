import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SearchScreen from '../../components/product/SearchScreen'; 
const SearchNavigator = () => {
    const SearchStack = createNativeStackNavigator();
    return (
      <SearchStack.Navigator
      screenOptions={{
          headerShown:false
      }}
      >
        <SearchStack.Screen name='Search' component={SearchScreen}/>
      </SearchStack.Navigator>
    )
}

export default SearchNavigator

const styles = StyleSheet.create({})