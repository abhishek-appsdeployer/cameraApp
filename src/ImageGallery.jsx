import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import ImageContext from './ImageContext';

const ImageGallery = () => {
  const { images } = useContext(ImageContext);

  return (
    <View style={{ flex: 1 }}>
      {images.map((image, index) => (
        <View key={index}>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        </View>
      ))}
    </View>
  );
};

export default ImageGallery;
