import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import Send from '../../../assets/Icons/Send';
import { Colors } from '../../../styles/index';
import Swap from '../../../assets/Icons/Swap';
import Receive from '../../../assets/Icons/Receive';

interface SendButtonProps {
  onPress: () => {};
  type: 'Send' | 'Receive' | 'Swap';
}

const SendButton = ({ onPress, type }: SendButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {type == 'Swap' ? <Swap /> : type == 'Receive' ? <Receive /> : <Send />}
    </TouchableOpacity>
  );
};

export default SendButton;

const styles = StyleSheet.create({
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
