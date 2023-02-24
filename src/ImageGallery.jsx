import React, { useContext } from 'react';
import { View, Text, Image,ScrollView } from 'react-native';
import {ImageContext} from './ImageContext';

const ImageGallery = () => {
    const [imageUrls] = useContext(ImageContext);

  return (
    <ScrollView>
      {imageUrls.map((imageUrl, index) => (
        <Image key={index} source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
      ))}
    </ScrollView>
  );
};

export default ImageGallery;
