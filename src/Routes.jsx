import React from 'react';
import {View, Text} from 'react-native';
import Picture from './Picture';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageGallery from './ImageGallery';
import {ImageProvider} from './ImageContext';
import Ocr from './Ocr';
import Rnt from './Rnt';
import Qrcode from './Qrcode';
import Qrcodescanner from './Qrcodescanner';
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="qrcode"  options={{ headerShown: false }} component={Qrcodescanner} />
        <Stack.Screen name="qr"  options={{ headerShown: false }} component={Qrcode} />
       
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
