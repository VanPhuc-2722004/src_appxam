import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../../components/product/HomeScreen'; 
const HomeNavigator = () => {
    const HomeStack = createNativeStackNavigator();
    return (
      <HomeStack.Navigator
      screenOptions={{
          headerShown:false
      }}
      >
        <HomeStack.Screen name='Home' component={HomeScreen}/>
      </HomeStack.Navigator>
    )
}

export default HomeNavigator

const styles = StyleSheet.create({})