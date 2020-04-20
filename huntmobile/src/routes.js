import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main';
import Product from './pages/product';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: { backgroundColor: '#da552f' },
        }}
      >
        <Stack.Screen name="Main" component={Main} options={{ title: 'JSHunt' }} />
        <Stack.Screen name="Product" component={Product} options={({ route }) => ({ title: route.params.product.title })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}