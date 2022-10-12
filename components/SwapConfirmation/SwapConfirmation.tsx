import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../styles';
import Opener from '../../assets/Icons/Opener';
import Swap from '../../assets/Icons/Swap';
import SRSButton from './../ui/buttons/SRSButton/SRSButton';
import CircleBtn from '../ui/buttons/CircleBtn/CircleBtn';
import ADA from '../../assets/Icons/Glyph/ADA';
import ALGO from './../../assets/Icons/Currencies/ALGO';
import BCH from '../../assets/Icons/Currencies/BCH';

const SwapConfirmation = () => {
  return (
    <View style={styles.container}>
      <Opener style={styles.opener} />
      <Text style={[styles.text, styles.heading]}>Swap Transaction</Text>
      <View style={styles.swapInfo}>
        <CircleBtn onPress={(): any => {}}>
          <ADA />
        </CircleBtn>
        <SRSButton onPress={(): any => {}} type={'Swap'} />
      </View>
    </View>
  );
};

export default SwapConfirmation;

const styles = StyleSheet.create({
  container: {
    height: 673,
    width: 390,
    backgroundColor: Colors.BLACK_1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: Colors.WHITE,
  },
  opener: {
    marginBottom: 31,
  },
  heading: {
    alignSelf: 'flex-start',
    marginBottom: 28,
  },
  swapInfo: {
    flexDirection: 'row',
  },
});
