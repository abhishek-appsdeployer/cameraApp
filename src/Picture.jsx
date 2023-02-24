import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {RNCamera} from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {ImageContext} from './ImageContext';
const Picture = ({navigation}) => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [imageUrls, setImageUrls] = useContext(ImageContext);

  const takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      setCapturedImage(data.uri);
      //   dispatch({ type: 'ADD_IMAGE', payload: data.uri });
      setImageUrls([...imageUrls, data.uri]);
    }
  };

  const saveToGallery = async () => {
    try {
      const result = await CameraRoll.saveToCameraRoll(capturedImage);
      console.log('Image saved successfully to gallery:', result);
      dispatch({type: 'ADD_IMAGE', payload: data.uri});
    } catch (error) {
      console.log('Error saving image to gallery:', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <RNCamera
        style={{flex: 1}}
        captureAudio={false}
        ref={ref => {
          this.camera = ref;
        }}>
        {/* <TouchableOpacity onPress={takePicture}>
          <Text>Take Picture</Text>
          <Icon name="rocket" size={30} color="#900" />
        </TouchableOpacity> */}
        <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,marginTop:"auto",paddingBottom:20}}>
      <Icon
        onPress={() => navigation.navigate('image')}
        name="download"
        size={30}
        color="white"
      />
      <Icon
        onPress={takePicture}
        name="camera"
        size={30}
        color="white"
      />
      <Icon
        onPress={() => navigation.navigate('image')}
        name="photo"
        size={30}
        color="white"
      />

      </View>
      </RNCamera>
      
      
      {capturedImage && (
        <View>
          <Image
            source={{uri: capturedImage}}
            style={{width: 200, height: 200}}
          />

          <TouchableOpacity onPress={saveToGallery}>
            <Text>Save to Gallery</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Picture;
