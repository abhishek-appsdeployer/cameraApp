import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

import Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';


const Ocr = () => {
  const [ocrResult, setOcrResult] = useState(null);

  const recognizeText = async (uri) => {
    console.log("in recoginize text funcction")
    console.log(uri)
    // try {
    //     const { data } = await Tesseract.recognize(uri, 'eng',);
    //     setOcrResult(data);
    //   } catch (error) {
    //     console.log("err",error);
    //   }
    // 2nd method
    // Tesseract.recognize(
    //     "https://images.unsplash.com/photo-1584447128309-b66b7a4d1b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRleHR8ZW58MHx8MHx8&w=1000&q=80",

    //     'eng',
    //     { logger: m => console.log("ab",m) }
    //   ).then(({ data: { text } }) => {
    //     console.log(text);
    //   })

    // 3rd method
    const worker = await createWorker({
        logger: m => console.log(m)
      });
    await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(uri);
  console.log(text);
  await worker.terminate();

  
  };

  const takePicture = async (camera) => {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    console.log("pc")
    console.log(data.uri)
    recognizeText(data.uri);
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      >
        {({ camera, status }) => {
          if (status !== 'READY') return <View />;
          return (
            <TouchableOpacity onPress={() => takePicture(camera)}>
              <Text style={{ fontSize: 20,color:"red" }}>Take Picture</Text>
            </TouchableOpacity>
          );
        }}
      </RNCamera>
      {ocrResult && (
        <View style={{ padding: 10 }}>
          <Text>OCR Result:</Text>
          <Text>{ocrResult}</Text>
        </View>
      )}
    </View>
  );
};

export default Ocr;