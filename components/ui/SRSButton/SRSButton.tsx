import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import React from 'react';

import Send from '../../../assets/Icons/Send';
import { Colors, Typography } from '../../../styles/index';
import Swap from '../../../assets/Icons/Swap';
import Receive from '../../../assets/Icons/Receive';

interface SRSButtonProps {
  onPress: () => {};
  type: 'Send' | 'Receive' | 'Swap';
}

const SRSButton = ({ onPress, type }: SRSButtonProps) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        {type == 'Swap' ? <Swap /> : type == 'Receive' ? <Receive /> : <Send />}
      </TouchableOpacity>
    </View>
  );
};

export default SRSButton;

const styles = StyleSheet.create({
  view: {
    // alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 60,
    height: 60,
    borderRadius: 999,
    backgroundColor: Colors.BLACK,
    borderTopWidth: 1,
    borderLeftWidth: 0.01,
    borderRightWidth: 0.01,
    borderColor: Colors.GREY,
  },
});
