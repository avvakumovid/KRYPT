import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../styles';
import PrimaryButton from '../ui/buttons/PrimaryButton/PrimaryButton';
import TickCircle from '../../assets/Icons/TickCircle';
import Line from './../../assets/Icons/Line';
import CloseCircle from '../../assets/Icons/CloseCircle';

interface TransactionModalProps {
  isSuccess: boolean;
}

const TransactionModal = ({ isSuccess }: TransactionModalProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={[styles.text, styles.heading]}>
          {isSuccess ? 'Transaction Successful' : 'Transaction Failed'}
        </Text>

        {isSuccess ? (
          <TickCircle style={styles.icon} />
        ) : (
          <CloseCircle style={styles.icon} />
        )}
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae id
          amet ut sit duis
        </Text>
      </View>
      <Line style={styles.line} />
      <View>
        <PrimaryButton onPress={(): any => {}} width={165} title={'Done'} />
      </View>
    </View>
  );
};

export default TransactionModal;

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 382,
    borderRadius: 30,
    backgroundColor: Colors.BLACK,
    borderTopWidth: 0.4,
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
    borderBottomWidth: 0.2,
    borderColor: Colors.BLACK_2,
    alignItems: 'center',
    paddingTop: 41,
    paddingBottom: 32,
  },
  text: {
    color: Colors.WHITE,
    width: 230,
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  icon: {
    marginBottom: 20,
  },
  message: {
    height: 222,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  line: {
    marginBottom: 28,
  },
});
