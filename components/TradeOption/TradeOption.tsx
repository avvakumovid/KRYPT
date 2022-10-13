import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BottomBG from '../ui/bottomBG/BottomBG';
import { Colors } from '../../styles';
import ArrowRightSimple from '../../assets/Icons/ArrowRightSimple';

const TradeOption = () => {
  return (
    <BottomBG height={229} title='Scan QR code'>
      <View style={styles.item}>
        <Text style={styles.text}>Buy</Text>
        <ArrowRightSimple />
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Sale</Text>
        <ArrowRightSimple />
      </View>
    </BottomBG>
  );
};

export default TradeOption;

const styles = StyleSheet.create({
  content: {},
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.WHITE,
  },
  item: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
});
