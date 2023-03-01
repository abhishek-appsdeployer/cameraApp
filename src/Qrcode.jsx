import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { RNCamera } from 'react-native-camera';

const Qrcode = () => {
  const [qrData, setQrData] = useState(null);

  const handleQRCodeScan = (event) => {
    if (event.type === RNCamera.Constants.BarCodeType.qr) {
      // alert(event.data)
      setQrData(event.data);
    }
  };

  useEffect(() => {
    return () => {
      setQrData(null);
    };
  }, []);

  const renderQRCode = () => {
    const data = 'Hello, world!';
    return (
      <View style={{ alignItems: 'center' }}>
        <QRCode value={data} size={200} />
        <Text>{data}</Text>
      </View>
    );
  };

  const renderCamera = () => {
    return (
 
       <RNCamera style={{ flex: 1 }} onBarCodeRead={handleQRCodeScan}
       
        />
       
   

    );
  };

  return (
    // <View style={{ flex: 1 }}>
    //   {qrData ? (
    //     <View style={{ alignItems: 'center' }}>
    //       <Text>Scanned QR code data:</Text>
    //       <Text>{qrData}</Text>
    //     </View>
    //   ) : (
    //     renderQRCode()
    //   )}
    //   {renderCamera()}
    // </View>
    <>
      {renderCamera()}

      {qrData ? (
        <View style={{ alignItems: 'center' }}>
          <Text>Scanned QR code data:</Text>
          <Text>{qrData}</Text>
       </View>
     ) : (
        <Text></Text>
       )}
    </>
  );
};

export default Qrcode;
