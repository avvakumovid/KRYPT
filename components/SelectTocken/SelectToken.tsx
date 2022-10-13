import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Opener from '../../assets/Icons/Opener';
import { Colors } from '../../styles';
import Input from '../ui/textFields/Input';
import DocumentCopy from '../../assets/Icons/DocumentCopy';
import SearchNormal from '../../assets/Icons/SearchNormal';
import AssetCard from './components/AssetCard';
import Line from './../../assets/Icons/Line';
import { currencies } from './../../service/currencies';

const SelectToken = () => {
  return (
    <View style={styles.container}>
      <Opener style={styles.opener} />
      <Text style={[styles.text, styles.heading]}>Select Token</Text>
      <View style={styles.searchField}>
        <Input
          icon={<SearchNormal />}
          lable='Search'
          placeholder='Search token'
        />
      </View>
      <Text style={[styles.text, styles.heading]}>Select Token</Text>
      <ScrollView>
        {currencies.slice(0, 10).map(c => (
          <AssetCard
            icon={c.icon}
            name={c.name}
            shortName={c.shortName}
            summa={10}
            summaUSD={123}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SelectToken;

const styles = StyleSheet.create({
  container: {
    height: 624,
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
    color: Colors.WHITE,
  },
  opener: {
    marginBottom: 23,
  },
  heading: {
    alignSelf: 'flex-start',
    marginBottom: 28,
    fontWeight: '600',
  },
  searchField: {
    marginBottom: 20,
  },
});
