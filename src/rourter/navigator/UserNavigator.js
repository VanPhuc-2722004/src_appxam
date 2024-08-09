import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import UserScreen from '../../components/user/UserScreen'; 
const UserNavigator = () => {
    const UserStack = createNativeStackNavigator();
    return (
      <UserStack.Navigator
      screenOptions={{
          headerShown:false
      }}
      >
        <UserStack.Screen name='User' component={UserScreen}/>
      </UserStack.Navigator>
    )
}

export default UserNavigator

const styles = StyleSheet.create({})