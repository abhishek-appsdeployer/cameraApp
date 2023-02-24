import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {RNCamera} from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {ImageContext} from './ImageContext';
const Picture = ({navigation}) => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [front,setfront]=useState(0)
  const [imageUrls, setImageUrls] = useContext(ImageContext);
  const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back)
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
      alert("Image save to phone gallery successfully")
    } catch (error) {
      console.log('Error saving image to gallery:', error);
      alert("some error in saving")
    }
  };
  const toggleCameraType = () => {
    if (cameraType === RNCamera.Constants.Type.back) {
      setCameraType(RNCamera.Constants.Type.front);
      setfront(0)
    } else {
      setCameraType(RNCamera.Constants.Type.back);
      setfront(1)
    }
  };
  return (
    <View style={{flex: 1}}>
      <RNCamera
        style={{flex: 1}}
        type={cameraType}
        captureAudio={false}
        ref={ref => {
          this.camera = ref;
        }}>
        {/* <TouchableOpacity onPress={takePicture}>
          <Text>Take Picture</Text>
          <Icon name="rocket" size={30} color="#900" />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={toggleCameraType} style={{padding:20}}>
         
          {
            front?<Icon
      
      name="toggle-on"
      size={30}
      color="red"
    />:<Icon
      
      name="toggle-off"
      size={30}
      color="black"
    />
          }
        </TouchableOpacity>
        <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,marginTop:"auto",paddingBottom:20}}>
      <Icon
       onPress={saveToGallery}
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
