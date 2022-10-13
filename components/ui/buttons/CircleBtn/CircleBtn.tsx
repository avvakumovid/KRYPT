import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import React from 'react';

import Send from '../../../../assets/Icons/Send';
import { Colors, Typography } from '../../../../styles/index';
import Swap from '../../../../assets/Icons/Swap';
import Receive from '../../../../assets/Icons/Receive';

interface CircleBtnProps {
  onPress?: () => {};
  children: any;
  disabled?: boolean;
}


const CircleBtn = ({ children, disabled = false, onPress }: CircleBtnProps) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        disabled={disabled}
        style={styles.container}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default CircleBtn;

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
    backgroundColor: Colors.GREY_BG,
    borderTopWidth: 1,
    borderLeftWidth: 0.01,
    borderRightWidth: 0.01,
    borderColor: Colors.GREY,
  },
});
