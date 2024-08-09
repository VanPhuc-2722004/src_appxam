import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import NotifiScreen from '../../components/product/NotifiScreen'; 
const NotifiNavigator = () => {
    const NotifiStack = createNativeStackNavigator();
    return (
      <NotifiStack.Navigator
      screenOptions={{
          headerShown:false
      }}
      >
        <NotifiStack.Screen name='Notifi' component={NotifiScreen}/>
      </NotifiStack.Navigator>
    )
}

export default NotifiNavigator

const styles = StyleSheet.create({})