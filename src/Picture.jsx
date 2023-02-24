import React, { useState ,useContext} from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ImageContext from './ImageContext';
const Picture = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const { images, dispatch } = useContext(ImageContext);
  const takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      setCapturedImage(data.uri);
      dispatch({ type: 'ADD_IMAGE', payload: data.uri });
    }
  };

  const saveToGallery = async () => {
    try {
      const result = await CameraRoll.saveToCameraRoll(capturedImage);
      console.log('Image saved successfully to gallery:', result);
    } catch (error) {
      console.log('Error saving image to gallery:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        style={{ flex: 1 }}
        captureAudio={false}
        ref={(ref) => {
          this.camera = ref;
        }}
      >
        <TouchableOpacity onPress={takePicture}>
          <Text>Take Picture</Text>
          <Icon name="rocket" size={30} color="#900" />
        </TouchableOpacity>
      </RNCamera>

      {capturedImage && (
        <View>
          <Image source={{ uri: capturedImage }} style={{ width: 200, height: 200 }} />

          <TouchableOpacity onPress={saveToGallery}>
            <Text>Save to Gallery</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Picture;
