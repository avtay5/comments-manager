import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PostsScreen from '../screens/Posts';
import PostScreen from '../screens/Post';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: '',
        }}
      >
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
