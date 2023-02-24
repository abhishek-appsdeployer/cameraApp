import React from 'react';
import {View, Text} from 'react-native';
import Picture from './Picture';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageGallery from './ImageGallery';
import {ImageProvider} from './ImageContext';
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Picture}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="image" component={ImageGallery} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
