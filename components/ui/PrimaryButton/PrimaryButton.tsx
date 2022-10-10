import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../../../styles';
import { LinearGradient } from 'expo-linear-gradient';
import ArrowLeft from '../../../assets/Icons/ArrowLeft';
import ArrowRight from './../../../assets/Icons/ArrowRight';

interface PrimaryButtonProps {
  disabled?: boolean;
  leftIcon?: boolean;
  rightIcon?: boolean;
  width: 350 | 165 | 70;
  title: string;
  onPress: () => {};
}

const PrimaryButton = ({
  leftIcon = false,
  rightIcon = false,
  disabled = false,
  title,
  width,
  onPress,
}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <LinearGradient
        colors={
          disabled ? [Colors.BLACK_1, Colors.BLACK_1] : Colors.GREEN_GRADIENT
        }
        style={[styles.container, { width }]}
      >
        {rightIcon && <ArrowLeft disabled={disabled} color={Colors.BLACK} />}
        <Text
          style={[
            styles.title,
            disabled ? { color: Colors.GREY } : { color: Colors.BLACK },
          ]}
        >
          {title}
        </Text>
        {leftIcon && <ArrowRight disabled={disabled} color={Colors.BLACK} />}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 19.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    borderRadius: 999,
    flexDirection: 'row',
  },
  title: {
    marginHorizontal: 12,
  },
});
