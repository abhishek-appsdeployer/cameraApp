import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Tesseract,{ createWorker } from 'tesseract.js';

const Rnt = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [recognizedText, setRecognizedText] = useState('adfdf');

  const recognizeText = async (uri) => {
    // console.log("function in recongnizeText")
    // console.log("uri",uri)
    // const worker = createWorker({
    //   logger: m => console.log("logger m print ",m)
    // });
    
    // await worker.load();
    // await worker.loadLanguage('eng');
    // await worker.initialize('eng');
    // const { data: { text } } = await worker.recognize(uri);
    // setRecognizedText(text);
    // await worker.terminate();

    Tesseract.recognize(
      "https://tesseract.projectnaptha.com/img/eng_bw.png",'eng',
      { 
        logger: m => console.log(m) 
      }
    )
    .catch (err => {
      console.error(err);
    })
    .then(result => {
      // Get Confidence score
      let confidence = result
     
      
      console.log(result)
      
  
    })
  }

  const handleTakePicture = async () => {
    console.log("in handle picture")
    try {
      if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        setCapturedImage(data.uri);
        console.log(data.uri)
        recognizeText(data.uri);
      }
    } catch (error) {
      console.log("error",error);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        // flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}
      />
      <View style={styles.captureContainer}>
        <TouchableOpacity style={styles.captureButton} onPress={handleTakePicture}>
          <Text style={styles.captureText}>Take Picture</Text>
        </TouchableOpacity>
      </View>
      {/* {capturedImage && (
        <Image source={{ uri: capturedImage }} style={styles.capturedImage} />
      )} */}
      {recognizedText !== '' && (
        <View style={styles.recognizedTextContainer}>
          <Text style={styles.recognizedText}>{recognizedText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  captureContainer: {
    position: 'absolute',
    // bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    paddingVertical: 10,
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  captureText: {
    fontSize: 16,
  },
  capturedImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  recognizedTextContainer: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  recognizedText: {
    fontSize: 16,
  },
});

export default Rnt;
