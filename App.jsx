import React from 'react';
import {View, Text} from 'react-native';

import { ImageProvider } from './src/ImageContext';
import Routes from './src/Routes';

const App = () => {
  return (
    <>
    <ImageProvider>
    <Routes />
    </ImageProvider>
     
    </>
  );
};

export default App;
