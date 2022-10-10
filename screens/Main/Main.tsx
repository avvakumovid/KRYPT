import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography } from '../../styles/index';
import PrimaryButton from '../../components/ui/PrimaryButton/PrimaryButton';
import SecondaryButton from './../../components/ui/SecondaryButton/SecondaryButton';
import TertiaryButton from '../../components/ui/TertiaryButton/TertiaryButton';
import SendButton from '../../components/ui/SendButton/SendButton';

interface MainProps {}

const Main = ({}: MainProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <PrimaryButton
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
      <SendButton type='Receive' onPress={(): any => {}} />
      <SendButton type='Swap' onPress={(): any => {}} />
      <SendButton type='Send' onPress={(): any => {}} />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
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
