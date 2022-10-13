import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CircleBtn from '../../ui/buttons/CircleBtn/CircleBtn';
import { Colors } from '../../../styles';
import Line from '../../../assets/Icons/Line';

interface AssetCardProps {
  name: string;
  shortName: string;
  summa: number;
  summaUSD: number;
  icon: any;
}

const AssetCard = ({
  name,
  shortName,
  summa,
  summaUSD,
  icon,
}: AssetCardProps) => {
  return (
    <>
      <View style={styles.container}>
        <CircleBtn>{icon()}</CircleBtn>
        <View style={styles.content}>
          <View style={styles.info}>
            <Text style={[styles.text, styles.heading]}>{shortName}</Text>
            <Text style={[styles.text, styles.sub]}>{name}</Text>
          </View>
          <View style={styles.info}>
            <Text style={[styles.text, styles.heading, styles.right]}>
              {summa}
            </Text>
            <Text style={[styles.text, styles.sub, styles.right]}>
              (${summaUSD})
            </Text>
          </View>
        </View>
      </View>
      <Line />
    </>
  );
};

export default AssetCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 350,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  content: {
    width: 276,
    marginLeft: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {},
  text: {
    color: Colors.WHITE,
  },
  heading: {
    fontSize: 16,
  },
  sub: {
    fontSize: 11,
  },
  right: {
    textAlign: 'right',
  },
});
