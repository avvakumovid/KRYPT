import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main/Main';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Main' component={Main} options={{ title: 'Main' }} />
    </Stack.Navigator>
  );
};

export default Navigation;
