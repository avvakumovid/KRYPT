import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Opener from '../../assets/Icons/Opener';
import { Colors } from '../../styles';
import CircleBtn from './../ui/buttons/CircleBtn/CircleBtn';
import BTC from '../../assets/Icons/Currencies/BTC';
import Line from './../../assets/Icons/Line';
import InfoCircle from './../../assets/Icons/InfoCircle';
import PrimaryButton from './../ui/buttons/PrimaryButton/PrimaryButton';
import DocumentCopy from '../../assets/Icons/DocumentCopy';
import BottomBG from '../ui/bottomBG/BottomBG';

interface SwapConfirmationProps {
  fromIcon: JSX.Element;
  fromSumma: number;
  fromСurrency: string;
  fromUSD: number;
  fromWalletAddress: string;

  toWalletAddress: string;

  gasFee: number;
}

const SwapConfirmation = ({
  fromIcon,
  fromSumma,
  fromUSD,
  fromСurrency,
  fromWalletAddress,
  toWalletAddress,

  gasFee,
}: SwapConfirmationProps) => {
  return (
    <BottomBG
      height={673}
      title='Swap Confirmation'
      backgroundColor={Colors.BLACK_BG}
    >
      {/* <View style={styles.container}>
      <Opener style={styles.opener} />
      <Text style={[styles.text, styles.heading]}>Swap Confirmation</Text> */}
      <View style={styles.main}>
        <CircleBtn>{fromIcon}</CircleBtn>

        <Text style={[styles.text, styles.mainHeading]}>{fromSumma} BTC</Text>
        <Text style={[styles.text, styles.mainSub]}>${fromUSD}</Text>
      </View>
      <Line />
      <View style={styles.addresses}>
        <View style={[styles.addressItem, styles.addressItemFrom]}>
          <Text style={[styles.text, styles.addressItemTitle]}>From:</Text>
          <View style={styles.addressItemWallet}>
            <Text style={[styles.text, styles.addressItemSub]}>
              {fromWalletAddress}
            </Text>
            <DocumentCopy color={Colors.GREEN} />
          </View>
        </View>
        <View style={styles.addressItem}>
          <Text style={[styles.text, styles.addressItemTitle]}>To:</Text>
          <View style={styles.addressItemWallet}>
            <Text style={[styles.text, styles.addressItemSub]}>
              {toWalletAddress}
            </Text>
            <DocumentCopy color={Colors.GREEN} />
          </View>
        </View>
      </View>
      <Line />
      <View style={styles.gasFee}>
        <Text style={[styles.text, styles.gasFeeTitle]}>Network fees</Text>
        <Text style={[styles.text]}>
          {gasFee}
          {fromСurrency}
        </Text>
      </View>
      <Line />
      <View style={styles.gasFee}>
        <Text style={[styles.text, styles.gasFeeTitle]}>Total</Text>
        <Text style={[styles.text]}>
          {gasFee + fromSumma}
          {fromСurrency}
        </Text>
      </View>
      <Line />
      <View style={styles.notification}>
        <InfoCircle />
        <Text style={[styles.text, styles.notificationText]}>
          Please double check recepient address
        </Text>
      </View>
      <PrimaryButton title='Confirm' onPress={(): any => {}} width={350} />
    </BottomBG>
  );
};

export default SwapConfirmation;

const styles = StyleSheet.create({
  container: {
    height: 673,
    width: 390,
    backgroundColor: Colors.BLACK_BG,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.WHITE,
  },
  opener: {
    marginBottom: 23,
  },
  heading: {
    alignSelf: 'flex-start',
    marginBottom: 30,
    fontWeight: '600',
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },
  mainHeading: {
    marginTop: 12,
    marginBottom: 8,
  },
  mainSub: {
    fontSize: 12,
  },
  addresses: {
    marginVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  addressItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addressItemTitle: {},
  addressItemWallet: { flexDirection: 'row', alignItems: 'center' },
  addressItemSub: { marginRight: 8, fontSize: 11 },
  addressItemFrom: {
    marginBottom: 28,
  },
  gasFee: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  gasFeeTitle: {
    color: Colors.WHITE,
  },
  notification: {
    marginTop: 24,
    marginBottom: 37,
    flexDirection: 'row',
    width: 350,
    height: 48,
    paddingHorizontal: 12,
    backgroundColor: Colors.GREY_U,
    alignItems: 'center',
    borderRadius: 12,
  },
  notificationText: {
    color: Colors.GREY,
    marginLeft: 12,
  },
});
