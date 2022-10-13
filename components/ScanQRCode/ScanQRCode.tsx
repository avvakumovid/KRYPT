import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BottomBG from '../ui/bottomBG/BottomBG';
import { Colors } from '../../styles';
import PillTabs from '../ui/tabs/PillTabs/PillTabs';
import PrimaryButton from './../ui/buttons/PrimaryButton/PrimaryButton';

const ScanQRCode = () => {
  return (
    <BottomBG height={624} title='Scan QR code'>
      <View style={styles.qrCode}></View>
      <Text style={styles.text}>Select Token Address to send funds</Text>
      <PrimaryButton onPress={(): any => {}} width={350} title='Confirm' />
    </BottomBG>
  );
};

export default ScanQRCode;

const styles = StyleSheet.create({
  qrCode: {
    width: 334,
    height: 336,
    borderWidth: 1,
    borderColor: Colors.GREEN,
    borderStyle: 'dashed',
    borderSpacing: 12,
    marginBottom: 36,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.WHITE,
    marginBottom: 27,
  },
});
