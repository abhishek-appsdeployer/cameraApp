import React, {useState, useRef} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Share,
  ScrollView
} from 'react-native';

import QRCode from 'react-native-qrcode-svg';
// import {Share} from 'react-native-share';

const Qrcodescanner = ({navigation}) => {
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');
  let myQRCode = useRef();

  const shareQRCode = () => {
    myQRCode.toDataURL((dataURL) => {
      console.log(dataURL);
      let shareImageBase64 = {
        title: 'React Native',
        url: `data:image/png;base64,${dataURL}`,
        subject: 'Share Link', //  for email
      };
      Share.share(shareImageBase64).catch(error => console.log(error));
    });
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Generated QR Code
        </Text>
        <QRCode
          getRef={(ref) => (myQRCode = ref)}
          // ref={myQRCode}
          //QR code value
          value={qrvalue ? qrvalue : 'NA'}
          //size of QR Code
          size={200}
          //Color of the QR Code (Optional)
          color="black"
          //Background Color of the QR Code (Optional)
          backgroundColor="white"
          //Center Logo size  (Optional)
          logoSize={20}
          //Center Logo margin (Optional)
          logoMargin={5}
          //Center Logo radius (Optional)
          logoBorderRadius={15}
          //Center Logo background (Optional)
          logoBackgroundColor="yellow"
        />
        <Text style={styles.textStyle}>
          Please insert any value to generate QR code
        </Text>
        <TextInput
          style={styles.textInputStyle}
          multiline={true}
          numberOfLines={5}
          textAlignVertical="top"
          onChangeText={(inputText) => setInputText(inputText)}
          placeholder="Enter Text to genrate QR CODE"
          placeholderTextColor="white"
          value={inputText}
        />
        <View style={{flexDirection:"row",gap:20}}>

       
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setQrvalue(inputText)}>
          <Text style={styles.buttonTextStyle}>
            Generate QR Code
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={shareQRCode}>
          <Text style={styles.buttonTextStyle}>
            Share QR Code
          </Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={shareQRCode}>
          <Text onPress={()=>navigation.navigate("qr")} style={styles.buttonTextStyle}>
            SCARN QR CODE
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Qrcodescanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle: {
    
    
    width:"80%",
  
    
    
    backgroundColor:"blue",
    borderRadius:5,
    color:"white"
  },
  buttonStyle: {
    backgroundColor: 'blue',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#51D8C7',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});