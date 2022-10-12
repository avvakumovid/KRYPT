import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../styles';
import Opener from '../../assets/Icons/Opener';
import SRSButton from './../ui/buttons/SRSButton/SRSButton';
import CircleBtn from '../ui/buttons/CircleBtn/CircleBtn';
import Line from '../../assets/Icons/Line';
import DocumentCopy from '../../assets/Icons/DocumentCopy';
import InfoCircle from '../../assets/Icons/InfoCircle';
import PrimaryButton from '../ui/buttons/PrimaryButton/PrimaryButton';

interface SwapConfirmationProps {
  fromIcon: JSX.Element;
  fromSumma: number;
  fromСurrency: string;
  fromUSD: number;
  fromWalletAddress: string;

  toIcon: JSX.Element;
  toSumma: number;
  toСurrency: string;
  toUSD: number;
  toWalletAddress: string;

  gasFee: number;
}

const SwapConfirmation = ({
  fromIcon,
  fromSumma,
  fromUSD,
  fromСurrency,
  fromWalletAddress,

  toIcon,
  toSumma,
  toUSD,
  toСurrency,
  toWalletAddress,

  gasFee,
}: SwapConfirmationProps) => {
  return (
    <View style={styles.container}>
      <Opener style={styles.opener} />
      <Text style={[styles.text, styles.heading]}>Swap Transaction</Text>
      <View style={styles.swapInfo}>
        <View style={styles.swapInfoItem}>
          <CircleBtn disabled={true}>{fromIcon}</CircleBtn>
          <Text style={[styles.text, styles.swapInfoHeading]}>
            {fromSumma} {fromСurrency}
          </Text>
          <Text style={[styles.text, styles.swapInfoSub]}>${fromUSD}</Text>
        </View>
        <SRSButton onPress={(): any => {}} type={'Swap'} />
        <View style={styles.swapInfoItem}>
          <CircleBtn disabled={true}>{toIcon}</CircleBtn>
          <Text style={[styles.text, styles.swapInfoHeading]}>
            {toSumma} {toСurrency}
          </Text>
          <Text style={[styles.text, styles.swapInfoSub]}>${toUSD}</Text>
        </View>
      </View>
      <Line />
      <View style={styles.addresses}>
        <View style={[styles.addressItem, styles.addressItemFrom]}>
          <Text style={[styles.text, styles.addressItemTitle]}>From:</Text>
          <View style={styles.addressItemWallet}>
            <Text style={[styles.text, styles.addressItemSub]}>
              {fromWalletAddress}
            </Text>
            <DocumentCopy />
          </View>
        </View>
        <View style={styles.addressItem}>
          <Text style={[styles.text, styles.addressItemTitle]}>To:</Text>
          <View style={styles.addressItemWallet}>
            <Text style={[styles.text, styles.addressItemSub]}>
              {toWalletAddress}
            </Text>
            <DocumentCopy />
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  swapInfoItem: {
    alignItems: 'center',
  },
  swapInfoHeading: {
    fontSize: 16,
    marginTop: 12,
  },
  swapInfoSub: {
    fontSize: 12,
    marginTop: 8,
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
    color: Colors.GREY,
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
