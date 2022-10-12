import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../../styles/';
interface TimePickerTabProps {
  isActive: boolean;
  time: string;
}

const TimePickerTab = ({ isActive, time }: TimePickerTabProps) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isActive ? Colors.BLACK_1 : Colors.BLACK },
      ]}
    >
      <Text
        style={[styles.time, { color: isActive ? Colors.WHITE : Colors.GREY }]}
      >
        {time}
      </Text>
    </View>
  );
};

export default TimePickerTab;

const styles = StyleSheet.create({
  time: {
    color: Colors.WHITE,
    fontSize: 11,
  },
  container: {
    height: 36,
    width: 65,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
