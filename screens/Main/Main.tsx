import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography } from '../../styles/index';
import PrimaryButton from '../../components/ui/PrimaryButton/PrimaryButton';
import SecondaryButton from './../../components/ui/SecondaryButton/SecondaryButton';

interface MainProps {}

const Main = ({}: MainProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <PrimaryButton
        width={165}
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
