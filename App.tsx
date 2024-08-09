// App.js
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { store } from './src/rtk/Store'; // Import your Redux store

import DangKiScreen from './src/components/user/DangKiScreen';
import TabNavigator from './src/rourter/TapNavigator';
import DangNhapScreen from './src/components/user/DangNhapScreen';
import Index from './src/Index';
import Editpf from './src/components/product/Editpf';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}> 
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" component={Index} />
          <Stack.Screen name="dangki" component={DangKiScreen} />
          <Stack.Screen name="home" component={TabNavigator} />
          <Stack.Screen name="dangnhap" component={DangNhapScreen} />
          <Stack.Screen name="edit" component={Editpf} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;

const styles = StyleSheet.create({});
