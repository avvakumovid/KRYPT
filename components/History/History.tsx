import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../styles';
import Confirm from '../../assets/Icons/Confirm';
import Line from './../../assets/Icons/Line';

interface HistoryProps {
  wallet: string;
  date: string;
  summa: number;
  summaUSD: number;
  currency: string;
}

const History = ({ currency, date, summaUSD, summa, wallet }: HistoryProps) => {
  const shortWallet =
    wallet.slice(0, 4) + '...' + wallet.slice(wallet.length - 3, wallet.length);
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.line, styles.firstLine]}>
          <Text style={styles.text}>From: {shortWallet}</Text>
          <Text style={styles.text}>{date}</Text>
        </View>
        <View style={[styles.line, styles.secondLine]}>
          <Text style={[styles.text, styles.receive]}>Receive</Text>
          <Text style={[styles.text, styles.summa]}>
            {summa} {currency}
          </Text>
        </View>
        <View style={styles.line}>
          <Text style={[styles.text, styles.confirm]}>
            <Confirm style={styles.confirmImg} /> Confirmed
          </Text>
          <Text style={[styles.text, styles.summaUSD]}>~ ${summaUSD}</Text>
        </View>
      </View>
      <Line />
    </>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 24,
  },
  text: {
    fontSize: 11,
    color: Colors.WHITE,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstLine: {
    marginBottom: 16,
  },
  secondLine: {
    marginBottom: 12,
  },
  receive: {
    fontSize: 16,
  },
  summa: {
    fontSize: 20,
    color: Colors.GREEN,
  },
  confirm: {
    color: Colors.GREEN,
  },
  confirmImg: {
    marginRight: 8,
  },
  summaUSD: {
    fontSize: 12,
  },
});
