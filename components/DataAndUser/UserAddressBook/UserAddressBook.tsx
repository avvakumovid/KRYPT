import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Colors } from '../../../styles';
import Line from '../../../assets/Icons/Line';

interface UserAddressBookProps {
  image: ImageSourcePropType;
  name: string;
  wallet: string;
}

const UserAddressBook = ({ image, name, wallet }: UserAddressBookProps) => {
  const shortWallet =
    wallet.slice(0, 9) + '...' + wallet.slice(wallet.length - 5, wallet.length);
  return (
    <>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View>
          <Text style={[styles.text, styles.heading]}>{name}</Text>
          <Text style={[styles.text]}>{shortWallet}</Text>
        </View>
      </View>
      <Line />
    </>
  );
};

export default UserAddressBook;

const styles = StyleSheet.create({
  container: {
    height: 62,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Colors.BLACK,
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 999,
    marginRight: 22,
  },
  text: {
    color: Colors.WHITE,
    fontSize: 11,
  },
  heading: {
    fontSize: 16,
    marginBottom: 3,
  },
});
