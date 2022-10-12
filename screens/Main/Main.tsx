import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography } from '../../styles/index';
import PrimaryButton from '../../components/ui/buttons/PrimaryButton/PrimaryButton';
import TertiaryButton from '../../components/ui/buttons/TertiaryButton/TertiaryButton';
import SecondaryButton from '../../components/ui/buttons/SecondaryButton/SecondaryButton';
import SRSButton from '../../components/ui/buttons/SRSButton/SRSButton';
import UnderlineTabs from '../../components/ui/tabs/UnderlineTabs/UnderlineTabs';
import PillTabs from './../../components/ui/tabs/PillTabs/PillTabs';
import TimePickerTab from '../../components/ui/tabs/TimePickerTab/TimePickerTab';
import Input from '../../components/ui/textFields/Input';
import RichTextBox from '../../components/ui/textFields/RichTextBox';
import TransactionModal from '../../components/TransactionModal/TransactionModal';
import SwapConfirmation from '../../components/SwapConfirmation/SwapConfirmation';
import BTC from '../../assets/Icons/Currencies/BTC';
import ETC from '../../assets/Icons/Currencies/ETC';

interface MainProps {}

const Main = ({}: MainProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <SwapConfirmation
        fromIcon={<BTC />}
        toIcon={<ETC />}
        fromSumma={0.1298}
        toSumma={0.1642}
        fromUSD={3.00912}
        toUSD={3.01}
        fromСurrency={'BTC'}
        toСurrency={'ETH'}
        fromWalletAddress={'0x8dfu8dfj8ja8289d93dj9d3...00kdiwjd'}
        toWalletAddress={'0x8dfu8dfj8ja8289d93dj9d3...00kdiwjd'}
        gasFee={0.004}
      />
      {/* <TransactionModal isSuccess={false} /> */}
      {/* <PrimaryButton
        width={350}
        title='trst'
        leftIcon={true}
        onPress={(): any => {}}
      />
      <SecondaryButton
        width={165}
        title='trst'
        leftIcon={true}
        onPress={(): any => {}}
      />
      <TertiaryButton
        disabled={true}
        width={70}
        leftIcon={true}
        onPress={(): any => {}}
      />
      <SRSButton type='Receive' onPress={(): any => {}} />
      <SRSButton type='Swap' onPress={(): any => {}} />
      <SRSButton type='Send' onPress={(): any => {}} />
      <UnderlineTabs leftTitle='Assets' rightTitle='NFTs' />
      <PillTabs leftTitle='Assets' rightTitle='NFTs' />
      <TimePickerTab isActive={true} time={'1m'} />
      <TimePickerTab isActive={false} time={'more'} />
      <Input
        isError={true}
        lable='Email'
        placeholder='Input your email address'
      />
      <Input
        isSuccess={true}
        lable='Email'
        placeholder='Input your email address'
      />
      <RichTextBox
        isDisabled={false}
        lable='Email'
        placeholder='Input your email address'
      /> */}
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK_BG,
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 24,
    alignItems: 'center',
  },
  text: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.GREEN,
  },
});
